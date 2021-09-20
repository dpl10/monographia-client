/* imports from node_modules */
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs/Observable';
/* imports from app */
import {	EmailValidator, InputTextValidator } from '@monographia/formly-validation.service';
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
export function UserForm(o: Observable<Array<FormlyDropdownOption>>): Array<FormlyFieldConfig> {
	return([
		{
			key: 'GivenName',
			templateOptions: {
				description: 'i18n.givenNameDescription',
				invalid: 'i18n.givenNameInvalid',
				label: 'i18n.givenName',
				placeholder: 'i18n.givenName',
				required: true
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
			key: 'ScreenName',
			templateOptions: {
				description: 'i18n.screenNameDescription',
				invalid: 'i18n.screenNameInvalid',
				label: 'i18n.screenName',
				placeholder: 'i18n.screenName',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Language',
			templateOptions: {
				addNewNoun: 'i18n.language',
				description: 'i18n.languageDescription',
				editNoun: 'i18n.thisLanguage',
				icon: 'language',
				invalid: 'i18n.languageInvalid',
				item: 'language',
				itemKey: 'Language',
				label: 'i18n.language',
				options: this.translateService.get('i18n.interfaceLanguages'),
				required: true
			},
			type: 'dropdown'
		}, {
			key: 'Email',
			templateOptions: {
				description: 'i18n.emailDescription',
				invalid: 'i18n.emailInvalid',
				label: 'i18n.email',
				placeholder: 'i18n.email',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [EmailValidator],
			}
		}, {
			key: 'Institution',
			templateOptions: {
				addNewNoun: 'i18n.institution',
				description: 'i18n.institutionDescription',
				editNoun: 'i18n.thisInstitution',
				icon: 'institution',
				invalid: 'i18n.institutionInvalid',
				item: 'institution',
				itemKey: 'Institution',
				label: 'i18n.institution',
				options: o,
				required: false
			},
			type: 'subnormalized-dropdown'
		}
	]);
}
