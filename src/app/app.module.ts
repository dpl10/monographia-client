/* imports from node_modules */
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton'; // not used yet!
import { ToolbarModule } from 'primeng/toolbar';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
/* imports from app */
import { AboutUtilityComponent } from '@monographia/about-utility/about-utility.component';
import { AppComponent } from '@monographia/app.component';
import { AppRoutingModule } from '@monographia/app-routing.module';
import { DateTimeService } from '@monographia/date-time.service';
import { FaAngleDoubleDownComponent } from '@monographia/FontAwesome/fa-angle-double-down/fa-angle-double-down.component';
import { FaAngleDoubleRightComponent } from '@monographia/FontAwesome/fa-angle-double-right/fa-angle-double-right.component';
import { FaBookAddComponent } from '@monographia/FontAwesome/fa-bookAdd/fa-bookAdd.component';
import { FaBookEditComponent } from '@monographia/FontAwesome/fa-bookEdit/fa-bookEdit.component';
import { FaChartBarComponent } from '@monographia/FontAwesome/fa-chart-bar/fa-chart-bar.component';
import { FaCityAddComponent } from '@monographia/FontAwesome/fa-cityAdd/fa-cityAdd.component';
import { FaCityEditComponent } from '@monographia/FontAwesome/fa-cityEdit/fa-cityEdit.component';
import { FaCloneComponent } from '@monographia/FontAwesome/fa-clone/fa-clone.component';
import { FaCreativeCommonsShareBanComponent } from '@monographia/FontAwesome/fa-creative-commons-shareBan/fa-creative-commons-shareBan.component';
import { FaCreativeCommonsShareComponent } from '@monographia/FontAwesome/fa-creative-commons-share/fa-creative-commons-share.component';
import { FaEditComponent } from '@monographia/FontAwesome/fa-edit/fa-edit.component';
import { FaExclamationTriangleComponent } from '@monographia/FontAwesome/fa-exclamation-triangle/fa-exclamation-triangle.component';
import { FaExpandArrowsAltComponent } from '@monographia/FontAwesome/fa-expand-arrows-alt/fa-expand-arrows-alt.component';
import { FaFileMedicalComponent } from '@monographia/FontAwesome/fa-file-medical/fa-file-medical.component';
import { FaFileSignatureComponent } from '@monographia/FontAwesome/fa-file-signature/fa-file-signature.component';
import { FaKeyComponent } from '@monographia/FontAwesome/fa-key/fa-key.component';
import { FaMinusComponent } from '@monographia/FontAwesome/fa-minus/fa-minus.component';
import { FaPlusComponent } from '@monographia/FontAwesome/fa-plus/fa-plus.component';
import { FaPlusSquareComponent } from '@monographia/FontAwesome/fa-plus-square/fa-plus-square.component';
import { FaQuestionCircleComponent } from '@monographia/FontAwesome/fa-question-circle/fa-question-circle.component';
import { FaSaveComponent } from '@monographia/FontAwesome/fa-save/fa-save.component';
import { FaSearchComponent } from '@monographia/FontAwesome/fa-search/fa-search.component';
import { FaSearchenginComponent } from '@monographia/FontAwesome/fa-searchengin/fa-searchengin.component';
import { FaTableComponent } from '@monographia/FontAwesome/fa-table/fa-table.component';
import { FaTagAddComponent } from '@monographia/FontAwesome/fa-tagAdd/fa-tagAdd.component';
import { FaTagEditComponent } from '@monographia/FontAwesome/fa-tagEdit/fa-tagEdit.component';
import { FaUniversityAddComponent } from '@monographia/FontAwesome/fa-universityAdd/fa-universityAdd.component';
import { FaUniversityEditComponent } from '@monographia/FontAwesome/fa-universityEdit/fa-universityEdit.component';
import { FaUploadComponent } from '@monographia/FontAwesome/fa-upload/fa-upload.component';
import { FaUserEditComponent } from '@monographia/FontAwesome/fa-user-edit/fa-user-edit.component';
import { FaUserPlusComponent } from '@monographia/FontAwesome/fa-user-plus/fa-user-plus.component';
import { FingerprintService } from '@monographia/fingerprint.service';
import { FontAwesomeSizerComponent } from '@monographia/FontAwesome/font-awesome-sizer/font-awesome-sizer.component';
import { FormlyCalendarComponent } from '@monographia/FormlyPrimeNG/formly-calendar/formly-calendar.component';
import { FormlyDropdownComponent } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.component';
import { FormlyEditorComponent } from '@monographia/FormlyPrimeNG/formly-editor/formly-editor.component';
import { FormlyInputtextComponent } from '@monographia/FormlyPrimeNG/formly-inputtext/formly-inputtext.component';
import { FormlyMaskComponent } from '@monographia/FormlyPrimeNG/formly-mask/formly-mask.component';
import { FormlyNormalizedDropdownComponent } from '@monographia/FormlyPrimeNG/formly-normalized-dropdown/formly-normalized-dropdown.component';
import { FormlyNormalizedDropdownWrapperComponent } from '@monographia/FormlyPrimeNG/formly-normalized-dropdown-wrapper/formly-normalized-dropdown-wrapper.component';
import { FormlyNormalizedRepeatComponent } from '@monographia/FormlyPrimeNG/formly-normalized-repeat/formly-normalized-repeat.component';
import { FormlyNormalizedSidebarComponent } from '@monographia/FormlyPrimeNG/formly-normalized-sidebar/formly-normalized-sidebar.component';
import { FormlyNormalizedWrapperComponent } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.component';
import { FormlyRepeatComponent } from '@monographia/FormlyPrimeNG/formly-repeat/formly-repeat.component';
import { FormlySelectbuttonComponent } from '@monographia/FormlyPrimeNG/formly-selectbutton/formly-selectbutton.component';
import { FormlySubnormalizedUnderbarComponent } from '@monographia/FormlyPrimeNG/formly-subnormalized-underbar/formly-subnormalized-underbar.component';
import { FormlySubnormalizedWrapperComponent } from '@monographia/FormlyPrimeNG/formly-subnormalized-wrapper/formly-subnormalized-wrapper.component';
import { FormlyTogglebuttonComponent } from '@monographia/FormlyPrimeNG/formly-togglebutton/formly-togglebutton.component'; // not used yet!
import { FormlyWrapperComponent } from '@monographia/FormlyPrimeNG/formly-wrapper/formly-wrapper.component';
import { GeographyComponent } from '@monographia/geography/geography.component';
import { HttpErrorInterceptorService } from '@monographia/http-error-interceptor.service';
import { InMemoryDataService } from '@monographia/in-memory-data.service';
import { LiteratureComponent } from '@monographia/literature/literature.component';
import { MessageComponent } from '@monographia/message/message.component';
import { MonographiaComponent } from '@monographia/monographia/monographia.component';
import { NormalizedFormComponent } from '@monographia/normalized-form/normalized-form.component';
import { ObjectPropertyService } from '@monographia/object-property.service';
import { OutputComponent } from '@monographia/output/output.component';
import { PageNotConstructedComponent } from '@monographia/page-not-constructed/page-not-constructed.component';
import { PageNotFoundComponent } from '@monographia/page-not-found/page-not-found.component';
import { PrimeNGAutoCompleteComponent } from '@monographia/PrimeNG/primeng-autocomplete/primeng-autocomplete.component';
import { PrimeNGTableBaseComponent } from '@monographia/PrimeNG/primeng-table-base/primeng-table-base.component';
import { PrimeNGTableComponent } from '@monographia/PrimeNG/primeng-table/primeng-table.component';
import { PrimeNGTableToolbarComponent } from '@monographia/PrimeNG/primeng-table-toolbar/primeng-table-toolbar.component';
import { PrimeNGToolbarComponent } from '@monographia/PrimeNG/primeng-toolbar/primeng-toolbar.component';
import { PrimengTabViewComponent } from '@monographia/PrimeNG/primeng-tab-view/primeng-tab-view.component';
import { PublicationComponent } from '@monographia/data-handler/publication/publication.component';
import { RegexpService } from '@monographia/regexp.service';
import { ScientificNameComponent } from '@monographia/scientific-name/scientific-name.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StateManager } from '@monographia/state-manager/state-manager.state';
import { SyndicationComponent } from '@monographia/syndication/syndication.component';
import { TelemetryService } from '@monographia/telemetry/telemetry.service';
import { UtilityComponent } from '@monographia/utility/utility.component';
import { WindowSizeService } from '@monographia/window-size.service';
import { XXhashService } from '@monographia/xxhash.service';
import { environment } from '@monographiaEnvironments/environment';
/* ngx-translate for AoT */
export function HttpLoaderFactory(http: HttpClient){
	return(new TranslateHttpLoader(http, './assets/i18n/', '.json'));
}
/* module */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AboutUtilityComponent,
		AppComponent,
		FaAngleDoubleDownComponent,
		FaAngleDoubleRightComponent,
		FaBookAddComponent,
		FaBookEditComponent,
		FaChartBarComponent,
		FaCityAddComponent,
		FaCityEditComponent,
		FaCloneComponent,
		FaCreativeCommonsShareBanComponent,
		FaCreativeCommonsShareComponent,
		FaEditComponent,
		FaExclamationTriangleComponent,
		FaExpandArrowsAltComponent,
		FaFileMedicalComponent,
		FaFileSignatureComponent,
		FaKeyComponent,
		FaMinusComponent,
		FaPlusComponent,
		FaPlusSquareComponent,
		FaQuestionCircleComponent,
		FaSaveComponent,
		FaSearchComponent,
		FaSearchenginComponent,
		FaTableComponent,
		FaTagAddComponent,
		FaTagEditComponent,
		FaUniversityAddComponent,
		FaUniversityEditComponent,
		FaUploadComponent,
		FaUserEditComponent,
		FaUserPlusComponent,
		FontAwesomeSizerComponent,
		FormlyCalendarComponent,
		FormlyDropdownComponent,
		FormlyEditorComponent,
		FormlyInputtextComponent,
		FormlyMaskComponent,
		FormlyNormalizedDropdownComponent,
		FormlyNormalizedDropdownWrapperComponent,
		FormlyNormalizedRepeatComponent,
		FormlyNormalizedSidebarComponent,
		FormlyNormalizedWrapperComponent,
		FormlyRepeatComponent,
		FormlySelectbuttonComponent,
		FormlySubnormalizedUnderbarComponent,
		FormlySubnormalizedWrapperComponent,
		FormlyTogglebuttonComponent,
		FormlyWrapperComponent,
		GeographyComponent,
		LiteratureComponent,
		MessageComponent,
		MonographiaComponent,
		NormalizedFormComponent,
		OutputComponent,
		PageNotConstructedComponent,
		PageNotFoundComponent,
		PrimeNGAutoCompleteComponent,
		PrimeNGTableBaseComponent,
		PrimeNGTableComponent,
		PrimeNGTableToolbarComponent,
		PrimeNGToolbarComponent,
		PrimengTabViewComponent,
		PublicationComponent,
		ScientificNameComponent,
		SyndicationComponent,
		UtilityComponent
	],
	imports: [
		AppRoutingModule,
		AutoCompleteModule,
		BrowserAnimationsModule,
		BrowserModule,
		ButtonModule,
		CalendarModule,
		DropdownModule,
		EditorModule,
		FontAwesomeModule,
		FormlyModule.forRoot({
			types: [
				{
					name: 'date',
					component: FormlyCalendarComponent,
					wrappers: ['formly-wrapper']
				}, {
					name: 'dropdown',
					component: FormlyDropdownComponent,
					wrappers: ['formly-wrapper']
				}, {
					name: 'editorHTML',
					component: FormlyEditorComponent,
					wrappers: ['formly-wrapper']
				}, {
					name: 'inputmask',
					component: FormlyMaskComponent,
					wrappers: ['formly-wrapper']
				}, {
					name: 'inputtext',
					component: FormlyInputtextComponent,
					wrappers: ['formly-wrapper']
				}, {
					name: 'normalized-dropdown',
					component: FormlyNormalizedDropdownComponent,
					wrappers: ['formly-wrapper', 'formly-normalized-wrapper', 'formly-normalized-dropdown-wrapper']
				}, {
					name: 'subnormalized-dropdown',
					component: FormlyNormalizedDropdownComponent,
					wrappers: ['formly-wrapper', 'formly-subnormalized-wrapper', 'formly-normalized-dropdown-wrapper']
				}, {
					name: 'normalized-repeat',
					component: FormlyNormalizedRepeatComponent,
					wrappers: ['formly-wrapper', 'formly-normalized-wrapper']
				}, {
					name: 'normalized-repeat-dropdown',
					component: FormlyNormalizedDropdownComponent,
					wrappers: []
				}, {
					name: 'repeat-unit',
					component: FormlyRepeatComponent,
					wrappers: ['formly-wrapper']
				}, {
					name: 'selectbutton',
					component: FormlySelectbuttonComponent,
					wrappers: ['formly-wrapper']
				}, {
					name: 'togglebutton',
					component: FormlyTogglebuttonComponent,
					wrappers: ['formly-wrapper']
				}
			],
			validators: [],
			wrappers: [
				{
					name: 'formly-normalized-dropdown-wrapper',
					component: FormlyNormalizedDropdownWrapperComponent
				}, {
					name: 'formly-normalized-wrapper',
					component: FormlyNormalizedWrapperComponent
				}, {
					name: 'formly-subnormalized-wrapper',
					component: FormlySubnormalizedWrapperComponent
				}, {
					name: 'formly-wrapper',
					component: FormlyWrapperComponent
				}
			]
		}),
		FormlySelectModule,
		FormsModule,
		HttpClientModule,
		environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			delay: environment.httpDelay,
			passThruUnknownUrl: true,
			dataEncapsulation: false
		}),
		InputMaskModule,
		InputTextareaModule,
		InputTextModule,
		LoadingBarHttpClientModule,
		environment.production ? [] : NgxsLoggerPluginModule.forRoot(),
		NgxsModule.forRoot([
			StateManager
		], {
			developmentMode: !environment.production
		}),
		PanelModule,
		ReactiveFormsModule,
		SidebarModule,
		SelectButtonModule,
		ServiceWorkerModule.register('/ngsw-worker.js', {
			enabled: environment.production
		}),
		TabViewModule,
		TableModule,
		ToastModule,
		ToolbarModule,
		ToggleButtonModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (HttpLoaderFactory),
				deps: [HttpClient]
			}
		})
	],
	providers: [
		DateTimeService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptorService,
			multi: true
		},
		FingerprintService,
		MessageService,
		ObjectPropertyService,
		RegexpService,
		TelemetryService,
		{
			provide: 'windowObject',
			useValue: window
		},
		WindowSizeService,
		XXhashService
	]
})
export class AppModule {}
