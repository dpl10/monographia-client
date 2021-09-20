/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaUniversityEditComponent } from '@monographia/FontAwesome/fa-universityEdit/fa-universityEdit.component';
describe('FaUniversityEditComponent', () => {
	let spectator: SpectatorWithHost<FaUniversityEditComponent>;
	const createHost = createHostComponentFactory({
		component: FaUniversityEditComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-universityEdit></app-fa-universityEdit>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-universityEdit></app-fa-universityEdit>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-universityEdit></app-fa-universityEdit>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-universityEdit></app-fa-universityEdit>`);
		expect('div').toBeVisible();
	});
});
