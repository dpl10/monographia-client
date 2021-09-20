/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaBookAddComponent } from '@monographia/FontAwesome/fa-bookAdd/fa-bookAdd.component';
describe('FaBookAddComponent', () => {
	let spectator: SpectatorWithHost<FaBookAddComponent>;
	const createHost = createHostComponentFactory({
		component: FaBookAddComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-bookAdd></app-fa-bookAdd>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-bookAdd></app-fa-bookAdd>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-bookAdd></app-fa-bookAdd>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-bookAdd></app-fa-bookAdd>`);
		expect('div').toBeVisible();
	});
});
