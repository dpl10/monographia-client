/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-save',
	templateUrl: './fa-save.component.html',
	styleUrls: ['./fa-save.component.scss']
})
export class FaSaveComponent implements OnInit {
	@Input() container: boolean = true;
	public faSave = faSave;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
