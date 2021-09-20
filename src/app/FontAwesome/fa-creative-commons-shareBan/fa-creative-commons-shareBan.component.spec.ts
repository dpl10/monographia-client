/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaCreativeCommonsShareBanComponent } from '@monographia/FontAwesome/fa-creative-commons-shareBan/fa-creative-commons-shareBan.component';
describe('FaCreativeCommonsShareBanComponent', () => {
	let spectator: SpectatorWithHost<FaCreativeCommonsShareBanComponent>;
	const createHost = createHostComponentFactory({
		component: FaCreativeCommonsShareBanComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-creative-commons-shareBan></app-fa-creative-commons-shareBan>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-creative-commons-shareBan></app-fa-creative-commons-shareBan>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-creative-commons-shareBan></app-fa-creative-commons-shareBan>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-creative-commons-shareBan></app-fa-creative-commons-shareBan>`);
		expect('div').toBeVisible();
	});
});
