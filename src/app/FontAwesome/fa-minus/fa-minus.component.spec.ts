/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaMinusComponent } from '@monographia/FontAwesome/fa-minus/fa-minus.component';
describe('FaMinusComponent', () => {
	let spectator: SpectatorWithHost<FaMinusComponent>;
	const createHost = createHostComponentFactory({
		component: FaMinusComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-minus></app-fa-minus>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-minus></app-fa-minus>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-minus></app-fa-minus>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-minus></app-fa-minus>`);
		expect('div').toBeVisible();
	});
});
