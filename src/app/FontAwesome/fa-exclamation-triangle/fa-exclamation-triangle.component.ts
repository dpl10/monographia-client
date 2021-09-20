/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-exclamation-triangle',
	templateUrl: './fa-exclamation-triangle.component.html',
	styleUrls: ['./fa-exclamation-triangle.component.scss']
})
export class FaExclamationTriangleComponent implements OnInit {
	@Input() container: boolean = true;
	public faExclamationTriangle = faExclamationTriangle;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit() {
	}
}
