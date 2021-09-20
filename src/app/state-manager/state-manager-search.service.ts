/* imports from node_modules */
import FuzzySet from 'fuzzyset.js';
import { AddOperation } from 'fast-json-patch/lib/core';
import { Injectable } from '@angular/core';
import { Operation, compare } from 'fast-json-patch';
import { cloneDeep } from 'lodash';
/* imports from app */
import { CleanFields, FieldProperties, ItemIndexed, ItemObject } from '@monographia/state-manager/state-manager.item';
import { FlattenService } from '@monographia/flatten.service';
import { QuaesitorService } from '@monographia/quaesitor.service';
import { RegexpService, antiAlphaNumericSymbolDash, dash, forma, html, italics, subspecies, variety } from '@monographia/regexp.service';
import { XXhashService } from '@monographia/xxhash.service';
import { isFormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { isUserPermission } from '@monographia/user-permission.model';
export class SearchObject {
	original: string;
	score: number;
}
export class SearchHash {
	[key: string]: SearchObject; /* key = xxhash64 of a flattened string */
}
export class SearchReturn {
	fuzzy?: FuzzySet;
	records?: Array<ItemObject>;
	searchHash?: SearchHash;
}
@Injectable({
	providedIn: 'root'
})
export class StateManagerSearchService {
	private cleanString(x: string, c: CleanFields|FieldProperties): string {
		let y: string = x;
		if(c.clean === true){
			y = x.replace(dash, '-').replace(/-+/g, '-').replace(antiAlphaNumericSymbolDash, ' ');
		}
		return(y.replace(html, '').replace(/\s+/g, ' ').trim());
	}
	constructor(private flattenService: FlattenService, private quaesitorService: QuaesitorService, private regexpService: RegexpService, private xxhashService: XXhashService){
	}
	private async createSearchField(x: Array<string>): Promise<string> {
		let s: string = '';
		if(x.length > 0){
			const h: any = {};
			for(let k = x.length-1; k >= 0; k--){
				x[k] = this.flattenService.flatten(x[k].trim());
				const h64 = await this.xxhashService.h64(x[k]);
				if(h[h64] === undefined){
					h[h64] = true;
					s += x[k] + '\n';
				}
			}
			return(s.slice(0, -1));
		} else {
			return(s);
		}
	}
	private async createSearchHash(x: Array<Array<string>>): Promise<SearchReturn> {
		const h: any = {};
		for(let k = x.length-1; k >= 0; k--){
			for(let j = x[k].length-1; j >= 0; j--){
				const y: string = this.flattenService.flatten(x[k][j].trim());
				const h64: string = await this.xxhashService.h64(y);
				if(h[h64] === undefined){
					h[h64] = {
						score: 1,
						flattened: y,
						original: x[k][j]
					};
				} else {
					h[h64].score += 1;
				}
			}
		}
		const f: Array<string> = [];
		for(const p in h){
			if(this.regexpService.xxHashHex(p) === true){
				f.push(h[p].flattened);
				delete(h[p].flattened);
			}
		}
		return({
			fuzzy: FuzzySet(f),
			searchHash: h
		});
	}
	private async insertHashString(x: string, c: FieldProperties): Promise<Array<string>> {
		const r: Array<string> = [];
		const y: Array<string> = await this.quaesitorService.extractSpecies(x, true);
		for(let k = y.length-1; k >= 0; k--){
			r.push(...this.insertTerminal(y[k]));
		}
		if(c.indexPhrases === true){
			r.push(...this.threeWaySplit(this.cleanString(x.toLowerCase(), c)));
		} else {
			r.push(this.cleanString(x.toLowerCase(), c));
		}
		return(r);
	}
	private insertTerminal(x: string): Array<string> {
		const r: Array<string> = [];
		r.push(...this.threeWaySplit(this.cleanString(x, {
			clean: true
		})));
		const y = x.split(italics); /* should only have <i> tags and no inconsistencies (machine generated) */
		r.push(y[1]);
		const z = y.length-1;
		for(let k = 3; k <= z; k += 2){
			let a = y[1];
			if(subspecies.test(y[k-1]) === true){
				a += ' subsp. ';
			} else if(variety.test(y[k-1]) === true){
				a += ' var. ';
			} else if(forma.test(y[k-1]) === true){
				a += ' f. ';
			} else {
				continue;
			}
			a += y[k];
			r.push(...this.threeWaySplit(a));
			r.push(a);
		}
		return(r);
	}
	public mergeHash(n: SearchHash, o: SearchHash): SearchHash {
		const d: Array<Operation> = compare(o, n);
		const m: SearchHash = cloneDeep(o);
		for(let k = d.length-1; k >= 0; k--){
			if(d[k].op === 'add'){
				m[d[k].path.substring(1)] = (<AddOperation<SearchObject>>d[k]).value;
			}
		}
		return(m);
	}
	private async processHashString(x: string, c: FieldProperties): Promise<Array<string>> {
		if(c.indexTerminals === true){
			return(this.insertTerminal(x));
		} else if(c.optionComma === true){
			return(await this.insertHashString(x.split(/,/)[0], c));
		} else {
			return(await this.insertHashString(x, c));
		}
	}
	private processTableString(x: string, c: FieldProperties): string {
		if(c.indexTerminals === true){
			return(this.cleanString(x, c));
		} else if(c.optionComma === true){
			return(this.cleanString(x.split(/,/)[0], c));
		} else {
			return(this.cleanString(x.toLowerCase(), c));
		}
	}
	public async searchizer(r: Array<ItemIndexed>, f: Array<FieldProperties>): Promise<SearchReturn> {
		const h: Array<Array<string>> = [];
		for(let i = r.length-1; i >= 0; i--){
			const t: Array<string> = [];
			for(let j = f.length-1; j >= 0; j--){
				if(r[i][f[j].field] != null){
					if(this.regexpService.array(r[i][f[j].field]) === true){
						for(let k = r[i][f[j].field].length-1; k >= 0; k--){
							if(isFormlyDropdownOption(r[i][f[j].field][k]) === true){
								h.push(await this.processHashString(r[i][f[j].field][k].label, f[j]));
								t.push(this.processTableString(r[i][f[j].field][k].label, f[j]));
							} else if(isUserPermission(r[i][f[j].field][k]) === true){
								h.push(await this.processHashString(r[i][f[j].field][k].UserPermission.User.label, f[j]));
								t.push(this.processTableString(r[i][f[j].field][k].UserPermission.User.label, f[j]));
							}
						}
					} else {
						if(isFormlyDropdownOption(r[i][f[j].field]) === true){
							h.push(await this.processHashString(r[i][f[j].field].label, f[j]));
							t.push(this.processTableString(r[i][f[j].field].label, f[j]));
						} else if(typeof(r[i][f[j].field]) === 'string'){
							h.push(await this.processHashString(r[i][f[j].field], f[j]));
							t.push(this.processTableString(r[i][f[j].field], f[j]));
						}
					}
				}
			}
			r[i].TableSearchIndex = await this.createSearchField(t);
		}
		const s: SearchReturn = await this.createSearchHash(h);
		s.records = r;
		return(s);
	}
	private threeWaySplit(x: string): Array<string> {
		const y = x.split(' ');
		const z: Array<string> = [];
		for(let k = y.length-1; k >= 0; k--){
			if(k >= 2){
				z.push(y[k-2] + ' ' + y[k-1] + ' ' + y[k]);
			}
			if(k >= 1){
				z.push(y[k-1] + ' ' + y[k]);
			}
			z.push(y[k]);
		}
		return(z);
	}
}
