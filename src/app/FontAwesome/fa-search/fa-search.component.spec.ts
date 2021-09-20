/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaSearchComponent } from '@monographia/FontAwesome/fa-search/fa-search.component';
describe('FaSearchComponent', () => {
	let spectator: SpectatorWithHost<FaSearchComponent>;
	const createHost = createHostComponentFactory({
		component: FaSearchComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-search></app-fa-search>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-search></app-fa-search>`);
		expect('div').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-search></app-fa-search>`);
		expect('div').toBeVisible();
	});
});
