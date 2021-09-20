/* imports from node_modules */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Select, Store } from '@ngxs/store';
import { Subject } from 'rxjs/Subject';
import { compare } from 'fast-json-patch';
import { first, map, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
/* imports from app */
import { DateTimeService } from '@monographia/date-time.service';
import { FormlyDropdownFieldOption, FormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { InsertUpdateItem } from '@monographia/state-manager/state-manager.actions';
import { ItemKey, ItemObject, ItemObjectRaw, ItemString, newItem } from '@monographia/state-manager/state-manager.item';
import { StateManager } from '@monographia/state-manager/state-manager.state';
import { StateManagerOptionService, TranslateOptions } from '@monographia/state-manager/state-manager-option.service';
export class NormalizedWrapperData {
	protected static SInit = (() => {
		NormalizedWrapperData.prototype.disableEdit = [];
		NormalizedWrapperData.prototype.disableSave = true;
		NormalizedWrapperData.prototype.index = 0;
		NormalizedWrapperData.prototype.selectedOptions = [];
		NormalizedWrapperData.prototype.visible = false;
	})();
	disableEdit: Array<boolean>;
	disableSave: boolean;
	index: number;
	item?: ItemString;
	itemKey?: ItemKey;
	record?: ItemObject;
	recordOriginal?: ItemObjectRaw;
	selectedOption?: FormlyDropdownOption;
	selectedOptions?: Array<FormlyDropdownFieldOption>;
	visible: boolean;
}
@Injectable({
	providedIn: 'root'
})
export class FormlyNormalizedWrapperService implements OnDestroy {
	@Select(StateManager.selectItem) currentItem$: Observable<(id: number, item: ItemString) => ItemObject>;
	@Select(StateManager.selectOption) currentOption$: Observable<(value: number, item: ItemString) => FormlyDropdownOption>;
	@Select(StateManager.nextID) id$: Observable<(item: ItemString, id: number) => number>;
	protected ngUnsubscribe = new Subject();
	protected normalizedWrapperData: BehaviorSubject<NormalizedWrapperData> = new BehaviorSubject(new NormalizedWrapperData());
	public normalizedWrapperData$: Observable<NormalizedWrapperData> = this.normalizedWrapperData.asObservable();
	public clickAdd(c: NormalizedWrapperData = this.normalizedWrapperData.getValue(), C: BehaviorSubject<NormalizedWrapperData> = this.normalizedWrapperData): void {
		this.stateManagerOptionService.defaultOptions$.pipe(first(), takeUntil(this.ngUnsubscribe)).subscribe((x: TranslateOptions): void => {
			c.disableEdit.push(true);
			c.index = c.disableEdit.length-1;
			const sOs: any = {};
			sOs[c.itemKey] = x[c.item];
			c.selectedOptions.push(sOs);
			C.next(c);
		});
	}
	public clickEditNew(x: FormlyDropdownOption, y: number, c: NormalizedWrapperData = this.normalizedWrapperData.getValue(), C: BehaviorSubject<NormalizedWrapperData> = this.normalizedWrapperData): void {
		if((x != null) && (y != null) && (this.normalizedWrapperData.getValue().item != null)){
			this.selectItem$(x).pipe(first(), takeUntil(this.ngUnsubscribe)).subscribe((z: ItemObject): void => {
				c.disableSave = true;
				c.index = y;
				c.record = z;
				c.recordOriginal = this.dateTimeService.date2iso(z);
				c.visible = true;
				C.next(c);
			});
		}
	}
	public clickRemove(x: number, c: NormalizedWrapperData = this.normalizedWrapperData.getValue(), C: BehaviorSubject<NormalizedWrapperData> = this.normalizedWrapperData): void {
		c.disableEdit.splice(x, 1);
		c.index = 0;
		c.selectedOptions.splice(x, 1);
		C.next(c);
	}
	public clickSave(c: NormalizedWrapperData = this.normalizedWrapperData.getValue(), C: BehaviorSubject<NormalizedWrapperData> = this.normalizedWrapperData): void {
		if((c.item != null) && (c.record != null) && (c.disableSave === false)){
			c.disableSave = true;
			c.visible = false;
			this.nextID$(c.item, c.record.id).pipe(first((id: number): boolean => {
				return(Number.isInteger(id));
			}), takeUntil(this.ngUnsubscribe)).subscribe((id: number): void => {
				c.record.id = id;
				this.store.dispatch(new InsertUpdateItem(c.item, c.record));
				this.selectOption$(c.record.id).pipe(first((i: FormlyDropdownOption): boolean => {
					return(!(i.value === undefined));
				}), takeUntil(this.ngUnsubscribe)).subscribe((i: FormlyDropdownOption): void => {
					c.disableEdit[c.index] = false;
					if((c.item === 'city') || (c.item === 'periodical') || (c.item === 'publisher') || (c.item === 'school')){ /* normalized-dropdown */
						c.selectedOption = i;
					} else if((c.item === 'person') || (c.item === 'publication') || (c.item === 'tag')){ /* normalized-repeat-dropdown */
						const sOs: any = {};
						sOs[c.itemKey] = i;
						c.selectedOptions[c.index] = sOs;
					}
					C.next(c);
				});
			});
		}
	}
	constructor(protected dateTimeService: DateTimeService, protected stateManagerOptionService: StateManagerOptionService, protected store: Store){
	}
	protected nextID$(item: ItemString, id: number): Observable<number> {
		return(this.id$.pipe(map(select => select(item, id))));
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	protected selectItem$(o: FormlyDropdownOption, c: NormalizedWrapperData = this.normalizedWrapperData.getValue()): Observable<ItemObject> {
		if(c.item != null){
			if(o.value === undefined){
				return(of(newItem(c.item)));
			} else {
				return(this.currentItem$.pipe(map(select => select(o.value, c.item))));
			}
		}
	}
	protected selectOption$(v: number, c: NormalizedWrapperData = this.normalizedWrapperData.getValue()): Observable<FormlyDropdownOption> {
		if(c.item === undefined){
			return(of(new FormlyDropdownOption()));
		} else {
			return(this.currentOption$.pipe(map(select => select(v, c.item))));
		}
	}
	public setDisableEdit(x: FormlyDropdownOption, y?: number, c: NormalizedWrapperData = this.normalizedWrapperData.getValue(), C: BehaviorSubject<NormalizedWrapperData> = this.normalizedWrapperData): void {
		if(x != null){
			let d: boolean = false;
			if(x.value === undefined){
				d = true;
			} else if(x.value === 0){
				d = true;
			}
			if(y === undefined){
				let u: boolean = false;
				if(c.selectedOption === undefined){
					u = true;
				} else if((c.selectedOption.value !== x.value) || (c.selectedOption.label !== x.label)){
					u = true;
				} else if(c.disableEdit[0] !== d){
					u = true;
				}
				if(u === true){
					c.disableEdit[0] = d;
					c.selectedOption = x;
					C.next(c);
				}
			} else {
				if((c.index !== y) || (c.disableEdit[y] !== d) || (c.selectedOptions[c.index][c.itemKey].value !== x.value) || (c.selectedOptions[c.index][c.itemKey].label !== x.label)){
					c.index = y;
					c.disableEdit[c.index] = d;
					const sOs: any = {};
					sOs[c.itemKey] = x;
					c.selectedOptions[c.index] = sOs;
					C.next(c);
				}
			}
		}
	}
	public setDisableSave(x: boolean, y: ItemObject, c: NormalizedWrapperData = this.normalizedWrapperData.getValue(), C: BehaviorSubject<NormalizedWrapperData> = this.normalizedWrapperData): void {
		if((x != null) && (y != null)){
			if(x === false){
				if(compare(c.recordOriginal, this.dateTimeService.date2iso(y)).length > 0){
					if(compare(c.record, y).length > 0){
						c.disableSave = false;
						c.record = y;
						C.next(c);
					}
				}
			} else if(c.disableSave === false){
				c.disableSave = true;
				C.next(c);
			}
		}
	}
	public setItem(x: ItemString, y: ItemKey, c: NormalizedWrapperData = this.normalizedWrapperData.getValue(), C: BehaviorSubject<NormalizedWrapperData> = this.normalizedWrapperData): void {
		if((x != null) && (y === null)){
			if((c.item !== x) || (c.itemKey !== y)){
				c.item = x;
				c.itemKey = y;
				C.next(c);
			}
		}
	}
	public setVisible(x: boolean, c: NormalizedWrapperData = this.normalizedWrapperData.getValue(), C: BehaviorSubject<NormalizedWrapperData> = this.normalizedWrapperData): void {
		if(x != null){
			if(c.visible !== x){
				c.visible = x;
				if(x === false){
					c.disableSave = true;
				}
				C.next(c);
			}
		}
	}
}
@Injectable({
	providedIn: 'root'
})
export class FormlySubnormalizedWrapperService extends FormlyNormalizedWrapperService {
	public clickAdd(): void {
		return(super.clickAdd(this.normalizedWrapperData.getValue(), this.normalizedWrapperData));
	}
	public clickEditNew(x: FormlyDropdownOption, y: number): void {
		return(super.clickEditNew(x, y, this.normalizedWrapperData.getValue(), this.normalizedWrapperData));
	}
	public clickRemove(x: number): void {
		return(super.clickRemove(x, this.normalizedWrapperData.getValue(), this.normalizedWrapperData));
	}
	public clickSave(): void {
		return(super.clickSave(this.normalizedWrapperData.getValue(), this.normalizedWrapperData));
	}
	constructor(protected dateTimeService: DateTimeService, protected stateManagerOptionService: StateManagerOptionService, protected store: Store){
		super(dateTimeService, stateManagerOptionService, store);
	}
	public setDisableEdit(x: FormlyDropdownOption, y?: number): void {
		return(super.setDisableEdit(x, y, this.normalizedWrapperData.getValue(), this.normalizedWrapperData));
	}
	public setDisableSave(x: boolean, y: ItemObject): void {
		return(super.setDisableSave(x, y, this.normalizedWrapperData.getValue(), this.normalizedWrapperData));
	}
	public setItem(x: ItemString, y: ItemKey): void {
		return(super.setItem(x, y, this.normalizedWrapperData.getValue(), this.normalizedWrapperData));
	}
	public setVisible(x: boolean): void {
		return(super.setVisible(x, this.normalizedWrapperData.getValue(), this.normalizedWrapperData));
	}
}
