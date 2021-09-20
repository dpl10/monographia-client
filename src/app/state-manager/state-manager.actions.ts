import { FilterString, ItemObject, ItemString, NetworkString } from '@monographia/state-manager/state-manager.item';
export class InsertUpdateItem {
	static readonly type = '[Item] InsertUpdateItem';
	constructor(public item: ItemString, public record: ItemObject){
	}
}
export class SelectFilter {
	static readonly type = '[Filter] SelectFilterTypes';
	constructor(public filter: FilterString){
	}
}
export class SelectItems {
	static readonly type = '[Item] SelectItemTypes';
	constructor(public item: ItemString){
	}
}
export class SelectNetwork {
	static readonly type = '[Network] SelectNetworkTypes';
	constructor(public network: NetworkString){
	}
}
