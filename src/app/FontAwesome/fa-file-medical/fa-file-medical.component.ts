/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-file-medical',
	templateUrl: './fa-file-medical.component.html',
	styleUrls: ['./fa-file-medical.component.scss']
})
export class FaFileMedicalComponent implements OnInit {
	@Input() container: boolean = true;
	public faFileMedical = faFileMedical;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
