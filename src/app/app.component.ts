/* imports from node_modules */
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
/* imports from app */
import { AuthenticationService } from '@monographia/authentication.service';
import { TelemetryService } from '@monographia/telemetry/telemetry.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
	@HostListener('window:beforeunload')
	beforeUnloadHandler(){
		this.telemetryService.exitTelemetry();
	}
	constructor(public authenticationService: AuthenticationService, public router: Router, public telemetryService: TelemetryService, public translateService: TranslateService){
		translateService.addLangs(['en', 'es']);
		translateService.setDefaultLang('en');
		const browserLanguage = translateService.getBrowserLang();
		if(browserLanguage === 'es'){
			translateService.use(browserLanguage);
		} else {
			translateService.use('en');
		}
	}
	ngAfterViewInit(){
		this.telemetryService.entryTelemetry();
	}
}
