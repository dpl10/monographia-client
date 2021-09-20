/* imports from node_modules */
import { EMPTY } from 'rxjs/internal/observable/empty';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from '@ngx-translate/core';
import { catchError, retry, takeUntil } from 'rxjs/operators';
/* imports from app */
import { AuthenticationService } from '@monographia/authentication.service';
@Injectable({
	providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor, OnDestroy {
	private ngUnsubscribe = new Subject();
	constructor(private authenticationService: AuthenticationService, private messageService: MessageService, private translateService: TranslateService){
	}
	public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return(next.handle(request).pipe(retry(2), catchError((error: HttpErrorResponse): Observable<HttpEvent<any>> => {
			if(error.error instanceof ErrorEvent){
				console.error('client or network AJAX error:', error.error.message, 'url:', request.urlWithParams);
				this.translateService.get('i18n.ajaxClientError').pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: string): void => {
					this.messageService.add({
						severity: 'error',
						summary: x,
						detail: error.error.message
					});
				});
			} else {
				if(error.status === 401){
					console.error('authentication error:', error.error.message, 'url:', request.urlWithParams);
					this.authenticationService.logoff();
				} else {
					console.error('server AJAX error code ' + error.status + ' from url "' + request.urlWithParams + '"');
					this.translateService.get('i18n.ajaxServerError', {
						value: error.status
					}).pipe(takeUntil(this.ngUnsubscribe)).subscribe((x: string): void => {
						this.messageService.add({
							detail: error.error,
							severity: 'error',
							summary: x
						});
					});
				}
			}
			return(EMPTY);
		})));
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
