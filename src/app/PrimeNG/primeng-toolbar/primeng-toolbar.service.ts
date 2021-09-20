/* imports from node_modules */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
/* imports from app */
import { ItemObject } from '@monographia/state-manager/state-manager.item';
export class ToolbarButton {
	protected static SInit = (() => {
		ToolbarButton.prototype.disable = true;
		ToolbarButton.prototype.visable = false;
	})();
	disable: boolean;
	visable: boolean;
}
export class ToolbarConfig {
	protected static SInit = (() => {
		ToolbarConfig.prototype.copyButton = new ToolbarButton();
		ToolbarConfig.prototype.deleteButton = new ToolbarButton();
		ToolbarConfig.prototype.detailButton = new ToolbarButton();
		ToolbarConfig.prototype.editButton = new ToolbarButton();
		ToolbarConfig.prototype.graphButton = new ToolbarButton();
		ToolbarConfig.prototype.newButton = new ToolbarButton();
		ToolbarConfig.prototype.passwordButton = new ToolbarButton();
		ToolbarConfig.prototype.saveButton = new ToolbarButton();
		ToolbarConfig.prototype.tableButton = new ToolbarButton();
	})();
	copyButton: ToolbarButton;
	deleteButton: ToolbarButton;
	detailButton: ToolbarButton;
	editButton: ToolbarButton;
	graphButton: ToolbarButton;
	newButton: ToolbarButton;
	passwordButton: ToolbarButton;
	saveButton: ToolbarButton;
	selected: number;
	tableButton: ToolbarButton;
}
@Injectable({
	providedIn: 'root'
})
export class PrimeNGToolbarService implements OnDestroy {
	protected ngUnsubscribe = new Subject();
	protected toolbarConfig: BehaviorSubject<ToolbarConfig> = new BehaviorSubject(new ToolbarConfig());
	public toolbarConfig$: Observable<ToolbarConfig> = this.toolbarConfig.asObservable();
	public clickCopy(): void {
// fill in
console.log('clickCopy');
	}
	public clickDelete(): void {
// fill in
console.log('clickDelete');
	}
	public clickDetail(): void {
// fill in
console.log('clickDetail');
	}
	public clickEdit(): void {
// fill in
console.log('clickEdit');
	}
	public clickGraph(): void {
// fill in
console.log('clickGraph');
	}
	public clickNew(): void {
// fill in
console.log('clickNew');
	}
	public clickPassword(): void {
// fill in
console.log('clickPassword');
	}
	public clickSave(): void {
// fill in
console.log('clickSave');
	}
	public clickTable(): void {
// fill in
console.log('clickTable');
	}
	constructor(){
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	public setConfig(x: ToolbarConfig): void {
		this.toolbarConfig.next(x);
	}
	public setSelected(x: number, c: ToolbarConfig = this.toolbarConfig.getValue(), C: BehaviorSubject<ToolbarConfig> = this.toolbarConfig): void {
		c.selected = x;
// figure out seurity
// activate/deactivate buttons
		C.next(c);
console.log('setSelected', C.getValue().selected);
	}
}
