/* imports from node_modules */
import * as Pbf from 'pbf';
import FuzzySet from 'fuzzyset.js';
//import * as tf from '@tensorflow/tfjs';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { InferenceModel } from '@tensorflow/tfjs';
import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Operation } from 'fast-json-patch';
import { Subject } from 'rxjs/Subject';
import { cloneDeep } from 'lodash';
import { map, takeUntil } from 'rxjs/operators';
/* imports from app */
import { API, Assets } from '@monographia/api';
import { City } from '@monographia/data-handler/city/city.model';
import { CityState } from '@monographia/data-handler/city/city.state';
import { DateTimeService } from '@monographia/date-time.service';
import { EntryTelemetry, ExitTelemetry } from '@monographia/telemetry/telemetry.model';
import { Filter, FilterRaw } from '@monographia/bloom-filter.service';
import { FilterString, ItemIndexed, ItemIndexedString, ItemLabel, ItemObject, ItemObjectRaw, ItemString, newItem, testItem } from '@monographia/state-manager/state-manager.item';
import { FormlyDropdownOption, isFormlyDropdownOption } from '@monographia/FormlyPrimeNG/formly-dropdown/formly-dropdown.model';
import { InsertUpdateItem, SelectFilter, SelectItems } from '@monographia/state-manager/state-manager.actions';
import { Institution } from '@monographia/data-handler/institution/institution.model';
import { InstitutionState } from '@monographia/data-handler/institution/institution.state';
import { Periodical } from '@monographia/data-handler/periodical/periodical.model';
import { PeriodicalState } from '@monographia/data-handler/periodical/periodical.state';
import { Person } from '@monographia/data-handler/person/person.model';
import { PersonState } from '@monographia/data-handler/person/person.state';
import { Project } from '@monographia/data-handler/project/project.model';
import { ProjectState, projectProperties } from '@monographia/data-handler/project/project.state';
import { Publication } from '@monographia/data-handler/publication/publication.model';
import { PublicationState, publicationProperties } from '@monographia/data-handler/publication/publication.state';
import { Publisher } from '@monographia/data-handler/publisher/publisher.model';
import { PublisherState } from '@monographia/data-handler/publisher/publisher.state';
import { RecordReturn } from '@monographia/state-manager/state-manager-insert-update.service';
import { School } from '@monographia/data-handler/school/school.model';
import { SchoolState } from '@monographia/data-handler/school/school.state';
import { SearchHash, SearchReturn } from '@monographia/state-manager/state-manager-search.service';
import { StateManagerOptionService } from '@monographia/state-manager/state-manager-option.service';
import { StateManagerSearchService } from '@monographia/state-manager/state-manager-search.service';
import { Tag } from '@monographia/data-handler/tag/tag.model';
import { TagState } from '@monographia/data-handler/tag/tag.state';
import { User } from '@monographia/data-handler/user/user.model';
import { UserState } from '@monographia/data-handler/user/user.state';
import { XXhashService } from '@monographia/xxhash.service';
import { environment } from '@monographiaEnvironments/environment';
export class InsertUpdate {
	protected static SInit = (() => {
		InsertUpdate.prototype.insert = false;
		InsertUpdate.prototype.update = false;
	})();
	insert: boolean;
	selection?: string;
	update: boolean;
}
export interface StateComponentFilter { /* properties must be the same as FilterLabel (./state-manager.item) */
}
export interface StateComponentItem { /* properties must be the same as ItemLabel, items without search hashes (./state-manager.item) */
	city: {
		data: Array<City>;
		options: Array<FormlyDropdownOption>;
	};
	institution: {
		data: Array<Institution>;
		options: Array<FormlyDropdownOption>;
	};
	periodical: {
		data: Array<Periodical>;
		options: Array<FormlyDropdownOption>;
	};
	person: {
		data: Array<Person>;
		options: Array<FormlyDropdownOption>;
	};
	publisher: {
		data: Array<Publisher>;
		options: Array<FormlyDropdownOption>;
	};
	school: {
		data: Array<School>;
		options: Array<FormlyDropdownOption>;
	};
	tag: {
		data: Array<Tag>;
		options: Array<FormlyDropdownOption>;
	};
	user: {
		data: Array<User>;
		options: Array<FormlyDropdownOption>;
	};
}
export interface StateComponentItemSearch { /* properties must be the same as ItemLabel, items with search hashes (./state-manager.item) */
	project: {
		data: Array<Project>;
		fuzzy: FuzzySet;
		options: Array<FormlyDropdownOption>;
		search: SearchHash;
	};
	publication: {
		data: Array<Publication>;
		fuzzy: FuzzySet;
		options: Array<FormlyDropdownOption>;
		search: SearchHash;
	};
}
export class StateComponentNetwork { /* properties must be the same as NetworkLabel (./state-manager.item) */
}
export class StateComponentTelemetry { /* properties must be the same as TelemetryLabel (./state-manager.item) */
	entryTelemetry: EntryTelemetry;
	exitTelemetry: ExitTelemetry;
}
export interface StateModel extends StateComponentFilter, StateComponentItem, StateComponentItemSearch, StateComponentNetwork, StateComponentTelemetry {
}
const httpHeaders = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};
const searchIndexed = { /* properties must be the same as ItemLabel (./state-manager.item) */
	project: projectProperties,
	publication: publicationProperties
};
@State<StateModel>({
	name: 'state',
	defaults: {
		city: {
			data: [],
			options: []
		},
		entryTelemetry: new EntryTelemetry(),
		exitTelemetry: new ExitTelemetry(),
		institution: {
			data: [],
			options: []
		},
		periodical: {
			data: [],
			options: []
		},
		person: {
			data: [],
			options: []
		},
		project: {
			data: [],
			fuzzy: FuzzySet(),
			options: [],
			search: new SearchHash()
		},
		publication: {
			data: [],
			fuzzy: FuzzySet(),
			options: [],
			search: new SearchHash()
		},
		publisher: {
			data: [],
			options: []
		},
		school: {
			data: [],
			options: []
		},
		tag: {
			data: [],
			options: []
		},
		user: {
			data: [],
			options: []
		}
	}
})
// add select ExitTelemetry; insert/update ExitTelemetry; insert EntryTelemetry
@Injectable({
	providedIn: 'root'
})
export class StateManager implements OnDestroy {
	private ngUnsubscribe = new Subject();
	@Selector()	public static data(state: StateModel): Function {
		return((item: ItemString): Array<ItemObject> => {
			return(state[item].data);
		});
	}
	@Selector() public static nextID(state: StateModel): Function {
		return((item: ItemString, id: number): number => {
			if(Number.isInteger(id) === true){
				return(id);
			} else {
				let x: number = Number.MAX_SAFE_INTEGER;
				for(let k = state[item].data.length-1; k >= 0; k--){ /* reduce does not work because Typescript sucks ass, and not in a good way ('Cannot invoke an expression whose type lacks a call signature.') */
					if(state[item].data[k].id < x){
						x = state[item].data[k].id;
					}
				}
				if(x >= 0){
					return(-1);
				} else {
					return(x-1);
				}
			}
		});
	}
	@Selector()	public static options(state: StateModel): Function {
		return((item: ItemString): Array<FormlyDropdownOption> => {
			return(state[item].options);
		});
	}
	@Selector()	public static search(state: StateModel): Function {
		return((item: ItemIndexedString): SearchReturn => {
			return({
				fuzzy: state[item].fuzzy,
				searchHash: state[item].search
			});
		});
	}
	@Selector()	public static selectFilter(state: StateModel): Function {
		return((filter: FilterString): Filter => {
			return(state[filter]);
		});
	}
	@Selector()	public static selectItem(state: StateModel): Function {
		return((id: number, item: ItemString): ItemObject => {
			for(let k = state[item].data.length-1; k >= 0; k--){ /* findIndex does not work because Typescript sucks ass, and not in a good way ('Cannot invoke an expression whose type lacks a call signature.') */
				if(state[item].data[k].id === id){
					return(state[item].data[k]);
				}
			}
			return(newItem(item));
		});
	}
//	@Selector()	public static selectNetwork(state: StateModel): Function {
//		return((network: NetworkString): InferenceModel => {
//			return(state[network]);
//		});
//	}
	@Selector()	public static selectOption(state: StateModel): Function {
		return((value: number, item: ItemString): FormlyDropdownOption => {
			for(let k = state[item].options.length-1; k >= 0; k--){ /* findIndex does not work because Typescript sucks ass, and not in a good way ('Cannot invoke an expression whose type lacks a call signature.') */
				if(state[item].options[k].value === value){
					return(state[item].options[k]);
				}
			}
			return(new FormlyDropdownOption());
		});
	}
	private async getFilter(filter: FilterString): Promise<Filter> {
		return(await this.httpClient.get<ArrayBuffer>(Assets[filter], {
			responseType: 'arraybuffer' as 'json' /* "as 'json'" needed because of "get<ArrayBuffer>" */
		}).pipe(map((x: ArrayBuffer) => {
			return(FilterRaw.read(new Pbf(x)));
		})).toPromise());
	}
//	private async getNetwork(network: NetworkString): Promise<InferenceModel> {
//		const n: any = await tf.loadLayersModel(Assets[network]); /* is always type InferenceModel, but it will not compile that way */
// 	if(network === 'scientificNamesLCNN'){
// 		const w: number = n.getLayer('embedding').batchInputShape[1];
// 		n.predict(tf.tensor2d(new Int32Array(w).fill(1), [1, w]), {
// 			batchSize: 1,
// 			verbose: false
// 		}).dispose(); /* if it is not primed, it will not work... wft */
// 	}
//		return(n);
//	}
	private async insertUpdate(item: ItemString, state: StateModel, record: ItemObject): Promise<RecordReturn> {
		switch(item){
			case 'city':
				return(this.cityState.insertUpdate(state, record as City));
			case 'institution':
				return(this.institutionState.insertUpdate(state, record as Institution));
			case 'periodical':
				return(this.periodicalState.insertUpdate(state, record as Periodical));
			case 'person':
				return(this.personState.insertUpdate(state, record as Person));
			case 'project':
				return(this.projectState.insertUpdate(state, record as Project));
			case 'publication':
				return(this.publicationState.insertUpdate(state, record as Publication));
			case 'publisher':
				return(this.publisherState.insertUpdate(state, record as Publisher));
			case 'school':
				return(this.schoolState.insertUpdate(state, record as School));
			case 'tag':
				return(this.tagState.insertUpdate(state, record as Tag));
		}
	}
	@Action(InsertUpdateItem) async insertUpdateItem({getState, patchState}: StateContext<StateModel>, { item, record }: InsertUpdateItem): Promise<void> {
		const state: StateModel = getState();
		if(record != null){
			for(const property in record){
				if(record[property] == null){
					delete(record[property]);
				}
			}
			const n: RecordReturn = await this.insertUpdate(item, getState(), record);
			if(n.insert === true){ /* identified serverside by POST with full record and an negative id */
				this.httpClient.post<ItemObjectRaw>(API[item], n.record, httpHeaders);
			} else if(n.update === true){ /* identified serverside by PATCH with Array<Operation> including a positive id */
				if(environment.production === true){
					this.httpClient.patch<Array<Operation>>(API[item], n.updatePatch, httpHeaders);
				} else {
					this.httpClient.patch<ItemObjectRaw>(API[item], n.record, httpHeaders);
				}
			}
			if((n.insert === true) || (n.update === true)){
				const p = {};
				if((<StateComponentItemSearch>state)[item].search){
					const r: SearchReturn = await this.recordCheckAndFormat(state, item, cloneDeep(n.newData));
					let s: SearchHash = r.searchHash;
					if(n.update === true){
						s = this.stateManagerSearchService.mergeHash(r.searchHash, (<StateComponentItemSearch>state)[item].search);
					}
					p[item] = {
						data: r.records,
						fuzzy: r.fuzzy,
						options: cloneDeep(n.newOptions),
						search: s
					};
				} else {
					p[item] = {
						data: cloneDeep(n.newData),
						options: cloneDeep(n.newOptions)
					};
				}
				patchState(p);
			}
		}
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	private async recordCheckAndFormat(state: StateModel, item: ItemString, records: Array<ItemObject>): Promise<SearchReturn> {
		for(let k = records.length-1; k >= 0; k--){
			if(testItem(item, records[k]) === true){
				if(item === 'person'){ /* items that need formatting */
					records[k] = this.personState.recordFormatter(records[k] as Person);
				} else if(item === 'publication'){
					records[k] = await this.publicationState.recordFormatter(records[k] as Publication);
				} else if(item === 'user'){
					records[k] = await this.userState.recordFormatter(records[k] as User);
				}
			} else {
				console.error(item + ' data are not correctly formatted:', JSON.stringify(records[k]));
				return({
					records: [newItem(item)]
				});
			}
		}
		if((<StateComponentItemSearch>state)[item].search){
			return(await this.stateManagerSearchService.searchizer(records as Array<ItemIndexed>, searchIndexed[item]));
		} else {
			return({
				records: records,
			});
		}
	}
	@Action(SelectFilter) async selectFilter({getState, patchState}: StateContext<StateModel>, { filter }): Promise<void> {
		const state: StateModel = getState();
		if(state[filter].f === undefined){
			const p: any = {};
			p[filter] = await this.getFilter(filter);
			patchState(p);
		}
	}
	@Action(SelectItems) async selectItems({getState, patchState}: StateContext<StateModel>, { item }): Promise<void> {
		let state: StateModel = getState();
		if(state[item].data.length === 0){
			this.httpClient.get<any>(API[item]).pipe(map(x => this.dateTimeService.iso2date(x)), takeUntil(this.ngUnsubscribe)).subscribe(async (records: Array<ItemObject>): Promise<void> => { /* identified serverside by GET; using ItemObjectRaw in place of any does not work, but maybe not much of an issue because typechecking is not done anyway (https://github.com/angular/angular/issues/20770) thus the functions called by this.format do minimal type checking */
				const p: any = {};
//				if((<StateComponentItemSearch>state)[item].search){
//					if(state.scientificNamesLCNN.predict == null){
//						p.scientificNamesLCNN = await this.getNetwork('scientificNamesLCNN');
//					}
//					patchState(p);
//					state = getState();
//				}
				const r: SearchReturn = await this.recordCheckAndFormat(state, item, records);
				const options: Array<FormlyDropdownOption> = [];
				for(let k = r.records.length-1; k >= 0; k--){
					options[k] = {
						label: r.records[k][ItemLabel[item]],
						value: r.records[k].id
					};
					if((environment.production === false) && (environment.devHash === true)){
						if(item === 'publication'){ /* change as needed when using environment.devHash */
							const h: Array<string> = [];
							const u = ['Year', 'BookTitle', 'Title', 'Author', 'PublicationType']; /* change as needed when using environment.devHash */
							for(let j = u.length-1; j >= 0; j--){
								if(r.records[k][u[j]] != null){
									if(isFormlyDropdownOption(r.records[k][u[j]]) === true){
										h.push(r.records[k][u[j]].value);
									} else {
										h.push(r.records[k][u[j]]);
									}
								}
							}
							console.log(h.join(' '), await this.xxhashService.h64(h.join(' ').normalize('NFC')));
						}
					}
				}
				if((<StateComponentItemSearch>state)[item].search){
					p[item] = {
						data: r.records,
						fuzzy: r.fuzzy,
						options: await this.stateManagerOptionService.optionizer(options, item),
						search: r.searchHash
					};
				} else {
					p[item] = {
						data: r.records,
						options: await this.stateManagerOptionService.optionizer(options, item)
					};
				}
				patchState(p);
			});
		}
	}
//	@Action(SelectNetwork) async selectNetwork({getState, patchState}: StateContext<StateModel>, { network }): Promise<void> {
//		const state: StateModel = getState();
//		if(state[network].predict === undefined){
//			const p: any = {};
//			p[network] = await this.getNetwork(network);
//			patchState(p);
//		}
//	}
	constructor(
		private cityState: CityState,
		private dateTimeService: DateTimeService,
		private httpClient: HttpClient,
		private institutionState: InstitutionState,
		private periodicalState: PeriodicalState,
		private personState: PersonState,
		private projectState: ProjectState,
		private publicationState: PublicationState,
		private publisherState: PublisherState,
		private schoolState: SchoolState,
		private stateManagerOptionService: StateManagerOptionService,
		private stateManagerSearchService: StateManagerSearchService,
		private tagState: TagState,
		private userState: UserState,
		private xxhashService: XXhashService){
	}
}
