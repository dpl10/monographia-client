/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faTable } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-table',
	templateUrl: './fa-table.component.html',
	styleUrls: ['./fa-table.component.scss']
})
export class FaTableComponent implements OnInit {
	@Input() container: boolean = true;
	public faTable = faTable;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
