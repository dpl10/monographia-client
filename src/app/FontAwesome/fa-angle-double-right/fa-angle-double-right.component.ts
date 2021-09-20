/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-angle-double-right',
	templateUrl: './fa-angle-double-right.component.html',
	styleUrls: ['./fa-angle-double-right.component.scss']
})
export class FaAngleDoubleRightComponent implements OnInit {
	@Input() container: boolean = true;
	public faAngleDoubleRight = faAngleDoubleRight;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit() {
	}
}
