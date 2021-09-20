/* imports from node_modules */
import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommonsShare } from '@fortawesome/free-brands-svg-icons';
@Component({
	selector: 'app-fa-creative-commons-shareBan',
	templateUrl: './fa-creative-commons-shareBan.component.html',
	styleUrls: ['./fa-creative-commons-shareBan.component.scss']
})
export class FaCreativeCommonsShareBanComponent implements OnInit {
	@Input() container: boolean = true;
	public faBan = faBan;
	public faCreativeCommonsShare = faCreativeCommonsShare;
	@Input() size: SizeProp = 'lg';
	constructor(){
	}
	ngOnInit(){
	}
}
