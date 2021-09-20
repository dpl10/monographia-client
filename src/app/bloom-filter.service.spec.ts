import { TestBed } from '@angular/core/testing';
import { BloomFilter } from '@monographia/bloom-filter.service';
describe('BloomFilterService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	it('should be created', () => {
		const service: BloomFilter = TestBed.inject(BloomFilter);
		expect(service).toBeTruthy();
	});
});
