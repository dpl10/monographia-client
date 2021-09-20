import { TestBed } from '@angular/core/testing';
import { QuartilesService } from '@monographia/quartiles.service';
describe('QuartilesService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	it('should be created', () => {
		const service: QuartilesService = TestBed.inject(QuartilesService);
		expect(service).toBeTruthy();
	});
});
