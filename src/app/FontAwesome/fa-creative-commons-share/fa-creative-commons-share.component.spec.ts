/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaCreativeCommonsShareComponent } from '@monographia/FontAwesome/fa-creative-commons-share/fa-creative-commons-share.component';
describe('FaCreativeCommonsShareComponent', () => {
	let spectator: SpectatorWithHost<FaCreativeCommonsShareComponent>;
	const createHost = createHostComponentFactory({
		component: FaCreativeCommonsShareComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-creative-commons-share></app-fa-creative-commons-share>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-creative-commons-share></app-fa-creative-commons-share>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-creative-commons-share></app-fa-creative-commons-share>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-creative-commons-share></app-fa-creative-commons-share>`);
		expect('div').toBeVisible();
	});
});
