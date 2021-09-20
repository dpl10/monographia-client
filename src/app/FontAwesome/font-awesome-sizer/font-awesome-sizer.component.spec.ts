import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeSizerComponent } from '@monographia/FontAwesome/font-awesome-sizer/font-awesome-sizer.component';
describe('FontAwesomeSizerComponent', () => {
	let component: FontAwesomeSizerComponent;
	let fixture: ComponentFixture<FontAwesomeSizerComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FontAwesomeSizerComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(FontAwesomeSizerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
