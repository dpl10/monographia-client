import { TestBed, inject } from '@angular/core/testing';
import { StateManagerInsertUpdateService } from '@monographia/state-manager/state-manager-insert-update.service';
describe('StateManagerInsertUpdateService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [StateManagerInsertUpdateService]
		});
	});
	it('should be created', inject([StateManagerInsertUpdateService], (service: StateManagerInsertUpdateService) => {
		expect(service).toBeTruthy();
	}));
});
