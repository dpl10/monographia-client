/* imports from node_modules */
import { Component, OnInit } from '@angular/core';
/* imports from app */
import { Tab } from '@monographia/PrimeNG/primeng-tab-view/primeng-tab-view.item';
@Component({
	selector: 'app-utility',
	templateUrl: './utility.component.html',
	styleUrls: ['./utility.component.scss']
})
export class UtilityComponent implements OnInit {
	public tabs: Array<Tab> = [
		{
			component: 'aboutUtility',
			title: 'i18n.utilityGeneral'
		}, {
			component: 'geography',
			title: 'i18n.utilityGeography'
		}, {
			component: 'scientificName',
			title: 'i18n.utilityScientificName'
		}
	];
	constructor(){
	}
	ngOnInit(){
	}
}
