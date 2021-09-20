/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaFileSignatureComponent } from '@monographia/FontAwesome/fa-file-signature/fa-file-signature.component';
describe('FaFileSignatureComponent', () => {
	let spectator: SpectatorWithHost<FaFileSignatureComponent>;
	const createHost = createHostComponentFactory({
		component: FaFileSignatureComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-file-signature></app-fa-file-signature>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-file-signature></app-fa-file-signature>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-file-signature></app-fa-file-signature>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-file-signature></app-fa-file-signature>`);
		expect('div').toBeVisible();
	});
});
