/* imports from node_modules */
import { Component, } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
@Component({
	selector: 'app-formly-repeat',
	templateUrl: './formly-repeat.component.html',
	styleUrls: ['./formly-repeat.component.scss']
})
export class FormlyRepeatComponent extends FieldArrayType {
	public addClick(): void {
		this.add();
	}
	constructor(){
		super();
	}
	public removeClick(i: number): void {
		this.remove(i);
	}
}
