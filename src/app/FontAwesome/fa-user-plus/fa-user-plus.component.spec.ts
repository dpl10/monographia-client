/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaUserPlusComponent } from '@monographia/FontAwesome/fa-user-plus/fa-user-plus.component';
describe('FaUserPlusComponent', () => {
	let spectator: SpectatorWithHost<FaUserPlusComponent>;
	const createHost = createHostComponentFactory({
		component: FaUserPlusComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-user-plus></app-fa-user-plus>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-user-plus></app-fa-user-plus>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-user-plus></app-fa-user-plus>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-user-plus></app-fa-user-plus>`);
		expect('div').toBeVisible();
	});
});
