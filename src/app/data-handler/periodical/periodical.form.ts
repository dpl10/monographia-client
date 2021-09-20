/* imports from node_modules */
import { FormlyFieldConfig } from '@ngx-formly/core';
/* imports from app */
import { ISSNValidator, InputTextValidator } from '@monographia/formly-validation.service';
export function PeriodicalForm(): Array<FormlyFieldConfig> {
	return([
		{
			key: 'Periodical',
			templateOptions: {
				description: 'i18n.periodicalNameDescription',
				invalid: 'i18n.periodicalInvalid',
				label: 'i18n.periodical',
				placeholder: 'i18n.periodicalName',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator]
			}
		}, {
			key: 'PeriodicalAbbreviation',
			templateOptions: {
				description: 'i18n.periodicalAbbreviationDescription',
				invalid: 'i18n.periodicalAbbreviationInvalid',
				label: 'i18n.periodicalAbbreviation',
				placeholder: 'i18n.periodicalAbbreviation',
				required: false
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator]
			}
		}, {
			key: 'ISSN',
			templateOptions: {
				characterPattern: '[0-9X]',
				description: 'i18n.ISSNdescription',
				invalid: 'i18n.ISSNinvalid',
				mask: '9999-999-a',
				label: 'i18n.ISSN',
				placeholder: 'i18n.ISSN',
				required: false
			},
			type: 'inputmask',
			validators: {
				validation: [ISSNValidator]
			}
		}
	]);
}
