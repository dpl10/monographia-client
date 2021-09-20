/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaCloneComponent } from '@monographia/FontAwesome/fa-clone/fa-clone.component';
describe('FaCloneComponent', () => {
	let spectator: SpectatorWithHost<FaCloneComponent>;
	const createHost = createHostComponentFactory({
		component: FaCloneComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-clone></app-fa-clone>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-clone></app-fa-clone>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-clone></app-fa-clone>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-clone></app-fa-clone>`);
		expect('div').toBeVisible();
	});
});
