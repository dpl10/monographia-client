/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
import { Tag, isTag } from '@monographia/data-handler/tag/tag.model';
@Injectable({
	providedIn: 'root'
})
export class TagState {
	constructor(private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: Tag): Promise<RecordReturn> {
		if(isTag(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.tag.data,
				item: 'tag',
				record: record,
				options: state.tag.options,
				fields: [
					{
						clean: true,
						date: false,
						field: 'Tag',
						unique: true
					}
				]
			}));
		} else {
			return(new RecordReturn());
		}
	}
}
