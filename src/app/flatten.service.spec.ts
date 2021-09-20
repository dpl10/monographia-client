import { TestBed } from '@angular/core/testing';
import { FlattenService } from '@monographia/flatten.service';
describe('FlattenService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	it('should be created', () => {
		const service: FlattenService = TestBed.inject(FlattenService);
		expect(service).toBeTruthy();
	});
});
