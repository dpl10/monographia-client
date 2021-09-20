/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaAngleDoubleDownComponent } from '@monographia/FontAwesome/fa-angle-double-down/fa-angle-double-down.component';
describe('FaAngleDoubleDownComponent', () => {
	let spectator: SpectatorWithHost<FaAngleDoubleDownComponent>;
	const createHost = createHostComponentFactory({
		component: FaAngleDoubleDownComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-angle-double-down></app-fa-angle-double-down>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-angle-double-down></app-fa-angle-double-down>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-angle-double-down></app-fa-angle-double-down>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-angle-double-down></app-fa-angle-double-down>`);
		expect('div').toBeVisible();
	});
});
