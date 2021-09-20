/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faClone } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-clone',
	templateUrl: './fa-clone.component.html',
	styleUrls: ['./fa-clone.component.scss']
})
export class FaCloneComponent implements OnInit {
	@Input() container: boolean = true;
	public faClone = faClone;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
