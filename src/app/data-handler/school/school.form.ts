/* imports from node_modules */
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs/Observable';
/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import {	InputTextValidator } from '@monographia/formly-validation.service';
export function SchoolForm(o: Observable<Array<FormlyDropdownOption>>): Array<FormlyFieldConfig> {
	return([
		{
			key: 'School',
			templateOptions: {
				description: 'i18n.schoolDescription',
				invalid: 'i18n.schoolInvalid',
				label: 'i18n.school',
				placeholder: 'i18n.school',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator]
			}
		}, {
			key: 'City',
			templateOptions: {
				addNewNoun: 'i18n.city',
				description: 'i18n.cityDescription',
				editNoun: 'i18n.thisCity',
				icon: 'city',
				invalid: 'i18n.cityInvalid',
				item: 'city',
				itemKey: 'City',
				label: 'i18n.city',
				options: o,
				required: false
			},
			type: 'subnormalized-dropdown'
		}
	]);
}
