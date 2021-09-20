/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { FieldProperties } from '@monographia/state-manager/state-manager.item';
import { Project, isProject } from '@monographia/data-handler/project/project.model';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
export const projectProperties: Array<FieldProperties> = [
	{
		clean: false,
		date: false,
		field: 'Aquatic',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'CITES',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	},	{
		clean: true,
		date: false,
		field: 'Constraint',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'Description',
		indexPhrases: true,
		indexTerminals: true,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'GeographicConstraint',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: true,
		field: 'LastModified',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'LastModifier',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	},	{
		clean: true,
		date: false,
		field: 'Name',
		indexPhrases: true,
		indexTerminals: true,
		optionComma: false,
		unique: true
	}, {
		clean: false,
		date: false,
		field: 'NomenclaturalCode',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'Owner',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: true
	}, {
		clean: false,
		date: false,
		field: 'Status',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'TableSearchIndex',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	},	{
		clean: false,
		date: false,
		field: 'TerminalConstraint',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'Terrestrial',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'UserPermission',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}
];
@Injectable({
	providedIn: 'root'
})
export class ProjectState {
	constructor(private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: Project): Promise<RecordReturn> {
		if(isProject(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.project.data,
				item: 'project',
				record: record,
				options: state.project.options,
				fields: projectProperties
			}));
		} else {
			return(new RecordReturn());
		}
	}
}
