/* imports from node_modules */
import { Pbf } from 'pbf';
import { Injectable } from '@angular/core';
/* imports from app */
import { FlattenService } from '@monographia/flatten.service';
import { XXhashService } from '@monographia/xxhash.service';
export class Filter {
	f: Uint32Array; /* Bloom filter */
	k: number; /* number of hash functions */
	m: number; /* number of bits in the filter */
}
export const FilterRaw = { /* manually created from the output of 'node_modules/pbf/bin/pbf src/app/bloom-filter.proto' */
	_readField: function(tag: number, obj: Filter, pbf: Pbf){
		if(tag === 1){
			pbf.readPackedFixed32(obj.f);
		} else if(tag === 2){
			obj.k = pbf.readVarint(true);
		} else if(tag === 3){
			obj.m = pbf.readVarint(true);
		}
	},
	read: function(pbf: Pbf, end?: number){
		return(pbf.readFields(this._readField, { /* using 'new Filter()' here would be best practice, but it fails */
			f: [],
			k: 0,
			m: 0
		}, end));
	}
};
@Injectable({
	providedIn: 'root'
})
export class BloomFilter {
	public async add(n: string, f: Filter): Promise<Filter> { /* based on Kirsch and Mitzenmache (2008; DOI 10.1002/rsa.20208) using just one 64-bit hash see http://willwhim.wpengine.com/2011/09/03/producing-n-hash-functions-by-hashing-only-once */
		const h: string = await this.xxhashService.h64(n);
		let hk: number = parseInt(h.substring(0, 8), 16)%f.m;
		const hb: number = parseInt(h.substring(8, 16), 16);
		for(let k = f.k-1; k >= 0; k--){
			if(hk < 0){
				f.f[Math.floor((hk+f.m)/32)] |= (1 << ((hk+f.m)%32));
			} else {
				f.f[Math.floor(hk/32)] |= (1 << (hk%32));
			}
			hk = (hk+hb)%f.m;
		}
		return(f);
	}
	constructor(private flattenService: FlattenService, private xxhashService: XXhashService){
	}
	public newFilter(n: number, p: number = 0.001): Filter {
		const f = new Filter();
		if(n > 4294967295){
			console.error('The number of elements included in the bloom filter (n = ' + n + ') is greater that 4,294,967,295; the filter may perform poorly.');
		}
		if((p > 0) && (p < 1)){
			f.m = Math.ceil((n*Math.log(p)) / Math.log(1/Math.pow(2, Math.log(2)))); /* number of bits in the filter; from https://hur.st/bloomfilter/ */
			f.k = Math.round((f.m/n)*Math.log(2)); /* number of hash functions; from https://hur.st/bloomfilter/ */
			f.m = Math.ceil(f.m/32)*32; /* rounded up to the next multiple of 32 */
			f.f = new Uint32Array(Math.ceil(f.m/32));
		}
		return(f);
	}
	public async query(q: string, bf: Filter): Promise<boolean> { /* based on Kirsch and Mitzenmache (2008; DOI 10.1002/rsa.20208) using just one 64-bit hash see http://willwhim.wpengine.com/2011/09/03/producing-n-hash-functions-by-hashing-only-once */
		const h: string = await this.xxhashService.h64(this.flattenService.flatten(q));
		let hk: number = parseInt(h.substring(0, 8), 16)%bf.m;
		const hb: number = parseInt(h.substring(8, 16), 16);
		for(let k = bf.k-1; k >= 0; k--){
			if(hk < 0){
				if((bf.f[Math.floor((hk+bf.m)/32)] & (1 << ((hk+bf.m)%32))) === 0){
					return(false);
				}
			} else {
				if((bf.f[Math.floor(hk/32)] & (1 << (hk%32))) === 0){
					return(false);
				}
			}
			hk = (hk+hb)%bf.m;
		}
		return(true);
	}
}
