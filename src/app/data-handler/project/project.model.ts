/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { ItemObject } from '@monographia/state-manager/state-manager.item';
import { UserPermission } from '@monographia/user-permission.model';
export class ProjectPrimitive {
	Aquatic: boolean;
	CITES: boolean;
	Constraint?: string;
	Description?: string;
	GeographicConstraint?: FormlyDropdownOption;
	Hash?: string; /* xxhash64 (normalized) of 'Owner' and 'Name' (concatenated in that order, space deliminted) */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as ProjectID; negative numbers do not */
	LastModifier?: FormlyDropdownOption;
	Name: string;
	NomenclaturalCode: FormlyDropdownOption;
	Owner: FormlyDropdownOption;
	Status: boolean;
	TableSearchIndex?: string; /* newline delimited search strings for primeng-table; computed by the client, not stored on the server */
	TerminalConstraint?: FormlyDropdownOption;
	Terrestrial: boolean;
	UserPermission?: Array<UserPermission>;
}
export class Project extends ProjectPrimitive {
	LastModified?: Date;
}
export class ProjectRaw extends ProjectPrimitive {
	LastModified?: string;
}
export function isProject(x: ItemObject): x is Project {
	return(((x as Project).Aquatic !== undefined) && ((x as Project).CITES !== undefined) && ((x as Project).Name !== undefined) && ((x as Project).NomenclaturalCode !== undefined) && ((x as Project).Owner !== undefined) && ((x as Project).Status !== undefined) && ((x as Project).Terrestrial !== undefined));
}
