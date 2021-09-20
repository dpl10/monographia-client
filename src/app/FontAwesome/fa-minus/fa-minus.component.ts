/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-minus',
	templateUrl: './fa-minus.component.html',
	styleUrls: ['./fa-minus.component.scss']
})
export class FaMinusComponent implements OnInit {
	@Input() container: boolean = true;
	public faMinus = faMinus;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
