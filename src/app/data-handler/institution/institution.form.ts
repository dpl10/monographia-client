/* imports from node_modules */
import { FormlyFieldConfig } from '@ngx-formly/core';
/* imports from app */
import {	InputTextValidator } from '@monographia/formly-validation.service';
export function InstitutionForm(): Array<FormlyFieldConfig> {
	return([
		{
			key: 'Institution',
			templateOptions: {
				description: 'i18n.institutionDescription',
				invalid: 'i18n.institutionInvalid',
				label: 'i18n.institution',
				placeholder: 'i18n.institution',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator]
			}
		}, {
			key: 'Country',
			templateOptions: {
				label: 'i18n.country',
				description: 'i18n.countryDescription',
				options: this.translateService.get('i18n.countries'),
				placeholder: 'i18n.selectCountry',
				required: true
			},
			type: 'dropdown'
		}
	]);
}
