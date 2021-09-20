import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SyndicationComponent } from '@monographia/syndication.component';
describe('SyndicationComponent', () => {
	let component: SyndicationComponent;
	let fixture: ComponentFixture<SyndicationComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SyndicationComponent ]
		})
		.compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(SyndicationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
