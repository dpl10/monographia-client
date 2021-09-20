/* imports from app */
import { ItemObject } from '@monographia/state-manager/state-manager.item';
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
export class Publisher {
	City?: FormlyDropdownOption;
	Hash?: string; /* xxhash64 (normalized) of 'Publisher' and 'City' (concatenated in that order, space deliminted) */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as PublisherID; negative numbers do not */
	Publisher: string;
}
export function isPublisher(x: ItemObject): x is Publisher {
	return((x as Publisher).Publisher !== undefined);
}
