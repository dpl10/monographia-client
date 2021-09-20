/* imports from node_modules */
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
/* imports from app */
import { FormlyNormalizedWrapperService } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.service';
@Component({
	selector: 'app-formly-normalized-wrapper',
	templateUrl: './formly-normalized-wrapper.component.html',
	styleUrls: ['./formly-normalized-wrapper.component.scss'],
	providers: [
		{
			provide: FormlyNormalizedWrapperService,
			useClass: FormlyNormalizedWrapperService
		}
	]
})
export class FormlyNormalizedWrapperComponent extends FieldWrapper implements OnInit {
	@ViewChild('fieldComponent', {
		read: ViewContainerRef,
		static: true
	}) fieldComponent: ViewContainerRef;
	constructor(private formlyNormalizedWrapperService: FormlyNormalizedWrapperService){
		super();
	}
	ngOnInit(){
		this.formlyNormalizedWrapperService.setItem(this.to.item, this.to.itemKey);
	}
}
