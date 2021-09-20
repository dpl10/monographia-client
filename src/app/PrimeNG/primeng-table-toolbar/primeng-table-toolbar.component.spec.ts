import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNGTableToolbarComponent } from '@monographia/PrimeNG/primeng-table-toolbar/primeng-table-toolbar.component';
describe('PrimeNGTableToolbarComponent', () => {
	let component: PrimeNGTableToolbarComponent;
	let fixture: ComponentFixture<PrimeNGTableToolbarComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PrimeNGTableToolbarComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(PrimeNGTableToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
