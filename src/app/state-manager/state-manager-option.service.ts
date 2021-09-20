/* imports from node_modules */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from '@ngx-translate/core';
import { first, takeUntil } from 'rxjs/operators';
/* imports from app */
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { ItemString } from '@monographia/state-manager/state-manager.item';
export class TranslateOptions { /* properties must be the same as ItemString (./state-manager.item) */
	city: FormlyDropdownOption;
	country: FormlyDropdownOption;
	institution: FormlyDropdownOption;
	language: FormlyDropdownOption;
	periodical: FormlyDropdownOption;
	person: FormlyDropdownOption;
	publication: FormlyDropdownOption;
	publisher: FormlyDropdownOption;
	school: FormlyDropdownOption;
	tag: FormlyDropdownOption;
	user: FormlyDropdownOption;
}
const translateSelect = { /* properties must be the same as ItemString (./state-manager.item) */
	city: 'i18n.selectCity',
	country: 'i18n.selectCountry',
	institution: 'i18n.selectInstitution',
	language: 'i18n.selectLanguage',
	periodical: 'i18n.selectPeriodical',
	person: 'i18n.selectPerson',
	publication: 'i18n.selectPublication',
	publisher: 'i18n.selectPublisher',
	school: 'i18n.selectSchool',
	tag: 'i18n.selectTag',
	user: 'i18n.selectPerson'
};
@Injectable({
	providedIn: 'root'
})
export class StateManagerOptionService implements OnDestroy {
	private defaultOptions: BehaviorSubject<TranslateOptions> = new BehaviorSubject(new TranslateOptions());
	public defaultOptions$: Observable<TranslateOptions> = this.defaultOptions.asObservable();
	private ngUnsubscribe = new Subject();
	constructor(private translateService: TranslateService){
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	public async optionizer(o: Array<FormlyDropdownOption>, i: ItemString): Promise<Array<FormlyDropdownOption>> {
		if(o[0].label === undefined){
			return([new FormlyDropdownOption()]);
		} else {
			const options = o.sort(function(a: FormlyDropdownOption, b: FormlyDropdownOption): number {
				return(a.label.toLowerCase().localeCompare(b.label.toLowerCase()));
			});
			const d = this.defaultOptions.getValue();
			d[i] = {
				label: await this.translateService.get(translateSelect[i]).pipe(first(), takeUntil(this.ngUnsubscribe)).toPromise(),
				value: 0
			};
			this.defaultOptions.next(d);
			options.unshift(d[i]);
			return(options);
		}
	}
}
