/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
export class UserPermission {
	CreateView: boolean;
	DeleteData: boolean;
	EditData: boolean;
	Hash?: string; /* xxhash64 (normalized) of 'User' and 'Project' (concatenated in that order, space deliminted) */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as UserID; negative numbers do not */
	InsertData: boolean;
	User: FormlyDropdownOption;
	ViewData: boolean;
}
export function isUserPermission(x: UserPermission): x is UserPermission {
	return(((x as UserPermission).CreateView !== undefined) && ((x as UserPermission).DeleteData !== undefined) && ((x as UserPermission).EditData !== undefined) && ((x as UserPermission).InsertData !== undefined) && ((x as UserPermission).User !== undefined) && ((x as UserPermission).ViewData !== undefined));
}
