/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-file-signature',
	templateUrl: './fa-file-signature.component.html',
	styleUrls: ['./fa-file-signature.component.scss']
})
export class FaFileSignatureComponent implements OnInit {
	@Input() container: boolean = true;
	public faFileSignature = faFileSignature;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
