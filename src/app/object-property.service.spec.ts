import { TestBed, inject } from '@angular/core/testing';
import { ObjectPropertyService } from '@monographia/object-property.service';
describe('ObjectPropertyService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ObjectPropertyService]
		});
	});
	it('should be created', inject([ObjectPropertyService], (service: ObjectPropertyService) => {
		expect(service).toBeTruthy();
	}));
});
