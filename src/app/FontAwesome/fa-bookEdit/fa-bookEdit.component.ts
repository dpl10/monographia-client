/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-bookEdit',
	templateUrl: './fa-bookEdit.component.html',
	styleUrls: ['./fa-bookEdit.component.scss']
})
export class FaBookEditComponent implements OnInit {
	@Input() container: boolean = true;
	public faBook = faBook;
	public faPen = faPen;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
