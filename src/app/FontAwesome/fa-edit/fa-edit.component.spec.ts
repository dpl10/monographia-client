/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaEditComponent } from '@monographia/FontAwesome/fa-edit/fa-edit.component';
describe('FaEditComponent', () => {
	let spectator: SpectatorWithHost<FaEditComponent>;
	const createHost = createHostComponentFactory({
		component: FaEditComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-edit></app-fa-edit>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-edit></app-fa-edit>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-edit></app-fa-edit>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-edit></app-fa-edit>`);
		expect('div').toBeVisible();
	});
});
