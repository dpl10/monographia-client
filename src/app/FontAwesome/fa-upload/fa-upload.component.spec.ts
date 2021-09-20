/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaUploadComponent } from '@monographia/FontAwesome/fa-upload/fa-upload.component';
describe('FaCloneComponent', () => {
	let spectator: SpectatorWithHost<FaUploadComponent>;
	const createHost = createHostComponentFactory({
		component: FaUploadComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-upload></app-fa-upload>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-upload></app-fa-upload>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-upload></app-fa-upload>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-upload></app-fa-upload>`);
		expect('div').toBeVisible();
	});
});
