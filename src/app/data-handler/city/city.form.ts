/* imports from node_modules */
import { FormlyFieldConfig } from '@ngx-formly/core';
/* imports from app */
import {	InputTextValidator } from '@monographia/formly-validation.service';
export function CityForm(): Array<FormlyFieldConfig> {
	return([
		{
			key: 'City',
			templateOptions: {
				description: 'i18n.cityDescription',
				invalid: 'i18n.cityInvalid',
				label: 'i18n.city',
				placeholder: 'i18n.city',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator]
			}
		}
	]);
}
