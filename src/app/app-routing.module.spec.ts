import { AppRoutingModule } from '@monographia/app-routing.module';
describe('AppRoutingModule', () => {
	let appRoutingModule: AppRoutingModule;
	beforeEach(() => {
		appRoutingModule = new AppRoutingModule();
	});
	it('should create an instance', () => {
		expect(appRoutingModule).toBeTruthy();
	});
});
