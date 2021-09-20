/* imports from node_modules */
import { FormlyFieldConfig } from '@ngx-formly/core';
/* imports from app */
import {	EditorHTMLValidator, InputTextValidator, RepeatUniqueEntriesValidator } from '@monographia/formly-validation.service';
export function ProjectForm(): Array<FormlyFieldConfig> {
	return([
		{
			key: 'Name',
			templateOptions: {
				description: 'i18n.projectDescription',
				invalid: 'i18n.projectInvalid',
				label: 'i18n.project',
				placeholder: 'i18n.project',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator]
			}
		}, {
			key: 'Description',
			templateOptions: {
				description: 'i18n.projectDescriptionDescription',
				invalid: 'i18n.projectDescriptionInvalid',
				label: 'i18n.projectDescription',
				required: false
			},
			type: 'editorHTML',
			validators: {
				validation: [EditorHTMLValidator]
			}
		}, {
			key: 'NomenclaturalCode',
			templateOptions: {
				label: 'i18n.nomenclaturalCode',
				description: 'i18n.nomenclaturalCodeDescription',
				options: this.translateService.get('i18n.nomenclaturalCodes'),
				placeholder: 'i18n.selectCode',
				required: true
			},
			type: 'dropdown'
		}, {
			key: 'CITES',
			templateOptions: {
				description: 'i18n.CITESprojectDescription',
				invalid: 'i18n.CITESprojectInvalid',
				label: 'i18n.CITESproject',
				options: this.translateService.get('i18n.CITESprojectOptions'),
				required: true
			},
			type: 'selectbutton'
		}, {
			key: 'CITES',
			templateOptions: {
				description: 'i18n.CITESprojectDescription',
				invalid: 'i18n.CITESprojectInvalid',
				label: 'i18n.CITESproject',
				options: this.translateService.get('i18n.CITESprojectOptions'),
				required: true
			},
			type: 'selectbutton'
		}, {
			key: 'Aquatic',
			templateOptions: {
				description: 'i18n.aquaticProjectDescription',
				invalid: 'i18n.aquaticProjectInvalid',
				label: 'i18n.aquaticProject',
				options: this.translateService.get('i18n.aquaticOptions'),
				required: true
			},
			type: 'selectbutton'
		}, {
			key: 'Terrestrial',
			templateOptions: {
				description: 'i18n.terrestrialProjectDescription',
				invalid: 'i18n.terrestrialProjectInvalid',
				label: 'i18n.terrestrialProject',
				options: this.translateService.get('i18n.terrestrialOptions'),
				required: true
			},
			type: 'selectbutton'
		},
// add:
// Constraint?: string;
// GeographicConstraint?: FormlyDropdownOption;
// TerminalConstraint?: FormlyDropdownOption;
		{
			key: 'UserPermission',
			fieldArray: {
				templateOptions: {
				},
				fieldGroup: [
					{
// change to blank field, email address validated first via checking user data in state and then via a good bloom filter
						key: 'UserPermissions',
						type: 'dropdown',
						templateOptions: {
							required: true,
							options: this.selectOptions$('user')
						}
					}, {
						key: 'ViewData',
						templateOptions: {
							description: 'i18n.viewDataDescription',
							invalid: 'i18n.viewDataInvalid',
							label: 'i18n.viewDataProject',
							options: this.translateService.get('i18n.viewDataOptions'),
							required: true
						},
						type: 'selectbutton'
					}, {
						key: 'CreateView',
						templateOptions: {
							description: 'i18n.createViewDescription',
							invalid: 'i18n.createViewInvalid',
							label: 'i18n.createViewProject',
							options: this.translateService.get('i18n.createViewOptions'),
							required: true
						},
						type: 'selectbutton'
					}, {
						key: 'InsertData',
						templateOptions: {
							description: 'i18n.insertDataDescription',
							invalid: 'i18n.insertDataInvalid',
							label: 'i18n.insertDataProject',
							options: this.translateService.get('i18n.insertDataOptions'),
							required: true
						},
						type: 'selectbutton'
					}, {
						key: 'EditData',
						templateOptions: {
							description: 'i18n.editDataDescription',
							invalid: 'i18n.editDataInvalid',
							label: 'i18n.editDataProject',
							options: this.translateService.get('i18n.editDataOptions'),
							required: true
						},
						type: 'selectbutton'
					}, {
						key: 'DeleteData',
						templateOptions: {
							description: 'i18n.deleteDataDescription',
							invalid: 'i18n.deleteDataInvalid',
							label: 'i18n.deleteDataProject',
							options: this.translateService.get('i18n.deleteDataOptions'),
							required: true
						},
						type: 'selectbutton'
					}
				]
			},
			templateOptions: {
				addNoun: 'i18n.aUserPermission',
				description: 'i18n.userPermissionDescription',
				invalid: 'i18n.userPermissionInvalid',
				label: 'i18n.userPermission',
				removeNoun: 'i18n.thisUserPermission',
			},
			type: 'repeat-unit',
			validators: {
				validation: [RepeatUniqueEntriesValidator],
			}
		}
	]);
}
