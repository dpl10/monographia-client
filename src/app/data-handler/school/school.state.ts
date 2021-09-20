/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { School, isSchool } from '@monographia/data-handler/school/school.model';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
@Injectable({
	providedIn: 'root'
})
export class SchoolState {
	constructor(private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: School): Promise<RecordReturn> {
		if(isSchool(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.school.data,
				item: 'school',
				record: record,
				options: state.school.options,
				fields: [
					{
						clean: false,
						date: false,
						field: 'City',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'School',
						unique: true
					}
				]
			}));
		} else {
			return(new RecordReturn());
		}
	}
}
