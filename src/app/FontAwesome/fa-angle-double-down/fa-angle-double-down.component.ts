/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-angle-double-down',
	templateUrl: './fa-angle-double-down.component.html',
	styleUrls: ['./fa-angle-double-down.component.scss']
})
export class FaAngleDoubleDownComponent implements OnInit {
	@Input() container: boolean = true;
	public faAngleDoubleDown = faAngleDoubleDown;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
