/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-fa-upload',
	templateUrl: './fa-upload.component.html',
	styleUrls: ['./fa-upload.component.scss']
})
export class FaUploadComponent implements OnInit {
	@Input() container: boolean = true;
	public faUpload = faUpload;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
