/* imports from node_modules */
import { Injectable } from '@angular/core';
/* imports from app */
import { RandomService } from '@monographia/random.service';
import { XXhashService } from '@monographia/xxhash.service';
@Injectable({
	providedIn: 'root'
})
export class RandomWrapperService {
	constructor(private randomService: RandomService, private xxhashService: XXhashService){
	}
	public async random(min: number = 0, max: number = 1, seed?: string): Promise<number> {
		if(seed == null){
			seed = new Date().toString();
		}
		const hwx: string = await this.xxhashService.h64(seed + ' w/x ' + seed.split('').reverse().join('-'));
		const hyz: string = await this.xxhashService.h64(seed + ' y/z ' + seed.split('').reverse().join(' '));
		return(this.randomService.sfc32(min, max, parseInt(hwx.substring(0, 8), 16), parseInt(hwx.substring(8, 16), 16), parseInt(hyz.substring(0, 8), 16), parseInt(hyz.substring(8, 16), 16)));
	}
}
