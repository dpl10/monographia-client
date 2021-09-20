export class Tab {
	component: TabComponent;
	componentArguments?: number;
	title: string;
}
/* all strings must be included in ./PrimeNG/primeng-tab-view/primeng-tab-view.component.html */
export type TabComponent = 'aboutUtility'|'geography'|'scientificName';
