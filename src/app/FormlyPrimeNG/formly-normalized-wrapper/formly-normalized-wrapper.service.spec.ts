import { TestBed, inject } from '@angular/core/testing';
import { FormlyNormalizedWrapperService } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.service';
describe('FormlyNormalizedWrapperService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FormlyNormalizedWrapperService]
		});
	});
	it('should be created', inject([FormlyNormalizedWrapperService], (service: FormlyNormalizedWrapperService) => {
		expect(service).toBeTruthy();
	}));
});
