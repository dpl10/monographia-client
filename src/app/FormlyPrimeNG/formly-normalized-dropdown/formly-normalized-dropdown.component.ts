/* imports from node_modules */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs/Subject';
import { distinct, takeUntil } from 'rxjs/operators';
/* imports from app */
import { ItemKey } from '@monographia/state-manager/state-manager.item';
import { FormlyNormalizedWrapperService, NormalizedWrapperData } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.service';
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import {	RegexpService } from '@monographia/regexp.service';
@Component({
	selector: 'app-formly-normalized-dropdown',
	templateUrl: '../formly-dropdown/formly-dropdown.component.html',
	styleUrls: ['../formly-dropdown/formly-dropdown.component.scss']
})
export class FormlyNormalizedDropdownComponent extends FieldType implements OnDestroy, OnInit {
	private itemKey: ItemKey;
	private ngUnsubscribe = new Subject();
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.formlyNormalizedWrapperService.normalizedWrapperData$.pipe(distinct(), takeUntil(this.ngUnsubscribe)).subscribe((x: NormalizedWrapperData): void => {
			this.itemKey = x.itemKey;
		});
	}
	constructor(private formlyNormalizedWrapperService: FormlyNormalizedWrapperService, private regexpService: RegexpService){
		super();
	}
	onChange(x: FormlyDropdownOption): void {
		if(this.options.parentForm.value[this.itemKey] != null){
			if(this.regexpService.array(this.options.parentForm.value[this.itemKey]) === true){
				if(x.value != null){
					const i = this.options.parentForm.value[this.itemKey].findIndex((datum: FormlyDropdownOption): boolean => {
						return(datum[this.itemKey].value === x.value); /* fails if there are multiple instances of the same option => depends upon RepeatUniqueEntriesValidator for uniqueness */
					});
					if(i > -1){
						this.formlyNormalizedWrapperService.setDisableEdit(x, i);
					}
				}
			} else {
				this.formlyNormalizedWrapperService.setDisableEdit(x);
			}
		}
	}
}
