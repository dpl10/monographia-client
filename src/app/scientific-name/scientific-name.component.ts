/* imports from node_modules */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
/* imports from app */
import { QuaesitorService } from '@monographia/quaesitor.service';
@Component({
	selector: 'app-scientific-name',
	templateUrl: './scientific-name.component.html',
	styleUrls: ['./scientific-name.component.scss']
})
export class ScientificNameComponent implements OnInit {
	public inputText: string;
	public outputText: Array<string>;
	constructor(private messageService: MessageService, private quaesitor: QuaesitorService, private translateService: TranslateService){
	}
	ngOnInit(){
	}
	public async processText(): Promise<boolean> {
		if(this.inputText === undefined){
			this.messageService.add({
				detail: await this.translateService.get('i18n.missingInput').toPromise(),
				severity: 'error',
				summary: await this.translateService.get('i18n.inputRequired').toPromise()
			});
			return(true);
		} else {
			this.outputText = await this.quaesitor.extractSpecies(this.inputText, true);
			return(false);
		}
	}
}
