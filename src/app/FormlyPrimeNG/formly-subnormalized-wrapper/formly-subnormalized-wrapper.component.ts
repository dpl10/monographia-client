/* imports from node_modules */
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
/* imports from app */
import { FormlyNormalizedWrapperService, FormlySubnormalizedWrapperService } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.service';
@Component({
	selector: 'app-formly-subnormalized-wrapper',
	templateUrl: './formly-subnormalized-wrapper.component.html',
	styleUrls: ['./formly-subnormalized-wrapper.component.scss'],
	providers: [
		{
			provide: FormlyNormalizedWrapperService,
			useClass: FormlySubnormalizedWrapperService
		}
	]
})
export class FormlySubnormalizedWrapperComponent extends FieldWrapper implements OnInit {
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
