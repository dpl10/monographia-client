import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NormalizedFormComponent } from '@monographia/normalized-form/normalized-form.component';
describe('NormalizedFormComponent', () => {
	let component: NormalizedFormComponent;
	let fixture: ComponentFixture<NormalizedFormComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NormalizedFormComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NormalizedFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
