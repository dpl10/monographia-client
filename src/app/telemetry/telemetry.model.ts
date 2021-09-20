/* imports from app */
import { Fingerprint } from '@monographia/fingerprint.service';
import { Quartiles } from '@monographia/quartiles.service';
export class EntryTelemetry extends Fingerprint {
	Referrer: string;
}
export class ExitTelemetry extends Quartiles {
	Client: EntryTelemetry;
	Hash?: string; /* xxhash64 (normalized) of 'Client' and 'Interface' (concatenated in that order, space deliminted) */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as TelemetryID; negative numbers do not */
	Interface: Interface;
}
export type Interface = 'acknowledgments'|'all'|'characters'|'classifications'|'click'|'collections'|'copyButton'|'database'|'deleteButton'|'deselect'|'detailButton'|'editButton'|'faq'|'findFunction'|'graphButton'|'literature'|'logon'|'monographia'|'multimedia'|'newButton'|'observations'|'output'|'passwordButton'|'profile'|'projects'|'saveButton'|'saveFunction'|'select'|'showcase'|'sort'|'specimens'|'syndication'|'tableButton'|'taxonomy'|'wiki';
