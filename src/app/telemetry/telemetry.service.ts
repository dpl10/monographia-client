/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { FingerprintService } from '@monographia/fingerprint.service';
import { Interface } from '@monographia/telemetry/telemetry.model';
import { RegexpService } from '@monographia/regexp.service';

import { Telemetries } from '@monographia/telemetry/telemetry.mock';

@Injectable({
	providedIn: 'root'
})
export class TelemetryService {
	private startTime: number;
	constructor(private fingerprintService: FingerprintService, private regexpService: RegexpService){
	}
	public async entryTelemetry(): Promise<void> {
		this.startTime = new Date().valueOf();
// include in state? send to server...
console.log(JSON.stringify(await this.fingerprintService.getFingerprint()), this.regexpService.domainExtract(document.referrer));
	}
	public exitTelemetry(): void {
console.log('exit telemetry:', JSON.stringify(Telemetries));
// do something...
	}
	public updateTelemetry(i: Interface): void {

//		(new Date().valueOf()-this.startTime);

	}

//	Interface: 'acknowledgments'|'all'|'characters'|'classifications'|'click'|'collections'|'copyButton'|'database'|'deleteButton'|'deselect'|'detailButton'|'editButton'|'faq'|'findFunction'|'graphButton'|'literature'|'logon'|'monographia'|'multimedia'|'newButton'|'observations'|'output'|'passwordButton'|'profile'|'projects'|'saveButton'|'saveFunction'|'select'|'showcase'|'sort'|'specimens'|'syndication'|'tableButton'|'taxonomy'|'wiki';





}

/*


var telemetryReadings = {
	all: [new Date().valueOf()],
	click: [new Date().valueOf()],
	copyB: [new Date().valueOf()],
	deleteB: [new Date().valueOf()],
	deselect: [new Date().valueOf()],
	detailB: [new Date().valueOf()],
	editB: [new Date().valueOf()],
	findF: [new Date().valueOf()],
	graphB: [new Date().valueOf()],
	newB: [new Date().valueOf()],
	passwordB: [new Date().valueOf()],
	resetF: [new Date().valueOf()],
	saveB: [new Date().valueOf()],
	saveF: [new Date().valueOf()],
	select: [new Date().valueOf()],
	sort: [new Date().valueOf()]
};
var telemetry = {
	WebClient: 0,
	Mobile: false,
	InterfaceModule: moduleURL
};
var moduleStart = Number.MAX_SAFE_INTEGER;
for(var reading in telemetryReadings){
	if(telemetryReadings[reading][0] < moduleStart){
		moduleStart = telemetryReadings[reading][0];
	}
	if(telemetryReadings[reading].length > 1){
		if(telemetryAggregate.hasOwnProperty(reading) === true){
			telemetry[reading] = telemetryAggregate[reading];
		} else {
			telemetry[reading] = initialize(telemetryReadings[reading][telemetryReadings[reading].length-1]-telemetryReadings[reading][telemetryReadings[reading].length-2], 0);
		}
		for(var k = telemetryReadings[reading].length-1; k > 0; k--){
			telemetry[reading] = quartiles(telemetryReadings[reading][k]-telemetryReadings[reading][k-1], telemetry[reading]);
		}
	}
}
if(telemetryAggregate !== null){
	if(telemetryAggregate.hasOwnProperty('module') === true){
		telemetry.module = quartiles(new Date().valueOf()-moduleStart, telemetryAggregate.module);
	}
} else {
	telemetry.module = initialize(new Date().valueOf()-moduleStart, 1);
}
if(has('chrome')){
	telemetry.WebClient = 1;
} else if(has('safari')){
	telemetry.WebClient = 2;
} else if(has('ff')){
	telemetry.WebClient = 3;
} else if(has('opera')){
	telemetry.WebClient = 4;
} else if(has('ie')){
	telemetry.WebClient = 5;
}
if(has('ios') || has('android')){
	telemetry.Mobile = true;
}
url += '?MagicString=' + MagicString + '&DemoMode=' + DemoMode;
when(lzma.compress(telemetry), function(result){
	window.location = url + '&telemetry=' + encodeURIComponent(result);
	return(false);
}, function(error){
	console.log('Error: telemetry compression failed!');
	window.location = url;
	return(true);
});
return(false);
},
setActivity: function(){
activity = true;
return(false);
},
setNavProject: function(text){
if(navProject){
	navProject.innerHTML = text;
}
return(false);
},
setTelemetryReadings: function(reading, value){
telemetryReadings.all.push(value);
telemetryReadings[reading].push(value);
return(false);
}
}));

*/
