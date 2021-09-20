/* imports from node_modules */
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
/* imports from app */
import { FieldProperties } from '@monographia/state-manager/state-manager.item';
import { ObjectPropertyService } from '@monographia/object-property.service';
import { Publication, isPublication } from '@monographia/data-handler/publication/publication.model';
import { StateManagerInsertUpdateService, RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { StateModel } from '@monographia/state-manager/state-manager.state';
type People = 'Authors'|'Editors';
class TranslationReturn {
	'i18n.manyAuthors'?: string;
	'i18n.manyAuthorsYear'?: string;
	'i18n.manyEditors'?: string;
	'i18n.manyEditorsYear'?: string;
	'i18n.noAuthor'?: string;
	'i18n.noAuthorYear'?: string;
	'i18n.oneAuthor'?: string;
	'i18n.oneAuthorYear'?: string;
	'i18n.oneEditor'?: string;
	'i18n.oneEditorYear'?: string;
	'i18n.twoAuthors'?: string;
	'i18n.twoAuthorsYear'?: string;
	'i18n.twoEditors'?: string;
	'i18n.twoEditorsYear'?: string;
}
export const publicationProperties: Array<FieldProperties> = [
	{
		clean: true,
		date: false,
		field: 'Abstract',
		indexPhrases: true,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'Authors',
		indexPhrases: true,
		indexTerminals: false,
		optionComma: true,
		unique: true
	}, {
		clean: true,
		date: false,
		field: 'BookTitle',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: true
	}, {
		clean: false,
		date: false,
		field: 'City',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'DOI',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'Edition',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'Editors',
		indexPhrases: true,
		indexTerminals: false,
		optionComma: true,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'EndPage',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	},	{
		clean: false,
		date: false,
		field: 'ISBN',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'Issue',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'Mask',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'Note',
		indexPhrases: true,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'Periodical',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'PublicationType',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: true
	}, {
		clean: false,
		date: false,
		field: 'Publisher',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'School',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'StartPage',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'TableAuthor',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'TableTitle',
		indexPhrases: true,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'TableSearchIndex',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: false,
		date: false,
		field: 'Tags',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'Title',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'URL',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'Volume',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: false
	}, {
		clean: true,
		date: false,
		field: 'Year',
		indexPhrases: false,
		indexTerminals: false,
		optionComma: false,
		unique: true
	}
];
@Injectable({
	providedIn: 'root'
})
export class PublicationState {
	constructor(private objectPropertyService: ObjectPropertyService, private stateManagerInsertUpdateService: StateManagerInsertUpdateService, private translateService: TranslateService){
	}
	public async insertUpdate(state: StateModel, record: Publication): Promise<RecordReturn> {
		if(isPublication(record) === true){
			return(await this.stateManagerInsertUpdateService.processRecord({
				currentData: state.publication.data,
				item: 'publication',
				record: await this.recordFormatter(record as Publication),
				options: state.publication.options,
				fields: publicationProperties
			}));
		} else {
			return(new RecordReturn());
		}
	}
	private async manyPeople(x: Publication, t: People): Promise<Publication> {
		const I = {
			Authors: 'i18n.manyAuthorsYear',
			Editors: 'i18n.manyEditorsYear'
		};
		const i = {
			Authors: 'i18n.manyAuthors',
			Editors: 'i18n.manyEditors'
		};
		const translation: TranslationReturn = await this.translateService.get([
			I[t],
			i[t]
		], {
			first: x[t][0].label.split(/,/)[0],
			year: x.Year
		}).toPromise();
		x.Citation = translation[I[t]];
		x.TableAuthor = translation[i[t]];
		return(x);
	}
	private async onePerson(x: Publication, t: People): Promise<Publication> {
		const I = {
			Authors: 'i18n.oneAuthorYear',
			Editors: 'i18n.oneEditorYear'
		};
		const i = {
			Authors: 'i18n.oneAuthor',
			Editors: 'i18n.oneEditor'
		};
		const translation: TranslationReturn = await this.translateService.get([
			I[t],
			i[t]
		], {
			author: x[t][0].label.split(/,/)[0],
			year: x.Year
		}).toPromise();
		x.Citation = translation[I[t]];
		x.TableAuthor = translation[i[t]];
		return(x);
	}
	public async recordFormatter(x: Publication): Promise<Publication> {
		x = await this.retitle(x);
		if((x.PublicationType.value === 2) || (x.PublicationType.value === 5)){
			if(this.objectPropertyService.hasProperty(x, 'Title') === true){
				const translation: TranslationReturn = await this.translateService.get([
					'i18n.noAuthorYear',
					'i18n.noAuthor'
				], {
					title: x.Title,
					year: x.Year
				}).toPromise();
				x.Citation = translation['i18n.noAuthorYear'];
				x.TableAuthor = translation['i18n.noAuthor'];
				return(x);
			} else {
				console.error('publication data are not correctly formatted (required fields Title and/or Year missing):', JSON.stringify(x));
				return(new Publication());
			}
		} else if(((this.objectPropertyService.hasProperty(x, 'Authors') === true) || ((x.PublicationType.value === 19) && (this.objectPropertyService.hasProperty(x, 'Editors') === true))) && (this.objectPropertyService.hasProperty(x, 'Year') === true)){ /* should always to true */
			let t: People = 'Authors';
			if(x.PublicationType.value === 19){
				t = 'Editors';
			}
			if(x[t].length === 1){
				return(this.onePerson(x, t));
			} else if(x[t].length === 2){
				return(this.twoPeople(x, t));
			} else {
				return(this.manyPeople(x, t));
			}
		} else { /* should never happen */
			console.error('publication data are not correctly formatted (required fields Authors, Editors, and/or Year missing):', JSON.stringify(x));
			return(new Publication());
		}
// deal with non-unique Citation fields
	}
	private async retitle(x: Publication): Promise<Publication> {
		if((x.PublicationType.value === 18) || (x.PublicationType.value === 19)){
			x.TableTitle = x.BookTitle;
			return(x);
		} else if(x.PublicationType.value === 11){
			const translation: string = await this.translateService.get('i18n.personalCommunication').toPromise();
			x.TableTitle = translation;
			return(x);
		} else {
			x.TableTitle = x.Title;
			return(x);
		}
	}
	private async twoPeople(x: Publication, t: People): Promise<Publication> {
		const I = {
			Authors: 'i18n.twoAuthorsYear',
			Editors: 'i18n.twoEditorsYear'
		};
		const i = {
			Authors: 'i18n.twoAuthors',
			Editors: 'i18n.twoEditors'
		};
		const translation: TranslationReturn = await this.translateService.get([
			I[t],
			i[t]
		], {
			first: x[t][0].label.split(/,/)[0],
			second: x[t][1].label.split(/,/)[0],
			year: x.Year
		}).toPromise();
		x.Citation = translation[I[t]];
		x.TableAuthor = translation[i[t]];
		return(x);
	}
}
