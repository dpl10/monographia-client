import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNGAutoCompleteComponent } from '@monographia/PrimeNG/primeng-autocomplete/primeng-autocomplete.component';
describe('PrimeNGAutoCompleteComponent', () => {
	let component: PrimeNGAutoCompleteComponent;
	let fixture: ComponentFixture<PrimeNGAutoCompleteComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PrimeNGAutoCompleteComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(PrimeNGAutoCompleteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
