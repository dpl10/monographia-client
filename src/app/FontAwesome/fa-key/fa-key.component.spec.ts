/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaKeyComponent } from '@monographia/FontAwesome/fa-key/fa-key.component';
describe('FaCloneComponent', () => {
	let spectator: SpectatorWithHost<FaKeyComponent>;
	const createHost = createHostComponentFactory({
		component: FaKeyComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-key></app-fa-key>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-key></app-fa-key>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-key></app-fa-key>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-key></app-fa-key>`);
		expect('div').toBeVisible();
	});
});
