/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-plus',
	templateUrl: './fa-plus.component.html',
	styleUrls: ['./fa-plus.component.scss']
})
export class FaPlusComponent implements OnInit {
	@Input() container: boolean = true;
	public faPlus = faPlus;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
