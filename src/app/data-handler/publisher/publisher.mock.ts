/* imports from app */
import { Publisher } from '@monographia/data-handler/publisher/publisher.model';
export const Publishers: Array<Publisher> = [
	{
		id: 1,
		City: {
			value: 3,
			label: 'Berlin'
		},
		Publisher: 'Faller',
		Hash: '440392e39becba16'
	}, {
		id: 2,
		City: {
			value: 5,
			label: 'Tokyo'
		},
		Publisher: 'CSF',
		Hash: '658ebe83c7da827b'
	}, {
		id: 3,
		City: {
			value: 9,
			label: 'London'
		},
		Publisher: 'Artificial Publishing Group',
		Hash: 'd56f8cf863e6c97e'
	}, {
		id: 4,
		City: {
			value: 7,
			label: 'Stockholm'
		},
		Publisher: 'Royal Botanic Garden',
		Hash: '4610a382776ffdc8'
	}
];
