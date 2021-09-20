/* imports from node_modules */
import { Component, Input } from '@angular/core';
/* imports from app */
import { PrimeNGTableBaseComponent } from '@monographia/PrimeNG/primeng-table-base/primeng-table-base.component';
import { PrimeNGTableBaseService } from '@monographia/PrimeNG/primeng-table-base/primeng-table-base.service';
@Component({
	selector: 'app-primeng-table',
	templateUrl: './primeng-table.component.html',
	styleUrls: ['./primeng-table.component.scss'],
	providers: [
		{
			provide: PrimeNGTableBaseService,
			useClass: PrimeNGTableBaseService
		}
	]
})
export class PrimeNGTableComponent extends PrimeNGTableBaseComponent {
	@Input() searchBox: boolean = false;
}
