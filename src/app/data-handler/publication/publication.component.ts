/* imports from node_modules */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import { Select, Store } from '@ngxs/store';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from '@ngx-translate/core';
import { first, map, takeUntil } from 'rxjs/operators';
/* imports from app */
import { CreatePublication, Publication } from '@monographia/data-handler/publication/publication.model';
import {
	DateValidator,
	DOIValidator,
	EditorHTMLValidator,
	InputTextValidator,
	ISBNValidator,
	PublicationYearValidator,
	RepeatUniqueEntriesValidator,
	URLValidator
} from '@monographia/formly-validation.service';
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { ItemString } from '@monographia/state-manager/state-manager.item';
import { PublicationRequireFunction, PublicationHideFunction } from '@monographia/data-handler/publication/publication.manifestation';
import { StateManager } from '@monographia/state-manager/state-manager.state';
@Component({
	selector: 'app-publication',
	templateUrl: './publication.component.html',
	styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnDestroy, OnInit {
	public fields: Array<FormlyFieldConfig> = [
		{
			key: 'PublicationType',
			templateOptions: {
				label: 'i18n.publicationType',
				description: 'i18n.publicationTypeDescription',
				options: this.translateService.get('i18n.publicationTypes'),
				placeholder: 'i18n.selectOne',
				required: true
			},
			type: 'dropdown'
		}, {
			key: 'Year',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'Year'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'Year'));
			},
			templateOptions: {
				description: 'i18n.yearDescription',
				invalid: 'i18n.yearInvalid',
				label: 'i18n.year',
				mask: '9999',
				placeholder: 'i18n.year',
				required: true
			},
			type: 'inputmask',
			validators: {
				validation: [PublicationYearValidator],
			}
		}, {
			key: 'BookTitle',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'BookTitle'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'BookTitle'));
			},
			templateOptions: {
				description: 'i18n.bookTitleDescription',
				invalid: 'i18n.bookTitleInvalid',
				label: 'i18n.bookTitle',
				placeholder: 'i18n.bookTitle',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Title',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'Title'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'Title'));
			},
			templateOptions: {
				description: 'i18n.titleDescription',
				invalid: 'i18n.titleInvalid',
				label: 'i18n.title',
				placeholder: 'i18n.title',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Authors',
			expressionProperties: {
				'templateOptions.required': (undefinedModel: Publication, formState: any): boolean => {
					return(PublicationRequireFunction(formState.mainModel.getValue(), 'Authors'));
				}
			},
			fieldArray: {
				templateOptions: {
				},
				fieldGroup: [{
					key: 'Authors',
					type: 'normalized-repeat-dropdown',
					templateOptions: {
						required: true,
						options: this.selectOptions$('person')
					}
				}]
			},
			hideExpression: (undefinedModel: Publication, formState: any): boolean => {
				return(PublicationHideFunction(formState.mainModel.getValue(), 'Authors'));
			},
			templateOptions: {
				addNewNoun: 'i18n.author',
				addNoun: 'i18n.anAuthor',
				description: 'i18n.authorsDescription',
				editNoun: 'i18n.thisAuthor',
				icon: 'person',
				invalid: 'i18n.authorInvalid',
				item: 'person',
				itemKey: 'Authors',
				label: 'i18n.authors',
				removeNoun: 'i18n.thisAuthor'
			},
			type: 'normalized-repeat',
			validators: {
				validation: [RepeatUniqueEntriesValidator],
			}
		}, {
			key: 'Editors',
			expressionProperties: {
				'templateOptions.required': (undefinedModel: Publication, formState: any): boolean => {
					return(PublicationRequireFunction(formState.mainModel.getValue(), 'Editors'));
				}
			},
			fieldArray: {
				templateOptions: {
				},
				fieldGroup: [{
					key: 'Editors',
					type: 'normalized-repeat-dropdown',
					templateOptions: {
						required: true,
						options: this.selectOptions$('person')
					}
				}]
			},
			hideExpression: (undefinedModel: Publication, formState: any): boolean => {
				return(PublicationHideFunction(formState.mainModel.getValue(), 'Editors'));
			},
			templateOptions: {
				addNewNoun: 'i18n.editors',
				addNoun: 'i18n.anEditor',
				description: 'i18n.editorsDescription',
				editNoun: 'i18n.thisEditor',
				icon: 'person',
				invalid: 'i18n.editorInvalid',
				item: 'person',
				itemKey: 'Editors',
				label: 'i18n.editors',
				removeNoun: 'i18n.thisEditor',
			},
			type: 'normalized-repeat',
			validators: {
				validation: [RepeatUniqueEntriesValidator],
			}
		}, {
			key: 'Periodical',
			expressionProperties: {
				'templateOptions.required': (undefinedModel: Publication, formState: any): boolean => {
					return(PublicationRequireFunction(formState.mainModel.getValue(), 'Periodical'));
				}
			},
			hideExpression: (undefinedModel: Publication, formState: any): boolean => {
				return(PublicationHideFunction(formState.mainModel.getValue(), 'Periodical'));
			},
			templateOptions: {
				addNewNoun: 'i18n.periodical',
				description: 'i18n.periodicalNameDescription',
				editNoun: 'i18n.thisPeriodical',
				icon: 'periodical',
				invalid: 'i18n.periodicalInvalid',
				item: 'periodical',
				itemKey: 'Periodical',
				label: 'i18n.periodical',
				options: this.selectOptions$('periodical'),
				required: true
			},
			type: 'normalized-dropdown'
		}, {
			key: 'Volume',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'Volume'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'Volume'));
			},
			templateOptions: {
				description: 'i18n.volumeDescription',
				invalid: 'i18n.volumeInvalid',
				label: 'i18n.volume',
				placeholder: 'i18n.volume',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Issue',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'Issue'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'Issue'));
			},
			templateOptions: {
				description: 'i18n.issueDescription',
				invalid: 'i18n.issueInvalid',
				label: 'i18n.issue',
				placeholder: 'i18n.issue',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Edition',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'Edition'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'Edition'));
			},
			templateOptions: {
				description: 'i18n.editionDescription',
				invalid: 'i18n.editionInvalid',
				label: 'i18n.edition',
				placeholder: 'i18n.edition',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'StartPage',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'StartPage'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'StartPage'));
			},
			templateOptions: {
				description: 'i18n.startPageDescription',
				invalid: 'i18n.startPageInvalid',
				label: 'i18n.startPage',
				placeholder: 'i18n.startPage',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'EndPage',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'EndPage'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'EndPage'));
			},
			templateOptions: {
				description: 'i18n.endPageDescription',
				invalid: 'i18n.endPageInvalid',
				label: 'i18n.endPage',
				placeholder: 'i18n.endPage',
				required: true
			},
			type: 'inputtext',
			validators: {
				validation: [InputTextValidator],
			}
		}, {
			key: 'Publisher',
			expressionProperties: {
				'templateOptions.required': (undefinedModel: Publication, formState: any): boolean => {
					return(PublicationRequireFunction(formState.mainModel.getValue(), 'Publisher'));
				}
			},
			hideExpression: (undefinedModel: Publication, formState: any): boolean => {
				return(PublicationHideFunction(formState.mainModel.getValue(), 'Publisher'));
			},
			templateOptions: {
				addNewNoun: 'i18n.publisher',
				description: 'i18n.publisherDescription',
				editNoun: 'i18n.thisPublisher',
				icon: 'publisher',
				invalid: 'i18n.publisherInvalid',
				item: 'publisher',
				itemKey: 'Publisher',
				label: 'i18n.publisher',
				options: this.selectOptions$('publisher'),
				required: true
			},
			type: 'normalized-dropdown'
		}, {
// causing ExpressionChangedAfterItHasBeenCheckedError... wtf?
			key: 'School',
			expressionProperties: {
				'templateOptions.required': (undefinedModel: Publication, formState: any): boolean => {
					return(PublicationRequireFunction(formState.mainModel.getValue(), 'School'));
				}
			},
			hideExpression: (undefinedModel: Publication, formState: any): boolean => {
				return(PublicationHideFunction(formState.mainModel.getValue(), 'School'));
			},
			templateOptions: {
				addNewNoun: 'i18n.school',
				description: 'i18n.schoolDescription',
				editNoun: 'i18n.thisSchool',
				icon: 'school',
				invalid: 'i18n.schoolInvalid',
				item: 'school',
				itemKey: 'School',
				label: 'i18n.school',
				options: this.selectOptions$('school'),
				required: true
			},
			type: 'normalized-dropdown'
		}, {
			key: 'City',
			expressionProperties: {
				'templateOptions.required': (undefinedModel: Publication, formState: any): boolean => {
					return(PublicationRequireFunction(formState.mainModel.getValue(), 'City'));
				}
			},
			hideExpression: (undefinedModel: Publication, formState: any): boolean => {
				return(PublicationHideFunction(formState.mainModel.getValue(), 'City'));
			},
			templateOptions: {
				addNewNoun: 'i18n.city',
				description: 'i18n.cityDescription',
				editNoun: 'i18n.thisCity',
				icon: 'city',
				invalid: 'i18n.cityInvalid',
				item: 'city',
				itemKey: 'City',
				label: 'i18n.city',
				options: this.selectOptions$('city'),
				required: true
			},
			type: 'normalized-dropdown'
		}, {
			key: 'DOI',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'DOI'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'DOI'));
			},
			templateOptions: {
				description: 'i18n.DOIdescription',
				invalid: 'i18n.DOIinvalid',
				label: 'i18n.DOI',
				placeholder: 'i18n.DOI',
				required: false
			},
			type: 'inputtext',
			validators: {
				validation: [DOIValidator]
			}
		}, {
			key: 'ISBN',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'ISBN'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'ISBN'));
			},
			templateOptions: {
				description: 'i18n.ISBNdescription',
				invalid: 'i18n.ISBNinvalid',
				label: 'i18n.ISBN',
				placeholder: 'i18n.ISBN',
				required: false
			},
			type: 'inputtext',
			validators: {
				validation: [ISBNValidator]
			}
		}, {
			key: 'URL',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'URL'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'URL'));
			},
			templateOptions: {
				description: 'i18n.URLdescription',
				invalid: 'i18n.URLinvalid',
				label: 'i18n.URL',
				placeholder: 'i18n.URL',
				required: false
			},
			type: 'inputtext',
			validators: {
				validation: [URLValidator]
			}
		}, {
			key: 'AccessDate',
			templateOptions: {
				calendarLocale: 'i18n.calendarLocale',
				description: 'i18n.accessDateDescription',
				invalid: 'i18n.dateInvalid',
				label: 'i18n.accessDate',
				placeholder: 'i18n.accessDate',
				required: false
			},
			type: 'date',
			validators: {
				validation: [DateValidator],
			}
		}, {
			key: 'Abstract',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'Abstract'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'Abstract'));
			},
			templateOptions: {
				description: 'i18n.synopsisDescription',
				invalid: 'i18n.synopsisInvalid',
				label: 'i18n.synopsis',
				required: false
			},
			type: 'editorHTML',
			validators: {
				validation: [EditorHTMLValidator]
			}
		}, {
			key: 'Tags',
			expressionProperties: {
				'templateOptions.required': (undefinedModel: Publication, formState: any): boolean => {
					return(PublicationRequireFunction(formState.mainModel.getValue(), 'Tags'));
				}
			},
			fieldArray: {
				templateOptions: {
				},
				fieldGroup: [{
					key: 'Tags',
					type: 'normalized-repeat-dropdown',
					templateOptions: {
						required: true,
						options: this.selectOptions$('tag')
					}
				}]
			},
			hideExpression: (undefinedModel: Publication, formState: any): boolean => {
				return(PublicationHideFunction(formState.mainModel.getValue(), 'Tags'));
			},
			templateOptions: {
				addNewNoun: 'i18n.tag',
				addNoun: 'i18n.aTag',
				description: 'i18n.tagDescription',
				editNoun: 'i18n.thisTag',
				icon: 'tag',
				invalid: 'i18n.tagInvalid',
				item: 'tag',
				itemKey: 'Tags',
				label: 'i18n.tag',
				removeNoun: 'i18n.thisTag',
			},
			type: 'normalized-repeat',
			validators: {
				validation: [RepeatUniqueEntriesValidator],
			}
		}, {
			key: 'Note',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'Note'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'Note'));
			},
			templateOptions: {
				description: 'i18n.noteDescription',
				invalid: 'i18n.noteInvalid',
				label: 'i18n.note',
				required: false
			},
			type: 'editorHTML',
			validators: {
				validation: [EditorHTMLValidator]
			}
		},
// add normalized repeat media field
		{
			key: 'Mask',
			expressionProperties: {
				'templateOptions.required': (model: Publication): boolean => {
					return(PublicationRequireFunction(model, 'Mask'));
				}
			},
			hideExpression: (model: Publication): boolean => {
				return(PublicationHideFunction(model, 'Mask'));
			},
			templateOptions: {
				description: 'i18n.maskRecordDescription',
				invalid: 'i18n.maskRecordInvalid',
				label: 'i18n.maskRecord',
				options: this.translateService.get('i18n.maskRecordOptions'),
				required: true
			},
			type: 'selectbutton'
		}
	];
	public form = new FormGroup({});
	public model = new BehaviorSubject<Publication>(new Publication());
	private ngUnsubscribe = new Subject();
	@Select(StateManager.options) normalizedOptions$: Observable<(item: ItemString) => Array<FormlyDropdownOption>>;
	public options: FormlyFormOptions = {
		formState: {
			mainModel: this.model
		}
	};
	constructor(private messageService: MessageService, private store: Store, private translateService: TranslateService){
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.translateService.get('i18n.publicationTypeDefault').pipe(first(), takeUntil(this.ngUnsubscribe)).subscribe((translation: FormlyDropdownOption): void => {
			this.model.next(CreatePublication(translation));
		});
	}
	public save(model: any): void {
// temporary ->
/*		this.messageService.add({
			detail: JSON.stringify(this.model.getValue()),
			severity: 'warn',
			summary: 'literature model contents'
		});
console.log(JSON.stringify(this.model.getValue()));
		let b = new Date('1700-04-21');
		let d = new Date('1753-05-01');
		this.store.dispatch(new InsertUpdateItem('person', {
			FamilyName: 'XXXX',
			GivenName: 'YYYY',
			Abbreviation: 'X.',
			Birth: b,
			Death: d
		})); */
// <- temporary
	}
	private selectOptions$(item: ItemString): Observable<Array<FormlyDropdownOption>> {
		return(this.normalizedOptions$.pipe(map(select => select(item))));
	}
}
