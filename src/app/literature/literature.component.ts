/* imports from node_modules */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
/* imports from app */
import { SelectItems } from '@monographia/state-manager/state-manager.actions';
@Component({
	selector: 'app-literature',
	templateUrl: './literature.component.html',
	styleUrls: ['./literature.component.scss']
})
export class LiteratureComponent implements OnInit {
	constructor(private store: Store){
	}
	ngOnInit(){
		this.store.dispatch(new SelectItems('city'));
		this.store.dispatch(new SelectItems('periodical'));
		this.store.dispatch(new SelectItems('person'));
		this.store.dispatch(new SelectItems('publication'));
		this.store.dispatch(new SelectItems('publisher'));
		this.store.dispatch(new SelectItems('school'));
		this.store.dispatch(new SelectItems('tag'));
	}
}
