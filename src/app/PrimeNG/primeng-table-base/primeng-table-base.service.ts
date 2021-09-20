/* imports from node_modules */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs/Subject';
/* imports from app */
import { DateTimeService } from '@monographia/date-time.service';
import { ItemString } from '@monographia/state-manager/state-manager.item';
export class TableData {
	module?: ItemString;
	selectedItem?: Number;
}
@Injectable({
	providedIn: 'root'
})
export class PrimeNGTableBaseService implements OnDestroy {
	protected ngUnsubscribe = new Subject();
	protected tableData: BehaviorSubject<TableData> = new BehaviorSubject(new TableData());
	public tableData$: Observable<TableData> = this.tableData.asObservable();
	constructor(protected dateTimeService: DateTimeService, protected store: Store){
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	public setTable(x: ItemString, c: TableData = this.tableData.getValue(), C: BehaviorSubject<TableData> = this.tableData): void {
		if(x != null){
			if(c.module !== x){
				c.module = x;
				C.next(c);
			}
		}
	}
}
