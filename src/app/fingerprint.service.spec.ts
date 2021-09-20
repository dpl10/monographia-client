import { TestBed } from '@angular/core/testing';
import { FingerprintService } from '@monographia/fingerprint.service';
describe('FingerprintService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	it('should be created', () => {
		const service: FingerprintService = TestBed.inject(FingerprintService);
		expect(service).toBeTruthy();
	});
});
