/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { Institution, isInstitution } from '@monographia/data-handler/institution/institution.model';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
@Injectable({
	providedIn: 'root'
})
//fix
export class InstitutionState {
	constructor(private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: Institution): Promise<RecordReturn> {
		if(isInstitution(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.institution.data,
				item: 'institution',
				record: record,
				options: state.institution.options,
				fields: [
					{
						clean: false,
						date: false,
						field: 'Country',
						unique: false
					}, {
						clean: true,
						date: false,
						field: 'Institution',
						unique: true
					}
				]
			}));
		} else {
			return(new RecordReturn());
		}
	}
}
