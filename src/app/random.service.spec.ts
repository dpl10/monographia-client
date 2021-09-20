import { TestBed } from '@angular/core/testing';
import { RandomService } from '@monographia/random.service';
describe('RandomService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	it('should be created', () => {
		const service: RandomService = TestBed.inject(RandomService);
		expect(service).toBeTruthy();
	});
});
