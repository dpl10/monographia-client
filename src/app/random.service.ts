/**
requires large 8+ digit seeds to be useful
use random-wrapper.service to seed
based on https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
*/
/* imports from node_modules */
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class RandomService {
	constructor(){
	}
	public sfc32(min: number = 0, max: number = 1, w: number, x: number, y: number, z: number): number {
		if(min > max){
			min = 0;
			max = 1;
		}
		w >>>= 0;
		x >>>= 0;
		y >>>= 0;
		z >>>= 0;
		let r: number = (w+x) | 0;
		w = x^x >>> 9;
		x = y+(y << 3) | 0;
		y = (y << 21 | y >>> 11);
		z = z+1 | 0;
		r = r+z | 0;
		y = y+r | 0;
		return(Math.trunc(min+(((r >>> 0)/4294967295)*(max-min))));
	}
}
