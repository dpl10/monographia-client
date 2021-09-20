/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaCityAddComponent } from '@monographia/FontAwesome/fa-cityAdd/fa-cityAdd.component';
describe('FaCityAddComponent', () => {
	let spectator: SpectatorWithHost<FaCityAddComponent>;
	const createHost = createHostComponentFactory({
		component: FaCityAddComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-cityAdd></app-fa-cityAdd>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-cityAdd></app-fa-cityAdd>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-cityAdd></app-fa-cityAdd>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-cityAdd></app-fa-cityAdd>`);
		expect('div').toBeVisible();
	});
});
