/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaBookEditComponent } from '@monographia/FontAwesome/fa-bookEdit/fa-bookEdit.component';
describe('FaBookEditComponent', () => {
	let spectator: SpectatorWithHost<FaBookEditComponent>;
	const createHost = createHostComponentFactory({
		component: FaBookEditComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-bookEdit></app-fa-bookEdit>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-bookEdit></app-fa-bookEdit>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-bookEdit></app-fa-bookEdit>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-bookEdit></app-fa-bookEdit>`);
		expect('div').toBeVisible();
	});
});
