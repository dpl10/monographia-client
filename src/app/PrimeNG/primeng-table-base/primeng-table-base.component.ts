/* imports from node_modules */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Select, Store } from '@ngxs/store';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';
import { map, takeUntil } from 'rxjs/operators';
/* imports from app */
import { FlattenService } from '@monographia/flatten.service';
import { ItemField, ItemObject, ItemString } from '@monographia/state-manager/state-manager.item';
import { PrimeNGTableBaseService } from '@monographia/PrimeNG/primeng-table-base/primeng-table-base.service';
import { PrimeNGToolbarService } from '@monographia/PrimeNG/primeng-toolbar/primeng-toolbar.service';
import { SelectItems } from '@monographia/state-manager/state-manager.actions';
import { StateManager } from '@monographia/state-manager/state-manager.state';
export class TableColumns {
	field: ItemField;
	title: string;
}
const translateColumns = { /* properties must match those of ItemString (../@monographia/state-manager/state-manager.item) */
	publication: 'i18n.columnsPublication'
};
@Component({
	selector: 'app-primeng-table-base',
	templateUrl: './primeng-table-base.component.html',
	styleUrls: ['./primeng-table-base.component.scss']
})
export class PrimeNGTableBaseComponent implements OnDestroy, OnInit {
	public columns: Array<TableColumns>;
	@Select(StateManager.data) data$: Observable<(item: ItemString) => Array<ItemObject>>;
	public itemData: Array<ItemObject>;
	protected ngUnsubscribe = new Subject();
	@Input() table: ItemString;
	constructor(
		private flattenService: FlattenService,
		private primeNGTableBaseService: PrimeNGTableBaseService,
		private store: Store,
		private translateService: TranslateService,
// should be protected???
		public primeNGToolbarService: PrimeNGToolbarService
	){
	}
	public flatten(x: string): string {
		return(this.flattenService.flatten(x));
	}
	private getData$(item: ItemString): Observable<Array<ItemObject>> {
		return(this.data$.pipe(map(select => select(item))));
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.primeNGTableBaseService.setTable(this.table);
		this.store.dispatch(new SelectItems(this.table)); /* unnecessary in most (all?) cases, but has no effect if data are already loaded */
		this.translateService.get(translateColumns[this.table]).pipe(takeUntil(this.ngUnsubscribe)).subscribe((translation: Array<TableColumns>): void => {
			this.columns = translation;
		});
		this.getData$(this.table).pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: Array<ItemObject>): void => {
			this.itemData = cloneDeep(x);
		});
	}
}
