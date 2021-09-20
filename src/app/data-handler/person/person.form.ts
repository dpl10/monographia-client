/* imports from node_modules */
import { FormlyFieldConfig } from '@ngx-formly/core';
/* imports from app */
import { DateValidator, InputTextValidator } from '@monographia/formly-validation.service';
export function PersonForm(): Array<FormlyFieldConfig> {
	return([
		{
			key: 'FamilyName',
			templateOptions: {
				description: 'i18n.familyNameDescription',
				invalid: 'i18n.familyNameInvalid',
				label: 'i18n.familyName',
				placeholder: 'i18n.familyName',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'GivenName',
			templateOptions: {
				description: 'i18n.givenNameDescription',
				invalid: 'i18n.givenNameInvalid',
				label: 'i18n.givenName',
				placeholder: 'i18n.givenName',
				required: false
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'MiddleName',
			templateOptions: {
				description: 'i18n.middleNameDescription',
				invalid: 'i18n.middleNameInvalid',
				label: 'i18n.middleName',
				placeholder: 'i18n.middleName',
				required: false
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Suffix',
			templateOptions: {
				description: 'i18n.suffixDescription',
				invalid: 'i18n.suffixInvalid',
				label: 'i18n.suffix',
				placeholder: 'i18n.suffix',
				required: false
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Abbreviation',
			templateOptions: {
				description: 'i18n.standardizedAbbreviation',
				invalid: 'i18n.abbreviationInvalid',
				label: 'i18n.abbreviation',
				placeholder: 'i18n.abbreviation',
				required: false
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Birth',
			templateOptions: {
				calendarLocale: 'i18n.calendarLocale',
				description: 'i18n.birthDescription',
				invalid: 'i18n.dateInvalid',
				label: 'i18n.birth',
				placeholder: 'i18n.birth',
				required: false
			},
			type: 'date',
			validators: {
				validation: [DateValidator],
			}
		}, {
			key: 'Death',
			templateOptions: {
				calendarLocale: 'i18n.calendarLocale',
				description: 'i18n.deathDescription',
				invalid: 'i18n.dateInvalid',
				label: 'i18n.death',
				placeholder: 'i18n.death',
				required: false
			},
			type: 'date',
			validators: {
				validation: [DateValidator],
			}
		}
	]);
}
