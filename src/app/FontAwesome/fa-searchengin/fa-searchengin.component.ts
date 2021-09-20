/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
@Component({
	selector: 'app-fa-searchengin',
	templateUrl: './fa-searchengin.component.html',
	styleUrls: ['./fa-searchengin.component.scss']
})
export class FaSearchenginComponent implements OnInit {
	@Input() container: boolean = true;
	public faSearchengin = faSearchengin;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
