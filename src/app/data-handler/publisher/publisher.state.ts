/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { Publisher, isPublisher } from '@monographia/data-handler/publisher/publisher.model';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
@Injectable({
	providedIn: 'root'
})
export class PublisherState {
	constructor(private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: Publisher): Promise<RecordReturn> {
		if(isPublisher(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.publisher.data,
				item: 'publisher',
				record: record,
				options: state.publisher.options,
				fields: [
					{
						clean: false,
						date: false,
						field: 'City',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'Publisher',
						unique: true
					}
				]
			}));
		} else {
			return(new RecordReturn());
		}
	}
}
