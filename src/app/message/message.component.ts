/* imports from node_modules */
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
	constructor(public messageService: MessageService){
	}
	ngOnInit(){
	}
}
