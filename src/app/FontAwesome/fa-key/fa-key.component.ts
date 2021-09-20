/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faKey } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-key',
	templateUrl: './fa-key.component.html',
	styleUrls: ['./fa-key.component.scss']
})
export class FaKeyComponent implements OnInit {
	@Input() container: boolean = true;
	public faKey = faKey;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
