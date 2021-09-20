/* imports from node_modules */
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '@monographia/authentication.service';
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {
	constructor(private authenticationService: AuthenticationService, private router: Router){
	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
		if(this.authenticationService.isLoggedOn() === true){
			return(true);
		} else {
			this.router.navigate(['logon'], {
				queryParams: {
					returnUrl: state.url
				}
			});
			return(false);
		}
	}
}
