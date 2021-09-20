/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { ItemObject } from '@monographia/state-manager/state-manager.item';
export function CreatePublication(type: FormlyDropdownOption): Publication {
	const x: Publication = {
		PublicationType: type,
		Mask: false
	};
	return(x);
}
class PublicationPrimitive {
	Abstract?: string;
	Authors?: Array<FormlyDropdownOption>;
	BookTitle?: string;
	Citation?: string; /* as the record appears in a FormlyDropdownOption; computed by the client, not stored on the server */
	City?: FormlyDropdownOption;
	DOI?: string;
	Edition?: string;
	Editors?: Array<FormlyDropdownOption>;
	EndPage?: string;
	Hash?: string; /* xxhash64 (normalized) of 'PublicationType' 'Author', 'Title', 'BookTitle', 'Year' (concatenated in that order, space deliminted) */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as PublicationID; negative numbers do not */
	ISBN?: string;
	Issue?: string;
	Mask: boolean;
	Note?: string;
	Periodical?: FormlyDropdownOption;
	PublicationType: FormlyDropdownOption;
	Publisher?: FormlyDropdownOption;
	School?: FormlyDropdownOption;
	StartPage?: string;
	TableAuthor?: string; /* as the record appears in primeng-table; computed by the client, not stored on the server */
	TableSearchIndex?: string; /* newline delimited search strings for primeng-table; computed by the client, not stored on the server */
	TableTitle?: string; /* as the record appears in primeng-table; computed by the client, not stored on the server */
	Tags?: Array<FormlyDropdownOption>;
	Title?: string;
	URL?: string;
	Volume?: string;
	Year?: string;
}
export class Publication extends PublicationPrimitive {
	AccessDate?: Date;
}
export class PublicationRaw extends PublicationPrimitive {
	AccessDate?: string;
}
export function isPublication(x: ItemObject): x is Publication {
	return(((x as Publication).PublicationType !== undefined) && ((x as Publication).Year !== undefined) && ((x as Publication).Mask !== undefined));
}
