/* imports from node_modules */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { auditTime, takeUntil } from 'rxjs/operators';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
export class WindowSize {
	height: number;
	width: number;
}
@Injectable({
	providedIn: 'root'
})
export class WindowSizeService implements OnDestroy {
	constructor(@Inject('windowObject') private window: Window){
		fromEvent(this.window, 'resize').pipe(auditTime(100), takeUntil(this.ngUnsubscribe)).subscribe((x: Event): void => {
			this.windowSizeData.next(this.windowSize());
		});
	};
	private ngUnsubscribe = new Subject();
	private windowSize(): WindowSize {
		return({
			width: this.window.innerWidth,
			height: this.window.innerHeight
		});
	}
	private windowSizeData: BehaviorSubject<WindowSize> = new BehaviorSubject(this.windowSize());
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	public windowSizeData$: Observable<WindowSize> = this.windowSizeData.asObservable();
}
