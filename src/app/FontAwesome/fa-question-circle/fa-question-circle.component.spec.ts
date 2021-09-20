/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
/* imports from app */
import { FaQuestionCircleComponent } from '@monographia/FontAwesome/fa-question-circle/fa-question-circle.component';
describe('FaQuestionCircleComponent', () => {
	let spectator: SpectatorWithHost<FaQuestionCircleComponent>;
	const createHost = createHostComponentFactory({
		component: FaQuestionCircleComponent,
		imports: [FontAwesomeModule]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-question-circle></app-fa-question-circle>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-fa-question-circle></app-fa-question-circle>`);
		expect('div').toExist();
	});
	it('should have class "iconContainer"', () => {
		spectator = createHost(`<app-fa-question-circle></app-fa-question-circle>`);
		expect('div').toHaveClass('iconContainer');
	});
	it('should be visible', () => {
		spectator = createHost(`<app-fa-question-circle></app-fa-question-circle>`);
		expect('div').toBeVisible();
	});
});
