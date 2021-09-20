import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNGToolbarComponent } from '@monographia/PrimeNG/primeng-toolbar/primeng-toolbar.component';
describe('PrimeNGToolbarComponent', () => {
	let component: PrimeNGToolbarComponent;
	let fixture: ComponentFixture<PrimeNGToolbarComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PrimeNGToolbarComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(PrimeNGToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
