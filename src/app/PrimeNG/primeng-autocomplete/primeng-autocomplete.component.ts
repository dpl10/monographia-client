/* imports from node_modules */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Select, Store } from '@ngxs/store';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Subject } from 'rxjs/Subject';
import { map, takeUntil } from 'rxjs/operators';
/* imports from app */
import { FlattenService } from '@monographia/flatten.service';
import { ItemString } from '@monographia/state-manager/state-manager.item';
import { SearchObject, SearchReturn } from '@monographia/state-manager/state-manager-search.service';
import { StateManager } from '@monographia/state-manager/state-manager.state';
import { XXhashService } from '@monographia/xxhash.service';
@Component({
	selector: 'app-primeng-autocomplete',
	templateUrl: './primeng-autocomplete.component.html',
	styleUrls: ['./primeng-autocomplete.component.scss']
})
export class PrimeNGAutoCompleteComponent implements OnDestroy, OnInit {
	private ngUnsubscribe = new Subject();
	@Select(StateManager.search) search$: Observable<(item: ItemString) => SearchReturn>;
	private searchData: SearchReturn;
	@Input() searchItem: ItemString;
	@Input() size: SizeProp = 'lg';
	public suggestions: Array<string> = [];
	constructor(private flattenService: FlattenService, private store: Store, private xxhashService: XXhashService){
	}
	private getSearch$(item: ItemString): Observable<SearchReturn> {
		return(this.search$.pipe(map(select => select(item))));
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.getSearch$(this.searchItem).pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: SearchReturn): void => {
			this.searchData = x;
		});
	}
	public async search(x: string): Promise<void> {
		function byScore(a: SearchObject, b: SearchObject): number {
			if(a.score > b.score){
				return(1);
			} else if (b.score < a.score){
				return(-1);
			} else {
				return(0);
			}
		}
		if(this.searchData != null){
			const r = this.searchData.fuzzy.get(this.flattenService.flatten(x));
			let m = 0;
			const s: Array<SearchObject> = [];
			for(let k = r.length-1; k >= 0; k--){
				const h = await this.xxhashService.h64(r[k][1]);
				if(this.searchData.searchHash[h] != null){
					const p: SearchObject = {
						original: this.searchData.searchHash[h].original,
						score: this.searchData.searchHash[h].score*r[k][0]
					};
					if(m < 10){
						s.push(p);
					} else {
						if(m === 10){
							s.sort(byScore);
						}
						if(s[9].score < p.score){
							if(s[0].score < p.score){
								s.unshift(p);
							} else {
								for(let j = 9; j >= 0; j--){ /* could be modified to use a binary search... */
									if(s[j].score < p.score){
										s.splice(j, 1, p);
										break;
									}
								}
							}
							s.pop();
						}
					}
					m++;
				}
			}
			this.suggestions = [];
			const l = s.length;
			for(let k = 0; k < l; k++){
				this.suggestions.push(s[k].original);
			}
		}
	}
}
