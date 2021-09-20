/* imports from node_modules */
import { Injectable } from '@angular/core';
export class Quartile {
	protected static SInit = (() => {
		Quartile.prototype.Step = 1;
		Quartile.prototype.Tendency = 1;
	})();
	Quartile: number;
	Step: number;
	Tendency: -1|1;
}
export class Quartiles {
	protected static SInit = (() => {
		Quartiles.prototype.FirstQuartile = new Quartile();
		Quartiles.prototype.SecondQuartile = new Quartile();
		Quartiles.prototype.ThirdQuartile = new Quartile();
	})();
	FirstQuartile: Quartile;
	Samples: number;
	SecondQuartile: Quartile;
	ThirdQuartile: Quartile;
}
@Injectable({
	providedIn: 'root'
})
export class QuartilesService {
	constructor(){
	}
	private correctStep(d: number, q: Quartile): number {
		if(((q.Quartile-d)*q.Tendency < 0) && (q.Step > 1)){
			return(1);
		} else {
			return(q.Step);
		}
	}
	private decrement(d: number, q: Quartile): Quartile {
		q.Step += -1*q.Tendency;
		if(q.Step > 0){
			q.Quartile -= q.Step;
		} else {
			q.Quartile -= 1;
		}
		q.Tendency = -1;
		if(q.Quartile < d){
			q.Step += q.Quartile-d;
			q.Quartile = d;
		}
		q.Step = this.correctStep(d, q);
		return(q);
	}
	private increment(d: number, q: Quartile): Quartile {
		q.Step += q.Tendency;
		if(q.Step > 0){
			q.Quartile += q.Step;
		} else {
			q.Quartile += 1;
		}
		q.Tendency = 1;
		if(q.Quartile > d){
			q.Step += d-q.Quartile;
			q.Quartile = d;
		}
		q.Step = this.correctStep(d, q);
		return(q);
	}
	public initialize(d: number, n: number): Quartiles {
		const q = new Quartiles();
		q.FirstQuartile.Quartile = d;
		q.SecondQuartile.Quartile = d;
		q.ThirdQuartile.Quartile = d;
		q.Samples = n;
		return(q);
	}
	public quartiles(d: number, q: Quartiles): Quartiles { /* based on Ma, Muthukrishnan, and Sandler (2013; DOI:10.1007/978-3-642-40273-9_7) */
		if(d < q.SecondQuartile.Quartile){
			if(d < q.FirstQuartile.Quartile){
				q.FirstQuartile = this.decrement(d, q.FirstQuartile);
			} else if(d > q.FirstQuartile.Quartile){
				q.FirstQuartile = this.increment(d, q.FirstQuartile);
			}
			q.SecondQuartile = this.decrement(d, q.SecondQuartile);
		} else if(d > q.SecondQuartile.Quartile){
			q.SecondQuartile = this.increment(d, q.SecondQuartile);
			if(d < q.ThirdQuartile.Quartile){
				q.ThirdQuartile = this.decrement(d, q.ThirdQuartile);
			} else if(d > q.ThirdQuartile.Quartile){
				q.ThirdQuartile = this.increment(d, q.ThirdQuartile);
			}
		}
		q.Samples++;
		return(q);
	}
}
