export const API = { /* properties must be the same as ItemString (@monographia/state-manager/state-manager.item); values must begin with 'api/' */
	city: 'api/cities',
	institution: 'api/institutions',
	periodical: 'api/periodicals',
	person: 'api/people',
	project: 'api/projects',
	publication: 'api/publications',
	publisher: 'api/publishers',
	school: 'api/schools',
	tag: 'api/tags',
	user: 'api/users'
};
export const Assets = { /* properties must be the same as FilterString|NetworkString (@monographia/state-manager/state-manager.item); values must begin with 'assets/' */
	scientificNamesDFFN: 'assets/neural-network/scientific-names-dffnn/model.json',
	scientificNamesECNN: 'assets/neural-network/scientific-names-ecnn/model.json',
	scientificNamesLCNN: 'assets/neural-network/scientific-names-lcnn/model.json',
	scientificNamesPCNN: 'assets/neural-network/scientific-names-pcnn/model.json'
};
