/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { ObjectPropertyService } from '@monographia/object-property.service';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
import { User, isUser } from '@monographia/data-handler/user/user.model';
@Injectable({
	providedIn: 'root'
})
export class UserState {
	constructor(private objectPropertyService: ObjectPropertyService, private stateManagerInsertUpdateService: StateManagerInsertUpdateService){
	}
	public async insertUpdate(state: StateModel, record: User): Promise<RecordReturn> {
		if(isUser(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.user.data,
				item: 'user',
				record: this.recordFormatter(record as User),
				options: state.user.options,
				fields: [
					{
						clean: true,
						date: false,
						field: 'Email',
						unique: true
					}, {
						clean: true,
						date: false,
						field: 'FamilyName',
						unique: false
					}, {
						clean: true,
						date: false,
						field: 'GivenName',
						unique: false
					}, {
						clean: false,
						date: false,
						field: 'Institution',
						unique: false
					}, {
						clean: false,
						date: false,
						field: 'Language',
						unique: false
					}, {
						clean: true,
						date: true,
						field: 'LastLogin',
						unique: false
					}, {
						clean: false,
						date: false,
						field: 'LastProject',
						unique: false
					}, {
						clean: true,
						date: false,
						field: 'MiddleName',
						unique: false
					}, {
						clean: true,
						date: false,
						field: 'ScreenName',
						unique: false
					}, {
						clean: false,
						date: false,
						field: 'Status',
						unique: false
					}, {
						clean: true,
						date: true,
						field: 'PasswordExpiration',
						unique: false
					}
				]
			}));
		} else {
			return(new RecordReturn());
		}
	}
	public recordFormatter(x: User): User {
		if(this.objectPropertyService.hasProperty(x, 'FamilyName') === true){
			x.Name = x.FamilyName + ', ' + x.GivenName;
		} else {
			x.Name = x.GivenName;
		}
		if(this.objectPropertyService.hasProperty(x, 'MiddleName') === true){
			x.Name += ' ' + x.MiddleName;
		}
		x.Name += '(' + x.Email + ')';
		return(x);
	}
}
