/* imports from node_modules */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
/* imports from app */
import { FormlyNormalizedWrapperService, NormalizedWrapperData } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.service';
@Component({
	selector: 'app-formly-subnormalized-underbar',
	templateUrl: './formly-subnormalized-underbar.component.html',
	styleUrls: ['./formly-subnormalized-underbar.component.scss']
})
export class FormlySubnormalizedUnderbarComponent implements OnDestroy, OnInit {
	public disableSave: boolean = true;
	private ngUnsubscribe = new Subject();
	public visible: boolean = false;
	constructor(public formlyNormalizedWrapperService: FormlyNormalizedWrapperService){
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.formlyNormalizedWrapperService.normalizedWrapperData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: NormalizedWrapperData): void => {
			this.disableSave = x.disableSave;
			this.visible = x.visible;
		});
	}
}
