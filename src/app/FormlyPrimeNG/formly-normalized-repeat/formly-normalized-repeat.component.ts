/* imports from node_modules */
import { Component, OnDestroy, OnInit, } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
/* imports from app */
import { FormlyDropdownFieldOption, FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { FormlyNormalizedWrapperService, NormalizedWrapperData } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.service';
@Component({
	selector: 'app-formly-normalized-repeat',
	templateUrl: './formly-normalized-repeat.component.html',
	styleUrls: ['./formly-normalized-repeat.component.scss']
})
export class FormlyNormalizedRepeatComponent extends FieldArrayType implements OnDestroy, OnInit {
	public disableEdit: Array<boolean> = [];
	private ngUnsubscribe = new Subject();
	public addClick(): void {
		this.formlyNormalizedWrapperService.clickAdd();
		this.add();
	}
	constructor(private formlyNormalizedWrapperService: FormlyNormalizedWrapperService){
		super();
	}
	public editClick(o: FormlyDropdownFieldOption, i: number): void {
		const keys = Object.keys(o);
		if(o[keys[0]] === undefined){
			this.formlyNormalizedWrapperService.clickEditNew(new FormlyDropdownOption(), i);
		} else {
			this.formlyNormalizedWrapperService.clickEditNew(o[keys[0]], i);
		}
	}
	public newClick(i: number): void {
		this.formlyNormalizedWrapperService.clickEditNew(new FormlyDropdownOption(), i);
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.formlyNormalizedWrapperService.normalizedWrapperData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: NormalizedWrapperData): void => {
			this.disableEdit[x.index] = x.disableEdit[x.index];
			if((this.form.controls[x.itemKey] != null) && (x.selectedOptions != null)){
				this.form.controls[x.itemKey].patchValue(x.selectedOptions);
			}
		});
	}
	public removeClick(i: number): void {
		this.formlyNormalizedWrapperService.clickRemove(i);
		this.remove(i);
	}
}
