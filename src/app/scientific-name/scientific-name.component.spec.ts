import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScientificNameComponent } from '@monographia/scientific-name/scientific-name.component';
describe('ScientificNameComponent', () => {
	let component: ScientificNameComponent;
	let fixture: ComponentFixture<ScientificNameComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ScientificNameComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(ScientificNameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
