/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-chart-bar',
	templateUrl: './fa-chart-bar.component.html',
	styleUrls: ['./fa-chart-bar.component.scss']
})
export class FaChartBarComponent implements OnInit {
	@Input() container: boolean = true;
	public faChartBar = faChartBar;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
