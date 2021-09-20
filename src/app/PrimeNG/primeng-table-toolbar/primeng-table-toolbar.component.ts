/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
/* imports from app */
import { ItemObject } from '@monographia/state-manager/state-manager.item';
import { PrimeNGTableBaseComponent } from '@monographia/PrimeNG/primeng-table-base/primeng-table-base.component';
import { PrimeNGTableBaseService } from '@monographia/PrimeNG/primeng-table-base/primeng-table-base.service';
import { PrimeNGToolbarService, ToolbarConfig } from '@monographia/PrimeNG/primeng-toolbar/primeng-toolbar.service';
@Component({
	selector: 'app-primeng-table-toolbar',
	templateUrl: './primeng-table-toolbar.component.html',
	styleUrls: ['./primeng-table-toolbar.component.scss'],
	providers: [
		{
			provide: PrimeNGTableBaseService,
			useClass: PrimeNGTableBaseService
		}, {
			provide: PrimeNGToolbarService,
			useClass: PrimeNGToolbarService
		}
	]
})
export class PrimeNGTableToolbarComponent extends PrimeNGTableBaseComponent implements OnInit {
	public configuration: ToolbarConfig;
	@Input() initalConfiguration: ToolbarConfig = new ToolbarConfig();
	ngOnInit(){
		super.ngOnInit();
		this.configuration = this.initalConfiguration;
		this.primeNGToolbarService.setConfig(this.initalConfiguration);
		this.primeNGToolbarService.toolbarConfig$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: ToolbarConfig): void => {
// make it so this does not cause a problem (set config from calling component?)
// 			this.configuration = x;
		});
	}
	public onRowSelect(x: ItemObject): void {
		this.primeNGToolbarService.setSelected(x.id);
	}
}
