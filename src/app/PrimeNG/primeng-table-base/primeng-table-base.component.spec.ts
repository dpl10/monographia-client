import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNGTableBaseComponent } from '@monographia/PrimeNG/primeng-table-base/primeng-table-base.component';
describe('PrimeNGTableBaseComponent', () => {
	let component: PrimeNGTableBaseComponent;
	let fixture: ComponentFixture<PrimeNGTableBaseComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PrimeNGTableBaseComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(PrimeNGTableBaseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
