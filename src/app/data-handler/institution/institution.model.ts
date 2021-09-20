/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { ItemObject } from '@monographia/state-manager/state-manager.item';
export class Institution {
	Country: FormlyDropdownOption;
	Hash?: string; /* xxhash64 (normalized) of 'Institution' */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as InstitutionID; negative numbers do not */
	Institution: string;
}
export function isInstitution(x: ItemObject): x is Institution {
	return(((x as Institution).Country !== undefined) && ((x as Institution).Institution !== undefined));
}
