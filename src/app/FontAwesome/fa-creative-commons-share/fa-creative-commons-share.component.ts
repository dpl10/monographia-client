/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCreativeCommonsShare } from '@fortawesome/free-brands-svg-icons';
@Component({
	selector: 'app-fa-creative-commons-share',
	templateUrl: './fa-creative-commons-share.component.html',
	styleUrls: ['./fa-creative-commons-share.component.scss']
})
export class FaCreativeCommonsShareComponent implements OnInit {
	@Input() container: boolean = true;
	public faCreativeCommonsShare = faCreativeCommonsShare;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
