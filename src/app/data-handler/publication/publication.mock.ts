/* imports from app */
import { PublicationRaw } from '@monographia/data-handler/publication/publication.model';
export const Publications: Array<PublicationRaw> = [
	{
		id: 1,
		Abstract: 'This is way <i>too</i> short to be a real abstract, but it is long enough for a test.',
		Authors: [
			{
				label: 'Fisher, Carolus',
				value: 1
			}
		],
		BookTitle: 'A Very Long Edited Book',
		City: {
			label: 'London',
			value: 9
		},
		Year: '1922',
		Edition: '2nd',
		Editors: [
			{
				label: 'Fisher, Carolus',
				value: 1
			}, {
				label: 'Marshall, George',
				value: 4
			}
		],
		EndPage: '55',
		ISBN: '99921-58-10-7',
		Tags: [
			{
				label: 'tropical',
				value: 2
			}, {
				label: 'population genetics',
				value: 8
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 3,
			label: 'book chapter'
		},
		Publisher: {
			label: 'Artificial Publishing Group',
			value: 3
		},
		StartPage: '1',
		Title: 'Theoretical statistics can be difficult',
		URL: 'https:/monographia.nybg.org',
		Mask: false,
		Hash: 'c6e8c789fe3e1927'
	}, {
		id: 2,
		Authors: [
			{
				label: 'Bedigian, John',
				value: 9
			}
		],
		City: {
			label: 'Tokyo',
			value: 5
		},
		Year: '2005',
		Edition: '1st',
		ISBN: '978-3-16-148410-0',
		Tags: [
			{
				label: 'tropical',
				value: 2
			}, {
				label: 'phylogeny',
				value: 7
			}, {
				label: 'Mexico',
				value: 5
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 18,
			label: 'whole book'
		},
		Publisher: {
			label: 'CSF',
			value: 2
		},
		BookTitle: 'Systematics and Evolution in <i>Xyris</i> L.: Origin of its Closest Relatives',
		URL: 'https:/monographia.nybg.org',
		Mask: false,
		Hash: '350fb33188a1168a'
	}, {
		id: 3,
		Abstract: 'This paper has a original abstract.',
		Authors: [
			{
				label: 'Terry, Lyndon',
				value: 10
			}, {
				label: 'Adams, Merritt',
				value: 11
			}
		],
		DOI: '10.1048/srep03518',
		Year: '1985',
		EndPage: '155',
		Issue: '6A',
		Periodical: {
			label: 'Journal of Botany',
			value: 7
		},
		Tags: [
			{
				label: 'Australia',
				value: 4
			}, {
				label: 'phylogeny',
				value: 7
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 12,
			label: 'periodical'
		},
		StartPage: '150',
		Title: '<I>Juniperus</I>, <i>Cupressus</I>, and the <I>Hesperocyparis–Callitropsis–Xanthocyparis</I> clades',
		URL: 'https:/monographia.nybg.org',
		Volume: '4A',
		Mask: false,
		Hash: '8c5f17dec358b478'
	}, {
		id: 4,
		Abstract: 'This paper’s abstract is original.',
		Authors: [
			{
				label: 'Sites, Arthur',
				value: 3
			}, {
				label: 'Marshall, George',
				value: 4
			}
		],
		DOI: '10.1049/srep03518',
		Year: '2004',
		EndPage: '568',
		Issue: '2',
		Periodical: {
			label: 'Review of Systematics',
			value: 6
		},
		Tags: [
			{
				label: '5.8S',
				value: 1
			}, {
				label: 'tropical',
				value: 2
			}, {
				label: 'population genetics',
				value: 8
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 12,
			label: 'periodical'
		},
		StartPage: '567',
		Title: 'Operational methods for delimiting genera',
		URL: 'https:/monographia.nybg.org',
		Volume: '258',
		Mask: false,
		Hash: '25c44446c5dd9b5d'
	}, {
		id: 5,
		Abstract: 'The title of this paper is longer than the abstract.',
		Authors: [
			{
				label: 'Ashton, Brandt',
				value: 6
			}, {
				label: 'Sites, Arthur',
				value: 3
			}, {
				label: 'Gorelick, Merritt',
				value: 7
			}, {
				label: 'Bedigian, John',
				value: 9
			}, {
				label: 'Terry, Lyndon',
				value: 10
			}, {
				label: 'Stevenson, Carl',
				value: 2
			}
		],
		DOI: '10.1558/srep03518',
		Year: '2015',
		EndPage: '355',
		Issue: '9',
		Periodical: {
			label: 'Biotechnology',
			value: 5
		},
		Tags: [
			{
				label: 'chemistry',
				value: 9
			}, {
				label: 'costal',
				value: 6
			}, {
				label: 'phylogeny',
				value: 7
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 12,
			label: 'periodical'
		},
		StartPage: '345',
		Title: 'New technology is awesome, with a few contrived examples of its application and efficiency',
		URL: 'https:/monographia.nybg.org',
		Volume: '98',
		Mask: false,
		Hash: '5a4636f999b51f3a'
	}, {
		id: 6,
		Abstract: 'This author did not <I>write</I> an abstract.',
		Authors: [
			{
				label: 'Stevenson, Carl',
				value: 2
			}
		],
		DOI: '10.1028/srep03418',
		Year: '1980',
		EndPage: 'S55',
		Issue: '1',
		Periodical: {
			label: 'Journal of the Rudbeckean Society',
			value: 4
		},
		Tags: [
			{
				label: 'tropical',
				value: 2
			}, {
				label: 'phylogeny',
				value: 7
			}, {
				label: 'taxonomy',
				value: 3
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 12,
			label: 'periodical'
		},
		StartPage: 'S23',
		Title: '<i>Botrychium multifidum</i> (Ophioglossaceae) and its vascular system',
		URL: 'https:/monographia.nybg.org',
		Volume: '1',
		Mask: false,
		Hash: '9f96d293627a64ed'
	}, {
		id: 7,
		Abstract: 'Yet another original abstract.',
		Authors: [
			{
				label: 'Gorelick, Merritt',
				value: 7
			}, {
				label: 'Wilf, Folger',
				value: 8
			}, {
				label: 'Fisher, Carolus',
				value: 1
			}, {
				label: 'Stevenson, Carl',
				value: 2
			}
		],
		DOI: '10.1148/srep03519',
		Year: '2008',
		EndPage: '567895',
		Issue: '5',
		Periodical: {
			label: 'Journal of Sciences',
			value: 3
		},
		Tags: [
			{
				label: 'tropical',
				value: 2
			}, {
				label: 'phylogeny',
				value: 7
			}, {
				label: 'taxonomy',
				value: 3
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 12,
			label: 'periodical'
		},
		StartPage: '567890',
		Title: 'Chromosome numbers change, genome size does not',
		URL: 'https:/monographia.nybg.org',
		Volume: '9',
		Mask: false,
		Hash: '46c96c72ef8ed849'
	}, {
		id: 8,
		Abstract: 'The abstract would go here if there was <i>one</I>.',
		Authors: [
			{
				label: 'Wilf, Folger',
				value: 8
			}, {
				label: 'Escapa, Pichi',
				value: 5
			}
		],
		DOI: '10.1348/srep04518',
		Year: '2014',
		EndPage: '595',
		Issue: '10',
		Periodical: {
			label: 'New Botanist',
			value: 2
		},
		Tags: [
			{
				label: 'tropical',
				value: 2
			}, {
				label: 'phylogeny',
				value: 7
			}, {
				label: '5.8S',
				value: 1
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 12,
			label: 'periodical'
		},
		StartPage: '590',
		Title: 'Megabiased molecular clocks',
		URL: 'https:/monographia.nybg.org',
		Volume: '56',
		Mask: false,
		Hash: '1b971e4cf103b6f8'
	}, {
		id: 9,
		Abstract: 'Here it is!',
		Authors: [
			{
				label: 'Escapa, Pichi',
				value: 5
			}
		],
		City: {
			label: 'Ithaca',
			value: 2
		},
		Year: '2004',
		Tags: [
			{
				label: 'tropical',
				value: 2
			}, {
				label: 'Australia',
				value: 4
			}, {
				label: 'costal',
				value: 6
			}
		],
		Note: 'This is some <b>amazing</b> text. It just <i>says</i> something!',
		PublicationType: {
			value: 14,
			label: 'thesis/dissertation'
		},
		School: {
			label: 'Ithaca University',
			value: 1
		},
		Title: 'Plant Fossils',
		URL: 'https:/monographia.nybg.org',
		Mask: false,
		Hash: '7ee39e5462f235f'
	}
];
