/* imports from node_modules */
import { Injectable } from '@angular/core';
import { isDate, format, toDate } from 'date-fns';
/* imports from app */
import {	RegexpService } from '@monographia/regexp.service';
import { ItemObject, ItemObjectRaw } from '@monographia/state-manager/state-manager.item';
export const dateFormat = 'YYYY-MM-DD';
@Injectable({
	providedIn: 'root'
})
export class DateTimeService {
	public date2iso(x: ItemObject): ItemObjectRaw { /* Date object to iso string */
		const y: any = {};
		for(const p in x){
			if(isDate(x[p]) === true){
				y[p] = format(x[p], dateFormat);
			} else if(!(x[p] == null)){
				y[p] = x[p];
			}
		}
		return(y);
	}
	constructor(private regexpService: RegexpService){
	}
	public iso2date(x: Array<ItemObjectRaw>): Array<ItemObject> { /* iso formatted string to Date object */
		const y = [];
		for(let k = x.length-1; k >= 0; k--){
			y[k] = {};
			for(const p in x[k]){
				if(this.regexpService.dateString(x[k][p]) === true){
					y[k][p] = toDate(x[k][p]);
				} else {
					y[k][p] = x[k][p];
				}
			}
		}
		return(y);
	}
}
