/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaSaveComponent } from '@monographia/FontAwesome/fa-save/fa-save.component';
describe('FaSaveComponent', () => {
	let spectator: SpectatorWithHost<FaSaveComponent>;
	const createHost = createHostComponentFactory({
		component: FaSaveComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-save></app-fa-save>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-save></app-fa-save>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-save></app-fa-save>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-save></app-fa-save>`);
		expect('div').toBeVisible();
	});
});
