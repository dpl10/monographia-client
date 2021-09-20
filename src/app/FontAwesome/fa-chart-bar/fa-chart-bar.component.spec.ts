/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaChartBarComponent } from '@monographia/FontAwesome/fa-chart-bar/fa-chart-bar.component';
describe('FaCloneComponent', () => {
	let spectator: SpectatorWithHost<FaChartBarComponent>;
	const createHost = createHostComponentFactory({
		component: FaChartBarComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-chart-bar></app-fa-chart-bar>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-chart-bar></app-fa-chart-bar>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-chart-bar></app-fa-chart-bar>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-chart-bar></app-fa-chart-bar>`);
		expect('div').toBeVisible();
	});
});
