/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-tagAdd',
	templateUrl: './fa-tagAdd.component.html',
	styleUrls: ['./fa-tagAdd.component.scss']
})
export class FaTagAddComponent implements OnInit {
	@Input() container: boolean = true;
	public faPlus = faPlus;
	public faTag = faTag;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
