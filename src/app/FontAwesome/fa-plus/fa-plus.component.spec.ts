/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaPlusComponent } from '@monographia/FontAwesome/fa-plus/fa-plus.component';
describe('FaPlusComponent', () => {
	let spectator: SpectatorWithHost<FaPlusComponent>;
	const createHost = createHostComponentFactory({
		component: FaPlusComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-plus></app-fa-plus>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-plus></app-fa-plus>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-plus></app-fa-plus>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-plus></app-fa-plus>`);
		expect('div').toBeVisible();
	});
});
