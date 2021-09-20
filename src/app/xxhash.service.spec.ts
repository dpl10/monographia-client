import { TestBed } from '@angular/core/testing';
import { XXhashService } from '@monographia/xxhash.service';
describe('XXhashService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	it('should be created', () => {
		const service: XXhashService = TestBed.inject(XXhashService);
		expect(service).toBeTruthy();
	});
});
