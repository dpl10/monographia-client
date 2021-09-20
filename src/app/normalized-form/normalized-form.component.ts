/* imports from node_modules */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Select } from '@ngxs/store';
import { Subject } from 'rxjs/Subject';
import { cloneDeep } from 'lodash';
import { distinct, map, takeUntil } from 'rxjs/operators';
/* imports from app */
import { CityForm } from '@monographia/data-handler/city/city.form';
import { FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { FormlyNormalizedWrapperService, NormalizedWrapperData } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.service';
import { ItemObject, ItemString, newItem } from '@monographia/state-manager/state-manager.item';
import { InstitutionForm } from '@monographia/data-handler/institution/institution.form';
import { PeriodicalForm } from '@monographia/data-handler/periodical/periodical.form';
import { PersonForm } from '@monographia/data-handler/person/person.form';
import { ProjectForm } from '@monographia/data-handler/project/project.form';
import { PublisherForm } from '@monographia/data-handler/publisher/publisher.form';
import { SchoolForm } from '@monographia/data-handler/school/school.form';
import { StateManager } from '@monographia/state-manager/state-manager.state';
import { TagForm } from '@monographia/data-handler/tag/tag.form';
import { UserForm } from '@monographia/data-handler/user/user.form';
@Component({
	selector: 'app-normalized-form',
	templateUrl: './normalized-form.component.html',
	styleUrls: ['./normalized-form.component.scss']
})
export class NormalizedFormComponent implements OnDestroy, OnInit {
	public fields: Array<FormlyFieldConfig>;
	public form = new FormGroup({});
	private initialized: boolean = false;
	private m: ItemObject;
	public model = new ReplaySubject<ItemObject>(1);
	private model$: Observable<ItemObject> = this.model.asObservable();
	private ngUnsubscribe = new Subject();
	@Select(StateManager.options) normalizedOptions$: Observable<(item: ItemString) => Array<FormlyDropdownOption>>;
	public options: FormlyFormOptions = {
		formState: {
			mainModel: this.model
		}
	};
	private visible: boolean = false;
	constructor(private formlyNormalizedWrapperService: FormlyNormalizedWrapperService){
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.formlyNormalizedWrapperService.normalizedWrapperData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: NormalizedWrapperData): void => {
			if(this.initialized === false){
				switch(x.item){
					case 'city':
						this.fields = CityForm();
						break;
					case 'institution':
						this.fields = InstitutionForm();
						break;
					case 'periodical':
						this.fields = PeriodicalForm();
						break;
					case 'person':
						this.fields = PersonForm();
						break;
					case 'project':
						this.fields = ProjectForm();
						break;
					case 'publisher':
						this.fields = PublisherForm(this.selectOptions$('city'));
						break;
					case 'school':
						this.fields = SchoolForm(this.selectOptions$('city'));
						break;
					case 'tag':
						this.fields = TagForm();
						break;
					case 'user':
						this.fields = UserForm(this.selectOptions$('institution'));
						break;
				}
				this.initialized = true;
			}
			if((x.visible === true) && (this.visible === false)){
				this.form.reset();
				this.model.next(cloneDeep(x.record));
				this.visible = true;
			} else if((x.visible === false) && (this.visible === true)){
				this.form.reset();
				this.model.next(newItem(x.item));
				this.visible = false;
			}
		});
		this.form.valueChanges.pipe(distinct(), takeUntil(this.ngUnsubscribe)).subscribe((x: ItemObject): void => {
			this.formlyNormalizedWrapperService.setDisableSave(!this.form.valid, cloneDeep(this.m));
		});
		this.model$.pipe(distinct(), takeUntil(this.ngUnsubscribe)).subscribe((x: ItemObject): void => {
			this.m = x;
		});
	}
	private selectOptions$(item: ItemString): Observable<Array<FormlyDropdownOption>> {
		return(this.normalizedOptions$.pipe(map(select => select(item))));
	}
}
