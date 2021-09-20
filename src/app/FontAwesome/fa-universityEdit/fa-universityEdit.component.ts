/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-universityEdit',
	templateUrl: './fa-universityEdit.component.html',
	styleUrls: ['./fa-universityEdit.component.scss']
})
export class FaUniversityEditComponent implements OnInit {
	@Input() container: boolean = true;
	public faPen = faPen;
	public faUniversity = faUniversity;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
