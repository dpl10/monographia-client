import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GeographyComponent } from '@monographia/geography/geography.component';
describe('GeographyComponent', () => {
	let component: GeographyComponent;
	let fixture: ComponentFixture<GeographyComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ GeographyComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(GeographyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
