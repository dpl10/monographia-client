/* imports from node_modules */
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class ObjectPropertyService {
	public hasProperty(o: object, p: string): boolean {
		if(o === undefined){
			return(false);
		} else if(o.constructor === Object){
			if(Object.keys(o).length === 0){
				return(false);
			} else {
				return(Object.prototype.hasOwnProperty.call(o, p));
			}
		} else {
			return(false);
		}
	}
}
