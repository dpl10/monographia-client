import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotConstructedComponent } from '@monographia/page-not-constructed/page-not-constructed.component';
describe('PageNotConstructedComponent', () => {
	let component: PageNotConstructedComponent;
	let fixture: ComponentFixture<PageNotConstructedComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PageNotConstructedComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(PageNotConstructedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
