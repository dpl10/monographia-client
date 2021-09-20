/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaExpandArrowsAltComponent } from '@monographia/FontAwesome/fa-expand-arrows-alt/fa-expand-arrows-alt.component';
describe('FaCloneComponent', () => {
	let spectator: SpectatorWithHost<FaExpandArrowsAltComponent>;
	const createHost = createHostComponentFactory({
		component: FaExpandArrowsAltComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-expand-arrows-alt></app-fa-expand-arrows-alt>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-expand-arrows-alt></app-fa-expand-arrows-alt>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-expand-arrows-alt></app-fa-expand-arrows-alt>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-expand-arrows-alt></app-fa-expand-arrows-alt>`);
		expect('div').toBeVisible();
	});
});
