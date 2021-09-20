/* imports from app */
import { City, isCity } from '@monographia/data-handler/city/city.model';
import { Institution, isInstitution } from '@monographia/data-handler/institution/institution.model';
import { Periodical, isPeriodical } from '@monographia/data-handler/periodical/periodical.model';
import { Person, PersonRaw, isPerson } from '@monographia/data-handler/person/person.model';
import { Project, ProjectRaw, isProject } from '@monographia/data-handler/project/project.model';
import { Publication, PublicationRaw, isPublication } from '@monographia/data-handler/publication/publication.model';
import { Publisher, isPublisher } from '@monographia/data-handler/publisher/publisher.model';
import { School, isSchool } from '@monographia/data-handler/school/school.model';
import { Tag, isTag } from '@monographia/data-handler/tag/tag.model';
import { User, UserRaw, isUser } from '@monographia/data-handler/user/user.model';
export class CleanFields {
	clean: boolean;
}
export class FieldProperties extends CleanFields {
	date: boolean;
	field: ItemField;
	indexPhrases?: boolean;
	indexTerminals?: boolean;
	optionComma?: boolean;
	unique: boolean;
}
export const FilterLabel = {
// add real entries for user.Email, plss, etc.
	dummy: 'just here to prevent compiler error, remove once a real value is needed'
};
export type FilterString = keyof(typeof FilterLabel);
export type ItemField = keyof(City)|keyof(Institution)|keyof(Periodical)|keyof(Person)|keyof(Project)|keyof(Publication)|keyof(Publisher)|keyof(School)|keyof(Tag)|keyof(User);
export type ItemIndexed = Project|Publication;
export const ItemIndexedLabel = {
	project: 'project',
	publication: 'publication'
};
export type ItemIndexedString = keyof(typeof ItemIndexedLabel);
export type ItemKey = 'Authors'|'City'|'Editors'|'Institution'|'Periodical'|'Project'|'Publication'|'School'|'Tag'|'User';
export const ItemLabel = {
	city: 'City',
	institution: 'Institution',
	periodical: 'Periodical', /* uses search hashes */
	person: 'Name',
	project: 'Name', /* uses search hashes */
	publication: 'Citation',
	publisher: 'Publisher',
	school: 'School',
	tag: 'Tag',
	user: 'Name'
};
export type ItemObject = City|Institution|Periodical|Person|Project|Publication|Publisher|School|Tag|User;
export type ItemObjectRaw = City|Institution|Periodical|PersonRaw|ProjectRaw|PublicationRaw|Publisher|School|Tag|UserRaw;
export type ItemString = keyof(typeof ItemLabel);
export const NetworkLabel = { /* keys are used, but values are not */
};
export type NetworkString = keyof(typeof NetworkLabel);
export const TelemetryLabel = { /* keys are used, but values are not */
	entryTelemetry: 'entryTelemetry',
	exitTelemetry: 'exitTelemetry'
};
export type TelemetryString = keyof(typeof TelemetryLabel);
export function newItem(item: ItemString): ItemObject {
	switch(item){
		case 'city':
			return(new City());
		case 'institution':
			return(new Institution());
		case 'periodical':
			return(new Periodical());
		case 'person':
			return(new Person());
		case 'project':
			return(new Project());
		case 'publication':
			return(new Publication());
		case 'publisher':
			return(new Publisher());
		case 'school':
			return(new School());
		case 'tag':
			return(new Tag());
		case 'user':
			return(new User());
	}
}
export function testItem(item: ItemString, o: ItemObject): boolean {
	switch(item){
		case 'city':
			return(isCity(o));
		case 'institution':
			return(isInstitution(o));
		case 'periodical':
			return(isPeriodical(o));
		case 'person':
			return(isPerson(o));
		case 'project':
			return(isProject(o));
		case 'publication':
			return(isPublication(o));
		case 'publisher':
			return(isPublisher(o));
		case 'school':
			return(isSchool(o));
		case 'tag':
			return(isTag(o));
		case 'user':
			return(isUser(o));
	}
}
