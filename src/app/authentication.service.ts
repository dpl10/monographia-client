/* imports from node_modules */
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/* imports from app */
import { environment } from '@monographiaEnvironments/environment';
@Injectable({
	providedIn: 'root'
})
export class AuthenticationService implements OnDestroy {
	constructor(){
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	private ngUnsubscribe = new Subject();
	public isLoggedOn(): boolean {
		if(environment.production === false){
// do something
			return(true);
		} else {
// do something
			return(false);
		}
	}
	public logoff(){
// do something, called intentionally or when server authentication error encountered
	}
	public user(): string {
// do something
		return('');
	}
}
