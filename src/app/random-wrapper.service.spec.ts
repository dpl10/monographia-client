import { TestBed } from '@angular/core/testing';
import { RandomWrapperService } from '@monographia/random-wrapper.service';
describe('RandomWrapperService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	it('should be created', () => {
		const service: RandomWrapperService = TestBed.inject(RandomWrapperService);
		expect(service).toBeTruthy();
	});
});
