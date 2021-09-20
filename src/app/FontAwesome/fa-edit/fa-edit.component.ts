/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-edit',
	templateUrl: './fa-edit.component.html',
	styleUrls: ['./fa-edit.component.scss']
})
export class FaEditComponent implements OnInit {
	@Input() container: boolean = true;
	public faEdit = faEdit;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
