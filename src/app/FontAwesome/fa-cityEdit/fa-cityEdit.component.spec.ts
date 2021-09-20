/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaCityEditComponent } from '@monographia/FontAwesome/fa-cityEdit/fa-cityEdit.component';
describe('FaCityEditComponent', () => {
	let spectator: SpectatorWithHost<FaCityEditComponent>;
	const createHost = createHostComponentFactory({
		component: FaCityEditComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-cityEdit></app-fa-cityEdit>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-cityEdit></app-fa-cityEdit>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-cityEdit></app-fa-cityEdit>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-cityEdit></app-fa-cityEdit>`);
		expect('div').toBeVisible();
	});
});
