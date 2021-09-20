/* imports from node_modules */
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
@Component({
	selector: 'app-formly-dropdown',
	templateUrl: './formly-dropdown.component.html',
	styleUrls: ['./formly-dropdown.component.scss']
})
export class FormlyDropdownComponent extends FieldType {
	public onChange(x: FormlyDropdownOption): void { /* an empty stub so the same template and style can be used for ../formly-normalized-dropdown */
	}
}
