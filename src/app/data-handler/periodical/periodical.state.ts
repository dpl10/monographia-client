/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { Periodical, isPeriodical } from '@monographia/data-handler/periodical/periodical.model';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
@Injectable({
	providedIn: 'root'
})
export class PeriodicalState {
	constructor(private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: Periodical): Promise<RecordReturn> {
		if(isPeriodical(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.periodical.data,
				item: 'periodical',
				record: record,
				options: state.periodical.options,
				fields: [
					{
						clean: false,
						date: false,
						field: 'ISSN',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'Periodical',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'PeriodicalAbbreviation',
						unique: false
					}
				]
			}));
		} else {
			return(new RecordReturn());
		}
	}
}
