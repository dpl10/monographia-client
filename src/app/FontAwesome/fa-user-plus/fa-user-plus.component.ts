/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-user-plus',
	templateUrl: './fa-user-plus.component.html',
	styleUrls: ['./fa-user-plus.component.scss']
})
export class FaUserPlusComponent implements OnInit {
	@Input() container: boolean = true;
	public faUserPlus = faUserPlus;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
