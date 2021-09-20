/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-expand-arrows-alt',
	templateUrl: './fa-expand-arrows-alt.component.html',
	styleUrls: ['./fa-expand-arrows-alt.component.scss']
})
export class FaExpandArrowsAltComponent implements OnInit {
	@Input() container: boolean = true;
	public faExpandArrowsAlt = faExpandArrowsAlt;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
