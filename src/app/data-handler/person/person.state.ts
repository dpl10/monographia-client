/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { ObjectPropertyService } from '@monographia/object-property.service';
import { Person, isPerson } from '@monographia/data-handler/person/person.model';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
@Injectable({
	providedIn: 'root'
})
export class PersonState {
	constructor(private objectPropertyService: ObjectPropertyService, private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: Person): Promise<RecordReturn> {
		if(isPerson(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.person.data,
				item: 'person',
				record: this.recordFormatter(record as Person),
				options: state.person.options,
				fields: [
					{
						clean: false,
						date: true,
						field: 'Death',
						unique: true
					}, {
						clean: false,
						date: true,
						field: 'Birth',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'Suffix',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'FamilyName',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'MiddleName',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'GivenName',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'Abbreviation',
						unique: false
					}
				]
			}));
		} else {
			return(new RecordReturn());
		}
	}
	public recordFormatter(x: Person): Person {
		x.Name = x.FamilyName;
		if(this.objectPropertyService.hasProperty(x, 'GivenName') === true){
			x.Name += ', ' + x.GivenName;
		}
		return(x);
	}
}
