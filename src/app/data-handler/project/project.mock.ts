/* imports from app */
import { ProjectRaw } from '@monographia/data-handler/project/project.model';
export const Projects: Array<ProjectRaw> = [
	{
		id: 1,
		Name: 'Lepidoptera of California',
		Owner: {
			value: 4,
			label: 'Kansas, Larry Anthony'
		},
		NomenclaturalCode: {
			value: 2,
			label: 'International Code of Zoological Nomenclature'
		},
		Aquatic: false,
		CITES: false,
		Terrestrial: true,
		Status: true,
		Description: 'This is way too much work for one person.',
		LastModifier: {
			value: 3,
			label: 'Nelson, Lord Admiral'
		},
		LastModified: '2018-11-10T10:31:18+00:00',
		UserPermission: [
			{
				User: {
					value: 4,
					label: 'Kansas, Larry Anthony'
				},
				ViewData: true,
				CreateView: true,
				InsertData: true,
				EditData: true,
				DeleteData: true
			}, {
				User: {
					value: 3,
					label: 'Nelson, Lord Admiral'
				},
				ViewData: true,
				CreateView: true,
				InsertData: false,
				EditData: false,
				DeleteData: false
			}, {
				User: {
					value: 2,
					label: 'California, Lisa April'
				},
				ViewData: true,
				CreateView: true,
				InsertData: true,
				EditData: true,
				DeleteData: false
			}
		],
// fill in
//		Constraint: '',
//		TerminalConstraint: ,
//		GeographicConstraint: ,
//		Hash: '10611afaf7367466'
	}, {
		id: 2,
		Name: '<i>Callitropsis</i>',
		Owner: {
			value: 1,
			label: 'Louisiana, Damon Aaron'
		},
		NomenclaturalCode: {
			value: 1,
			label: 'International Code of Nomenclature for Algae, Fungi, and Plants'
		},
		CITES: true,
		Aquatic: false,
		Terrestrial: true,
		Status: true,
		Description: 'A genus in need of much study.',
		LastModifier: {
			value: 1,
			label: 'Louisiana, Damon Aaron'
		},
		LastModified: '2019-04-21T06:36:18+00:00',
		UserPermission: [
			{
				User: {
					value: 1,
					label: 'Louisiana, Damon Aaron'
				},
				ViewData: true,
				CreateView: true,
				InsertData: true,
				EditData: true,
				DeleteData: true
			}
		],
// fill in
//		Constraint: '',
//		TerminalConstraint: ,
//		Hash: '61d59c971174816'
	}, {
		id: 3,
		Name: '<i>Xyris</i>',
		Owner: {
			value: 2,
			label: 'California, Lisa April'
		},
		NomenclaturalCode: {
			value: 1,
			label: 'International Code of Nomenclature for Algae, Fungi, and Plants'
		},
		CITES: true,
		Aquatic: true,
		Terrestrial: true,
		Status: true,
		Description: 'A really massive project.',
		LastModifier: {
			value: 2,
			label: 'California, Lisa April'
		},
		LastModified: '2018-07-11T08:08:18+00:00',
		UserPermission: [
			{
				User: {
					value: 2,
					label: 'California, Lisa April'
				},
				ViewData: true,
				CreateView: true,
				InsertData: true,
				EditData: true,
				DeleteData: true
			}, {
				User: {
					value: 1,
					label: 'Louisiana, Damon Aaron'
				},
				ViewData: true,
				CreateView: false,
				InsertData: true,
				EditData: true,
				DeleteData: false
			}
		],
// fill in
//		Constraint: '',
//		TerminalConstraint: ,
//		Hash: 'b09988bb9be65a04'
	}, {
		id: 4,
		Name: 'Salmon of the Pacific',
		Owner: {
			value: 3,
			label: 'Nelson, Lord Admiral'
		},
		NomenclaturalCode: {
			value: 2,
			label: 'International Code of Zoological Nomenclature'
		},
		CITES: false,
		Aquatic: true,
		Terrestrial: false,
		Status: true,
		Description: 'These tasty fish defy description!',
		LastModifier: {
			value: 3,
			label: 'Nelson, Lord Admiral'
		},
		LastModified: '2017-11-07T23:23:18+00:00',
		UserPermission: [
			{
				User: {
					value: 3,
					label: 'Nelson, Lord Admiral'
				},
				ViewData: true,
				CreateView: true,
				InsertData: true,
				EditData: true,
				DeleteData: true
			}, {
				User: {
					value: 2,
					label: 'California, Lisa April'
				},
				ViewData: true,
				CreateView: true,
				InsertData: true,
				EditData: false,
				DeleteData: false
			}
		],
// fill in
//		Constraint: '',
//		TerminalConstraint: ,
//		GeographicConstraint: ,
//		Hash: '220af1639947a0c3'
	}
];
