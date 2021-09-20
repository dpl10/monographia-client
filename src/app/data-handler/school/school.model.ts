/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { ItemObject } from '@monographia/state-manager/state-manager.item';
export class School {
	City?: FormlyDropdownOption;
	Hash?: string; /* xxhash64 (normalized) of 'School' and 'City' (concatenated in that order, space deliminted) */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as SchoolID; negative numbers do not */
	School: string;
}
export function isSchool(x: ItemObject): x is School {
	return((x as School).School !== undefined);
}
