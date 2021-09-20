/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { City, isCity } from '@monographia/data-handler/city/city.model';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
@Injectable({
	providedIn: 'root'
})
export class CityState {
	constructor(private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: City): Promise<RecordReturn> {
		if(isCity(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.city.data,
				item: 'city',
				record: record,
				options: state.city.options,
				fields: [
					{
						clean: true,
						date: false,
						field: 'City',
						unique: true
					}
				]
			}));
		} else {
			return(new RecordReturn());
		}
	}
}
