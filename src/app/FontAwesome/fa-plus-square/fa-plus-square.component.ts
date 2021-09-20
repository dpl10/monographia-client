/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-plus-square',
	templateUrl: './fa-plus-square.component.html',
	styleUrls: ['./fa-plus-square.component.scss']
})
export class FaPlusSquareComponent implements OnInit {
	@Input() container: boolean = true;
	public faPlusSquare = faPlusSquare;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
