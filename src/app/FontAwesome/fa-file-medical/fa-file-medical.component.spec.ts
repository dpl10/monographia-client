/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaFileMedicalComponent } from '@monographia/FontAwesome/fa-file-medical/fa-file-medical.component';
describe('FaFileMedicalComponent', () => {
	let spectator: SpectatorWithHost<FaFileMedicalComponent>;
	const createHost = createHostComponentFactory({
		component: FaFileMedicalComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-file-medical></app-fa-file-medical>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-file-medical></app-fa-file-medical>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-file-medical></app-fa-file-medical>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-file-medical></app-fa-file-medical>`);
		expect('div').toBeVisible();
	});
});
