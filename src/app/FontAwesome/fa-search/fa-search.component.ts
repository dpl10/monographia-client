/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-search',
	templateUrl: './fa-search.component.html',
	styleUrls: ['./fa-search.component.scss']
})
export class FaSearchComponent implements OnInit {
	@Input() container: boolean = true;
	public faSearch = faSearch;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
