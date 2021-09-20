/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-user-edit',
	templateUrl: './fa-user-edit.component.html',
	styleUrls: ['./fa-user-edit.component.scss']
})
export class FaUserEditComponent implements OnInit {
	@Input() container: boolean = true;
	public faUserEdit = faUserEdit;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
