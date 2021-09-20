import { TestBed, inject } from '@angular/core/testing';
import { PrimeNGTableBaseService } from '@monographia/PrimeNG/primeng-table-base/primeng-table-base.service';
describe('PrimeNGTableBaseService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PrimeNGTableBaseService]
		});
	});
	it('should be created', inject([PrimeNGTableBaseService], (service: PrimeNGTableBaseService) => {
		expect(service).toBeTruthy();
	}));
});
