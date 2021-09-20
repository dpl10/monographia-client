/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-cityAdd',
	templateUrl: './fa-cityAdd.component.html',
	styleUrls: ['./fa-cityAdd.component.scss']
})
export class FaCityAddComponent implements OnInit {
	@Input() container: boolean = true;
	public faCity = faCity;
	public faPlus = faPlus;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
