/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaTableComponent } from '@monographia/FontAwesome/fa-table/fa-table.component';
describe('FaTableComponent', () => {
	let spectator: SpectatorWithHost<FaTableComponent>;
	const createHost = createHostComponentFactory({
		component: FaTableComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-table></app-fa-table>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-table></app-fa-table>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-table></app-fa-table>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-table></app-fa-table>`);
		expect('div').toBeVisible();
	});
});
