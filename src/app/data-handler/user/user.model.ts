/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { ItemObject } from '@monographia/state-manager/state-manager.item';
export class UserPrimitive {
	protected static SInit = (() => {
		UserPrimitive.prototype.Status = true;
	})();
	Email: string;
	FamilyName?: string;
	GivenName: string;
	Hash?: string; /* xxhash64 (normalized) of 'Email' */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as UserID; negative numbers do not */
	jsonWebToken?: string;
	Institution?: FormlyDropdownOption;
	Language: FormlyDropdownOption;
	LastProject?: FormlyDropdownOption;
	MiddleName?: string;
	Name?: string; /* as the record appears in a FormlyDropdownOption; computed by the client, not stored on the server */
	ScreenName: string;
	Status: boolean;
}
export class User extends UserPrimitive {
	LastLogin: Date;
	PasswordExpiration: Date;
}
export class UserRaw extends UserPrimitive {
	LastLogin: string;
	PasswordExpiration: string;
}
export function isUser(x: ItemObject): x is User {
	return(((x as User).Email !== undefined) && ((x as User).GivenName !== undefined) && ((x as User).Language !== undefined) && ((x as User).ScreenName !== undefined) && ((x as User).Status !== undefined));
}
