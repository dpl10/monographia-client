/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
/* imports from app */
import { Tab } from '@monographia/PrimeNG/primeng-tab-view/primeng-tab-view.item';
@Component({
	selector: 'app-primeng-tab-view',
	templateUrl: './primeng-tab-view.component.html',
	styleUrls: ['./primeng-tab-view.component.scss']
})
export class PrimengTabViewComponent implements OnInit {
	@Input() tabs: Array<Tab> = [new Tab()];
	constructor(){
	}
	ngOnInit(){
	}
}
