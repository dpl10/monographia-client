/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-cityEdit',
	templateUrl: './fa-cityEdit.component.html',
	styleUrls: ['./fa-cityEdit.component.scss']
})
export class FaCityEditComponent implements OnInit {
	@Input() container: boolean = true;
	public faCity = faCity;
	public faPen = faPen;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
