/* imports from node_modules */
import { FormlyFieldConfig } from '@ngx-formly/core';
/* imports from app */
import {	InputTextValidator } from '@monographia/formly-validation.service';
export function TagForm(): Array<FormlyFieldConfig> {
	return([
		{
			key: 'Tag',
			templateOptions: {
				description: 'i18n.tagDescription',
				invalid: 'i18n.tagInvalid',
				label: 'i18n.tag',
				placeholder: 'i18n.tag',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator]
			}
		}
	]);
}
