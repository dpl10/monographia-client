/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaUniversityAddComponent } from '@monographia/FontAwesome/fa-universityAdd/fa-universityAdd.component';
describe('FaUniversityAddComponent', () => {
	let spectator: SpectatorWithHost<FaUniversityAddComponent>;
	const createHost = createHostComponentFactory({
		component: FaUniversityAddComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-universityAdd></app-fa-universityAdd>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-universityAdd></app-fa-universityAdd>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-universityAdd></app-fa-universityAdd>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-universityAdd></app-fa-universityAdd>`);
		expect('div').toBeVisible();
	});
});
