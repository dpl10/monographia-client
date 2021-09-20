/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-universityAdd',
	templateUrl: './fa-universityAdd.component.html',
	styleUrls: ['./fa-universityAdd.component.scss']
})
export class FaUniversityAddComponent implements OnInit {
	@Input() container: boolean = true;
	public faPlus = faPlus;
	public faUniversity = faUniversity;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
