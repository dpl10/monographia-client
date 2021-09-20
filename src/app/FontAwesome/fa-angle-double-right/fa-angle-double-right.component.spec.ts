/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaAngleDoubleRightComponent } from '@monographia/FontAwesome/fa-angle-double-right/fa-angle-double-right.component';
describe('FaAngleDoubleRightComponent', () => {
	let spectator: SpectatorWithHost<FaAngleDoubleRightComponent>;
	const createHost = createHostComponentFactory({
		component: FaAngleDoubleRightComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-angle-double-right></app-fa-angle-double-right>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-angle-double-right></app-fa-angle-double-right>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-angle-double-right></app-fa-angle-double-right>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-angle-double-right></app-fa-angle-double-right>`);
		expect('div').toBeVisible();
	});
});
