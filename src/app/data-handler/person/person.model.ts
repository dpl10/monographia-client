/* imports from app */
import { ItemObject } from '@monographia/state-manager/state-manager.item';
class PersonPrimitive {
	Abbreviation?: string;
	FamilyName: string;
	GivenName?: string;
	Hash?: string; /* xxhash64 (normalized) of 'GivenName', 'MiddleName', 'FamilyName', 'Suffix', 'Birth', 'Death' (concatenated in that order, space deliminted, dates as ISO strings) */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as PersonID; negative numbers do not */
	MiddleName?: string;
	Name?: string; /* as the record appears in a FormlyDropdownOption; computed by the client, not stored on the server */
	Suffix?: string;
}
export class Person extends PersonPrimitive {
	Birth?: Date;
	Death?: Date;
}
export class PersonRaw extends PersonPrimitive {
	Birth?: string;
	Death?: string;
}
export function isPerson(x: ItemObject): x is Person {
	return((x as Person).FamilyName !== undefined);
}
