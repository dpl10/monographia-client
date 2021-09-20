/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-tagEdit',
	templateUrl: './fa-tagEdit.component.html',
	styleUrls: ['./fa-tagEdit.component.scss']
})
export class FaTagEditComponent implements OnInit {
	@Input() container: boolean = true;
	public faPen = faPen;
	public faTag = faTag;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
