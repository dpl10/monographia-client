/* imports from node_modules */
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { compare, Operation } from 'fast-json-patch';
import { isDate, format } from 'date-fns';
/* imports from app */
import { DateTimeService, dateFormat } from '@monographia/date-time.service';
import { FieldProperties, ItemLabel, ItemObject, ItemObjectRaw, ItemString } from '@monographia/state-manager/state-manager.item';
import { FormlyDropdownOption, isFormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { RegexpService } from '@monographia/regexp.service';
import { StateManagerOptionService } from '@monographia/state-manager/state-manager-option.service';
import { XXhashService } from '@monographia/xxhash.service';
class RecordOptions {
	currentData: Array<ItemObject>;
	fields: Array<FieldProperties>;
	item: ItemString;
	options?: Array<FormlyDropdownOption>;
	record: ItemObject;
}
export class RecordReturn {
	protected static SInit = (() => {
		RecordReturn.prototype.insert = false;
		RecordReturn.prototype.update = false;
	})();
	insert: boolean;
	newData: Array<ItemObject>;
	newOptions?: Array<FormlyDropdownOption>;
	record: ItemObjectRaw;
	update: boolean;
	updatePatch: Array<Operation>;
}
@Injectable({
	providedIn: 'root'
})
export class StateManagerInsertUpdateService {
	constructor(private dateTimeService: DateTimeService, private regexpService: RegexpService, private stateManagerOptionService: StateManagerOptionService, private xxhashService: XXhashService){
	}
	public async processRecord(x: RecordOptions): Promise<RecordReturn> {
		const n = new RecordReturn();
		const xxIn: Array<string> = [];
		for(let k = x.fields.length-1; k >= 0; k--){
			if(x.record[x.fields[k].field] != null){
				if(x.fields[k].clean === true){
					x.record[x.fields[k].field] = x.record[x.fields[k].field].normalize('NFC').trim();
				}
				if(x.fields[k].unique === true){
					if(x.fields[k].date === true){
							if(isDate(x.record[x.fields[k].field]) === true){
								xxIn.push(format(x.record[x.fields[k].field], dateFormat));
							}
					} else if(isFormlyDropdownOption(x.record[x.fields[k].field]) === true){
						xxIn.push(x.record[x.fields[k].field].value);
					} else {
						xxIn.push(x.record[x.fields[k].field]);
					}
				}
			}
		}
		const xxOut = await this.xxhashService.h64(xxIn.join(' '));
		let options = false;
		if(x.options != null){
			options = true;
		}
		if(x.record.Hash === undefined){
			if(x.currentData.findIndex((datum: ItemObject): boolean => {
				return(datum.Hash === xxOut);
			}) === -1){
				n.insert = true;
				x.record.Hash = xxOut;
				n.newData = cloneDeep(x.currentData);
				n.newData.push(x.record);
				n.record = this.dateTimeService.date2iso(x.record);
				if(options === true){
					const o = x.options.filter(d => d.value !== 0);
					o.push({
						label: x.record[ItemLabel[x.item]],
						value: x.record.id
					});
					n.newOptions = await this.stateManagerOptionService.optionizer(o, x.item);
				}
				return(n);
			}
		} else if(this.regexpService.xxHashHex(x.record.Hash) === true){
			const i = x.currentData.findIndex((datum: ItemObject): boolean => {
				return(datum.Hash === x.record.Hash);
			});
			if(i >= 0){
				const c = this.dateTimeService.date2iso(x.currentData[i]);
				const r = this.dateTimeService.date2iso(x.record);
				if(compare(c, r).length >= 1){
					n.update = true;
					x.record.Hash = xxOut;
					r.Hash = xxOut;
					n.updatePatch = compare(c, r);
					n.record = r;
					n.newData = cloneDeep(x.currentData);
					n.newData.splice(i, 1, x.record);
					if(options === true){
						const o = x.options.filter((d: FormlyDropdownOption): boolean => {
							return(d.value !== 0);
						}).filter((d: FormlyDropdownOption): boolean => {
							return(d.value !== n.record.id);
						});
						o.push({
							label: x.record[ItemLabel[x.item]],
							value: x.record.id
						});
						n.newOptions = await this.stateManagerOptionService.optionizer(o, x.item);
					}
					return(n);
				}
			}
		}
	}
}
