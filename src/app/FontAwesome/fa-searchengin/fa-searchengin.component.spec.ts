/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaSearchenginComponent } from '@monographia/FontAwesome/fa-searchengin/fa-searchengin.component';
describe('FaSearchenginComponent', () => {
	let spectator: SpectatorWithHost<FaSearchenginComponent>;
	const createHost = createHostComponentFactory({
		component: FaSearchenginComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-searchengin></app-fa-searchengin>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-searchengin></app-fa-searchengin>`);
		expect('div').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-searchengin></app-fa-searchengin>`);
		expect('div').toBeVisible();
	});
});
