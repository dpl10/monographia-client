/* imports from node_modules */
import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
/* imports from app */
import { FormlyNormalizedWrapperService, NormalizedWrapperData } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.service';
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { ItemKey, ItemObject } from '@monographia/state-manager/state-manager.item';
@Component({
	selector: 'app-formly-normalized-dropdown-wrapper',
	templateUrl: './formly-normalized-dropdown-wrapper.component.html',
	styleUrls: ['./formly-normalized-dropdown-wrapper.component.scss']
})
export class FormlyNormalizedDropdownWrapperComponent extends FieldWrapper implements OnDestroy, OnInit{
	public disableEdit: boolean = true;
	@ViewChild('fieldComponent', {
		read: ViewContainerRef,
		static: true
	}) fieldComponent: ViewContainerRef;
	private index: number = 0; /* hardcoded as zero because this component is only used when there are no repeated form elements */
	private itemKey: ItemKey;
	private ngUnsubscribe = new Subject();
	constructor(private formlyNormalizedWrapperService: FormlyNormalizedWrapperService){
		super();
	}
	public editClick(model: ItemObject): void {
		if(model[this.itemKey] === undefined){
			this.formlyNormalizedWrapperService.clickEditNew(new FormlyDropdownOption(), this.index);
		} else {
			this.formlyNormalizedWrapperService.clickEditNew(model[this.itemKey], this.index);
		}
	}
	public newClick(): void {
		this.formlyNormalizedWrapperService.clickEditNew(new FormlyDropdownOption(), this.index);
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.formlyNormalizedWrapperService.normalizedWrapperData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: NormalizedWrapperData): void => {
			if(x.disableEdit[this.index] != null){
				this.disableEdit = x.disableEdit[this.index];
			} else {
				this.disableEdit = true;
			}
			this.itemKey = x.itemKey;
			if((this.form.controls[x.itemKey] != null) && (x.selectedOption != null)){
				this.form.controls[x.itemKey].patchValue(x.selectedOption);
			}
		});
	}
}
