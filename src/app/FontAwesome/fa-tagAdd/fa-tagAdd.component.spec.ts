/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaTagAddComponent } from '@monographia/FontAwesome/fa-tagAdd/fa-tagAdd.component';
describe('FaTagAddComponent', () => {
	let spectator: SpectatorWithHost<FaTagAddComponent>;
	const createHost = createHostComponentFactory({
		component: FaTagAddComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-tagAdd></app-fa-tagAdd>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-tagAdd></app-fa-tagAdd>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-tagAdd></app-fa-tagAdd>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-tagAdd></app-fa-tagAdd>`);
		expect('div').toBeVisible();
	});
});
