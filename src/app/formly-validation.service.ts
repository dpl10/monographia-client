/**
This 'service' is a library of exported functions rather than a true injectable
service because Formly does not seem to support an injectable validation service.
*/
/* imports from node_modules */
import { FormControl, ValidationErrors } from '@angular/forms';
/* imports from app */
import {	RegexpService } from '@monographia/regexp.service';
/* wrapper function */
function validationWrapper(r: string, v: boolean): ValidationErrors {
	if(v === true){
		return(null);
	} else {
		const x: any = {};
		x[r] = true;
		return(x);
	}
}
const regexpService = new RegexpService();
/* export interface functions */
export function DateValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('date', regexpService.dateObject(control.value)));
	}
}
export function DOIValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('doi', regexpService.doi(control.value)));
	}
}
export function EmailValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('email', regexpService.email(control.value)));
	}
}
export function EditorHTMLValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('editorHTML', regexpService.editorHTML(control.value, 1, 255)));
	}
}
export function InputTextValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('inputtext', regexpService.inputtext(control.value, 1, 255)));
	}
}
export function ISBNValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('isbn', regexpService.isbn(control.value)));
	}
}
export function ISSNValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('issn', regexpService.issn(control.value)));
	}
}
export function PublicationYearValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('publication-year', regexpService.year(control.value)));
	}
}
export function RepeatUniqueEntriesValidator(control: FormControl): ValidationErrors {
	if(regexpService.array(control.value) === true){
		let p: string = '';
		const x: any = {};
		if(control.value.length === 0){
			return(validationWrapper('repeat-unique', false));
		} else {
			p = Object.keys(control.value[0])[0];
		}
		for(let k = control.value.length-1; k >= 0; k--){
			if(control.value[k][p] == null){
				return(validationWrapper('repeat-unique', false));
			} else if(control.value[k][p].value === 0){
				return(validationWrapper('repeat-unique', false));
			} else {
				const o = 'o' + control.value[k][p].value;
				if(x[o] === undefined){
					x[o] = 0;
				} else {
					return(validationWrapper('repeat-unique', false));
				}
			}
		}
		return(validationWrapper('repeat-unique', true));
	} else {
		return(validationWrapper('repeat-unique', false));
	}
}
export function URLValidator(control: FormControl): ValidationErrors {
	if(control.value == null){
		return(null);
	} else {
		return(validationWrapper('url', regexpService.url(control.value)));
	}
}
