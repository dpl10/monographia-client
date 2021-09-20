/* imports from node_modules */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* imports from app */
import { AuthenticationGuardService } from '@monographia/authentication-guard.service';
import { LiteratureComponent } from '@monographia/literature/literature.component';
import { MonographiaComponent } from '@monographia/monographia/monographia.component';
import { OutputComponent } from '@monographia/output/output.component';
import { PageNotConstructedComponent } from '@monographia/page-not-constructed/page-not-constructed.component';
import { PageNotFoundComponent } from '@monographia/page-not-found/page-not-found.component';
import { SyndicationComponent } from '@monographia/syndication/syndication.component';
import { UtilityComponent } from '@monographia/utility/utility.component';
export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/monographia'
	}, {
		component: PageNotConstructedComponent,
		path: 'acknowledgment',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'character',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'classification',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'collection',
		pathMatch: 'full'
	}, {
		component: PageNotConstructedComponent,
		path: 'faq',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: LiteratureComponent,
		path: 'literature',
		pathMatch: 'full'
	}, {
		component: PageNotConstructedComponent,
		path: 'logon',
		pathMatch: 'full'
	}, {
		component: MonographiaComponent,
		path: 'monographia',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'multimedia',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'observation',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: OutputComponent,
		path: 'output',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'profile',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'project',
		pathMatch: 'full'
	}, {
		component: PageNotConstructedComponent,
		path: 'schema',
		pathMatch: 'full'
	}, {
		component: PageNotConstructedComponent,
		path: 'showcase',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'specimen',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: SyndicationComponent,
		path: 'syndication',
		pathMatch: 'full'
	}, {
		canActivate: [AuthenticationGuardService],
		component: PageNotConstructedComponent,
		path: 'taxonomy',
		pathMatch: 'full'
	}, {
		component: UtilityComponent,
		path: 'utility',
		pathMatch: 'full'
	}, {
		component: PageNotConstructedComponent,
		path: 'wiki',
		pathMatch: 'full'
	}, {
		component: PageNotFoundComponent,
		path: '**'
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
