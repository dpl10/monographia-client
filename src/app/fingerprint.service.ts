/* imports from node_modules */
import { Injectable, OnDestroy } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { UAParser } from 'ua-parser-js';
import * as stringify from 'fastest-stable-stringify';
import FingerprintJS, { Agent, GetResult } from '@fingerprintjs/fingerprintjs';
/* imports from app */
import { RegexpService } from '@monographia/regexp.service';
import { XXhashService } from '@monographia/xxhash.service';
export type RenderingEngine = 'Amaya'|'Blink'|'EdgeHTML'|'Gecko'|'Goanna'|'iCab'|'KHTML'|'Links'|'Lynx'|'NetFront'|'NetSurf'|'Presto'|'Tasman'|'Trident'|'unknown'|'w3m'|'WebKit';
export class Fingerprint {
	Fingerprint: string;
	PreviousFingerprint?: string;
	RenderingEngine: RenderingEngine;
}
@Injectable({
	providedIn: 'root'
})
export class FingerprintService implements OnDestroy {
	private loaded: boolean = false;
	protected ngUnsubscribe = new Subject();
	private storedFingerprint: Fingerprint = new Fingerprint();
	private checkLoading(): void {
		this.loadingBarService.value$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: number): void => {
			if(x === 100){
				this.loaded = true;
			}
		});
	}
	constructor(private loadingBarService: LoadingBarService, private regexpService: RegexpService, private xxhashService: XXhashService){
		this.checkLoading();
	}
	private async Fingerprint(): Promise<Fingerprint> {
		if((this.storedFingerprint === undefined) || (this.storedFingerprint.Fingerprint === undefined) || (this.storedFingerprint.RenderingEngine === undefined)){
			this.storedFingerprint = await this.fingerprint3();
			this.storedFingerprint.Fingerprint = await this.xxhashService.h64(this.storedFingerprint.Fingerprint);
			if((window.localStorage != null) && (localStorage.length > 0)){
				const x: string = localStorage.getItem('MonographiaClientID');
				if(this.regexpService.xxHashHex(x) === true){
					this.storedFingerprint.PreviousFingerprint = x;
				}
			}
			localStorage.setItem('MonographiaClientID', this.storedFingerprint.Fingerprint);
		}
		return(this.storedFingerprint);
	}
	private async fingerprint3(): Promise<Fingerprint> {
		return(new Promise((resolve) => {
			FingerprintJS.load().then((fp3: Agent): void => {
				fp3.get().then((x: GetResult): void => {
					const y = new UAParser();
					const o: Fingerprint = new Fingerprint();
					o.Fingerprint = stringify(x.components) + stringify(y.getResult());
					switch(y.getEngine().name){
						case 'Amaya':
							o.RenderingEngine = 'Amaya';
							break;
						case 'Blink':
							o.RenderingEngine = 'Blink';
							break;
						case 'EdgeHTML':
							o.RenderingEngine = 'EdgeHTML';
							break;
						case 'Gecko':
							o.RenderingEngine = 'Gecko';
							break;
						case 'Goanna':
							o.RenderingEngine = 'Goanna';
							break;
						case 'iCab':
							o.RenderingEngine = 'iCab';
							break;
						case 'KHTML':
							o.RenderingEngine = 'KHTML';
							break;
						case 'Links':
							o.RenderingEngine = 'Links';
							break;
						case 'Lynx':
							o.RenderingEngine = 'Lynx';
							break;
						case 'NetFront':
							o.RenderingEngine = 'NetFront';
							break;
						case 'NetSurf':
							o.RenderingEngine = 'NetSurf';
							break;
						case 'Presto':
							o.RenderingEngine = 'Presto';
							break;
						case 'Tasman':
							o.RenderingEngine = 'Tasman';
							break;
						case 'Trident':
							o.RenderingEngine = 'Trident';
							break;
						case 'w3m':
							o.RenderingEngine = 'w3m';
							break;
						case 'WebKit':
							o.RenderingEngine = 'WebKit';
							break;
					default:
							o.RenderingEngine = 'unknown'
					}
					resolve(o);
				});
			});
		}));
	}
	public async getFingerprint(): Promise<Fingerprint> {
		if(this.loaded === true){
			return(this.Fingerprint());
		} else if(await this.reCheck(60000) === true){
			return(this.Fingerprint());
		} else {
			console.error('Could not compute Fingerprint after 60 seconds!');
			return(new Fingerprint());
		}
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	private async reCheck(ms: number): Promise<boolean> {
		if(await this.timeout(100) === true){
			return(true);
		} else if((ms-100) < 0){
			return(false);
		} else {
			return(this.reCheck(ms-100));
		}
	}
	private timeout(ms: number): Promise<boolean> {
		return(new Promise(resolve => setTimeout(resolve, ms, this.loaded)));
	}
}
