/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-bookAdd',
	templateUrl: './fa-bookAdd.component.html',
	styleUrls: ['./fa-bookAdd.component.scss']
})
export class FaBookAddComponent implements OnInit {
	@Input() container: boolean = true;
	public faBook = faBook;
	public faPlus = faPlus;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
