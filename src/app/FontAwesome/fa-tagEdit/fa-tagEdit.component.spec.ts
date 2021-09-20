/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaTagEditComponent } from '@monographia/FontAwesome/fa-tagEdit/fa-tagEdit.component';
describe('FaTagEditComponent', () => {
	let spectator: SpectatorWithHost<FaTagEditComponent>;
	const createHost = createHostComponentFactory({
		component: FaTagEditComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-tagEdit></app-fa-tagEdit>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-tagEdit></app-fa-tagEdit>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-tagEdit></app-fa-tagEdit>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-tagEdit></app-fa-tagEdit>`);
		expect('div').toBeVisible();
	});
});
