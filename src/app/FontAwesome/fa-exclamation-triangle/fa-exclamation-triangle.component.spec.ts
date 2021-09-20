/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaExclamationTriangleComponent } from '@monographia/FontAwesome/fa-exclamation-triangle/fa-exclamation-triangle.component';
describe('FaExclamationTriangleComponent', () => {
	let spectator: SpectatorWithHost<FaExclamationTriangleComponent>;
	const createHost = createHostComponentFactory({
		component: FaExclamationTriangleComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-exclamation-triangle></app-fa-exclamation-triangle>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-exclamation-triangle></app-fa-exclamation-triangle>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-exclamation-triangle></app-fa-exclamation-triangle>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-exclamation-triangle></app-fa-exclamation-triangle>`);
		expect('div').toBeVisible();
	});
});
