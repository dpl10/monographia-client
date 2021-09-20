/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-question-circle',
	templateUrl: './fa-question-circle.component.html',
	styleUrls: ['./fa-question-circle.component.scss']
})
export class FaQuestionCircleComponent implements OnInit {
	@Input() container: boolean = true;
	public faQuestionCircle = faQuestionCircle;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
