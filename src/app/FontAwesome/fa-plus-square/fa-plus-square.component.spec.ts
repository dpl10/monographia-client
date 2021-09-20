/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaPlusSquareComponent } from '@monographia/FontAwesome/fa-plus-square/fa-plus-square.component';
describe('FaPlusSquareComponent', () => {
	let spectator: SpectatorWithHost<FaPlusSquareComponent>;
	const createHost = createHostComponentFactory({
		component: FaPlusSquareComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-plus-square></app-fa-plus-square>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-plus-square></app-fa-plus-square>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-plus-square></app-fa-plus-square>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-plus-square></app-fa-plus-square>`);
		expect('div').toBeVisible();
	});
});
