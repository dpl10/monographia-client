/* imports from app */
import { Publication } from '@monographia/data-handler/publication/publication.model';
import { ObjectPropertyService } from '@monographia/object-property.service';
type Fields = 'PublicationType'|'Year'|'BookTitle'|'Title'|'Authors'|'Editors'|'Periodical'|'Volume'|'Issue'|'Edition'|'StartPage'|'EndPage'|'Publisher'|'School'|'City'|'DOI'|'ISBN'|'URL'|'AccessDate'|'Abstract'|'Tags'|'Note'|'Mask';
const field2number = {
	PublicationType: 0,
	Year: 1,
	BookTitle: 2,
	Title: 3,
	Authors: 4,
	Editors: 5,
	Periodical: 6,
	Volume: 7,
	Issue: 8,
	Edition: 9,
	StartPage: 10,
	EndPage: 11,
	Publisher: 12,
	School: 13,
	City: 14,
	DOI: 15,
	ISBN: 16,
	URL: 17,
	AccessDate: 18,
	Abstract: 19,
	Tags: 20,
	Note: 21,
	Mask: 22
};
const hidden = [ /* PublicationType,Year,BookTitle,Title,Authors,Editors,Periodical,Volume,Issue,Edition,StartPage,EndPage,Publisher,School,City,DOI,ISBN,URL,AccessDate,Abstract,Tags,Note,Mask */
	[true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true ], /* null */
	[false, false, true,  false, false, true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  false, false, false], /* art work */
	[false, false, true,  false, true,  true,  true,  true,  true,  true,  true,  true,  false, true,  false, false, false, false, true,  true,  false, false, false], /* audio recording */
	[false, false, false, false, false, false, true,  false, true,  false, false, false, false, true,  false, false, false, false, true,  false, false, false, false], /* book chapter */
	[false, false, true,  false, false, true,  true,  true,  true,  false, true,  true,  false, true,  false, false, false, false, true,  true,  false, false, false], /* computer program */
	[false, false, true,  false, true,  true,  true,  true,  true,  false, true,  true,  false, true,  false, false, false, false, false, true,  false, false, false], /* database */
	[false, false, true,  false, false, true,  true,  false, true,  true,  true,  true,  false, true,  false, false, true,  false, true,  false, false, false, false], /* government document */
	[false, false, true,  false, false, false, true,  true,  true,  false, true,  true,  false, true,  false, false, false, false, true,  true,  false, false, false], /* map */
	[false, false, true,  false, false, true,  true,  false, true,  false, true,  true,  false, true,  false, true,  true,  false, true,  true,  false, false, false], /* music score */
	[false, false, true,  false, false, true,  false, false, false, true,  false, false, true,  true,  false, false, true,  false, true,  true,  false, false, false], /* newspaper */
	[false, false, true,  false, false, true,  true,  true,  true,  false, true,  true,  false, true,  false, false, false, false, true,  true,  false, false, false], /* pamphlet */
	[false, false, true,  false, false, true,  true,  true,  true,  true,  true,  true,  true,  true,  false, true,  true,  true,  false, false, false, false, false], /* personal communication */
	[false, false, true,  false, false, true,  false, false, false, true,  false, false, true,  true,  true,  false, true,  false, true,  false, false, false, false], /* periodical */
	[false, false, true,  false, false, true,  true,  false, true,  true,  false, true,  false, true,  false, false, true,  false, true,  true,  false, false, false], /* report */
	[false, false, true,  false, false, true,  true,  true,  true,  true,  true,  true,  true,  false, true,  false, true,  false, true,  false, false, false, false], /* thesis/dissertation */
	[false, false, true,  false, false, true,  true,  true,  true,  true,  true,  true,  true,  true,  false, true,  true,  true,  true,  true,  false, false, false], /* unpublished work */
	[false, false, true,  false, false, true,  true,  true,  true,  true,  true,  true,  false, true,  false, false, false, false, true,  true,  false, false, false], /* video recording */
	[false, false, true,  false, false, true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  false, true,  false, false, true,  false, false, false], /* web page */
	[false, false, false, true,  false, true,  true,  false, true,  false, true,  true,  false, true,  false, false, false, false, true,  true,  false, false, false], /* whole book */
	[false, false, false, true,  true,  false, true,  false, true,  false, true,  true,  false, true,  false, false, false, false, true,  true,  false, false, false]  /* whole book (edited) */
];
const objectPropertyService = new ObjectPropertyService();
/* Authors must be reflected in ../publication/publication-state */
const required = [ /* PublicationType,Year,BookTitle,Title,Authors,Editors,Periodical,Volume,Issue,Edition,StartPage,EndPage,Publisher,School,City,DOI,ISBN,URL,AccessDate,Abstract,Tags,Note,Mask */
	[true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true], /* null */
	[true,  true,  false, true,  true,  false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true], /* art work */
	[true,  true,  false, true,  false, false, false, false, false, false, false, false, true,  false, true,  false, false, false, false, false, false, false, true], /* audio recording */
	[true,  true,  false, true,  true,  true,  false, false, false, true,  true,  true,  true,  false, true,  false, false, false, false, false, false, false, true], /* book chapter */
	[true,  true,  false, true,  true,  false, false, false, false, true,  false, false, true,  false, true,  false, false, false, false, false, false, false, true], /* computer program */
	[true,  true,  false, true,  false, false, false, false, false, true,  false, false, true,  false, true,  false, false, false, true,  false, false, false, true], /* database */
	[true,  true,  false, true,  true,  false, false, false, false, false, false, false, true,  false, true,  false, false, false, false, false, false, false, true], /* government document */
	[true,  true,  false, true,  true,  true,  false, false, false, true,  false, false, true,  false, true,  false, false, false, false, false, false, false, true], /* map */
	[true,  true,  false, true,  true,  false, false, false, false, true,  false, false, true,  false, true,  false, false, false, false, false, false, false, true], /* music score */
	[true,  true,  false, true,  true,  false, true,  false, true,  false, true,  false, false, false, true,  false, false, false, false, false, false, false, true], /* newspaper */
	[true,  true,  false, true,  true,  false, false, false, false, true,  false, false, true,  false, true,  false, false, false, false, false, false, false, true], /* pamphlet */
	[true,  true,  false, false, true,  false, false, false, false, false, false, false, false, false, true,  false, false, false, true,  false, false, false, true], /* personal communication */
	[true,  true,  false, true,  true,  false, true,  true,  false, false, true,  false, false, false, false, false, false, false, false, false, false, false, true], /* periodical */
	[true,  true,  false, true,  true,  false, false, false, false, false, true,  false, true,  false, true,  false, false, false, false, false, false, false, true], /* report */
	[true,  true,  false, true,  true,  false, false, false, false, false, false, false, false, true,  false, false, false, false, false, false, false, false, true], /* thesis/dissertation */
	[true,  true,  false, true,  true,  false, false, false, false, false, false, false, false, false, true,  false, false, false, false, false, false, false, true], /* unpublished work */
	[true,  true,  false, true,  true,  false, false, false, false, false, false, false, true,  false, true,  false, false, false, false, false, false, false, true], /* video recording */
	[true,  true,  false, true,  true,  false, false, false, false, false, false, false, false, false, false, false, false, true,  true,  false, false, false, true], /* web page */
	[true,  true,  true,  false, true,  false, false, false, false, true,  false, false, true,  false, true,  false, false, false, false, false, false, false, true], /* whole book */
	[true,  true,  true,  false, false, true,  false, false, false, true,  false, false, true,  false, true,  false, false, false, false, false, false, false, true]  /* whole book (edited) */
];
export function PublicationHideFunction(model: Publication, field: Fields): boolean {
	if(objectPropertyService.hasProperty(model, 'PublicationType') === true){
		return(hidden[model.PublicationType.value][field2number[field]]);
	} else {
		return(true);
	}
}
export function PublicationRequireFunction(model: Publication, field: Fields): boolean {
	if(objectPropertyService.hasProperty(model, 'PublicationType') === true){
		return(required[model.PublicationType.value][field2number[field]]);
	} else {
		return(true);
	}
}
