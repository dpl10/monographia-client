/* imports from app */
import { ItemObject } from '@monographia/state-manager/state-manager.item';
export class Tag {
	Hash?: string; /* xxhash64 (normalized) of 'Tag' */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as TagID; negative numbers do not */
	Tag: string;
}
export function isTag(x: ItemObject): x is Tag {
	return((x as Tag).Tag !== undefined);
}
