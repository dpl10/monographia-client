/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaUserEditComponent } from '@monographia/FontAwesome/fa-user-edit/fa-user-edit.component';
describe('FaUserEditComponent', () => {
	let spectator: SpectatorWithHost<FaUserEditComponent>;
	const createHost = createHostComponentFactory({
		component: FaUserEditComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-user-edit></app-fa-user-edit>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-user-edit></app-fa-user-edit>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-user-edit></app-fa-user-edit>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-user-edit></app-fa-user-edit>`);
		expect('div').toBeVisible();
	});
});
