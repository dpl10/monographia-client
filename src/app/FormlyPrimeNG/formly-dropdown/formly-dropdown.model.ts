import { ItemKey } from '@monographia/state-manager/state-manager.item';
export class FormlyDropdownOption {
	label: string;
	value: number;
}
export type FormlyDropdownFieldOption = {
	[k in ItemKey]: FormlyDropdownOption
};
export function isFormlyDropdownOption(x: FormlyDropdownOption): x is FormlyDropdownOption {
	return(((x as FormlyDropdownOption).label !== undefined) && ((x as FormlyDropdownOption).value !== undefined));
}
