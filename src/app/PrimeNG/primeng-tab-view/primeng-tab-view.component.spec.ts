import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimengTabViewComponent } from '@monographia/PrimeNG/primeng-tab-view/primeng-tab-view.component';
describe('PrimengTabViewComponent', () => {
	let component: PrimengTabViewComponent;
	let fixture: ComponentFixture<PrimengTabViewComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PrimengTabViewComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(PrimengTabViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
