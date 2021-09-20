import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUtilityComponent } from '@monographia/about-utility/about-utility.component';
describe('AboutUtilityComponent', () => {
	let component: AboutUtilityComponent;
	let fixture: ComponentFixture<AboutUtilityComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AboutUtilityComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(AboutUtilityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
