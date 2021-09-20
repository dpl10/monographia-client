/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
@Component({
	selector: 'app-font-awesome-sizer',
	templateUrl: './font-awesome-sizer.component.html',
	styleUrls: ['./font-awesome-sizer.component.scss']
})
export class FontAwesomeSizerComponent implements OnInit {
	@Input() container: boolean = true;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
