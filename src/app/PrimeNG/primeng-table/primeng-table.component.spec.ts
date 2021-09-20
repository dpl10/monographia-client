/* imports from node_modules */
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TableModule } from 'primeng/table';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { PrimeNGTableComponent } from '@monographia/PrimeNG/primeng-table/primeng-table.component';
describe('PrimeNGTableComponent', () => {
	let spectator: SpectatorWithHost<PrimeNGTableComponent>;
	const createHost = createHostComponentFactory({
		component: PrimeNGTableComponent,
		imports: [
			TableModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-primeng-table></app-primeng-table>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-primeng-table></app-primeng-table>`);
		expect('div').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-primeng-table></app-primeng-table>`);
		expect('div').toBeVisible();
	});
});
