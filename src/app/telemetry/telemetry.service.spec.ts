import { TestBed } from '@angular/core/testing';
import { TelemetryService } from '@monographia/telemetry.service';
describe('TelemetryService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	it('should be created', () => {
		const service: TelemetryService = TestBed.inject(TelemetryService);
		expect(service).toBeTruthy();
	});
});
