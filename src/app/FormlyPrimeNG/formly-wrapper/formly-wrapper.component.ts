/* imports from node_modules */
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { faExclamationTriangle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-formly-wrapper',
	templateUrl: './formly-wrapper.component.html',
	styleUrls: ['./formly-wrapper.component.scss']
})
export class FormlyWrapperComponent extends FieldWrapper {
	faExclamationTriangle = faExclamationTriangle;
	faQuestionCircle = faQuestionCircle;
	@ViewChild('fieldComponent', {
		read: ViewContainerRef,
		static: true
	}) fieldComponent: ViewContainerRef;
}
