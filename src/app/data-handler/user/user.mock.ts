/* imports from app */
import { UserRaw } from '@monographia/data-handler/user/user.model';
export const Users: Array<UserRaw> = [
	{
		id: 1,
		GivenName: 'Damon',
		MiddleName: 'Aaron',
		FamilyName: 'Louisiana',
		ScreenName: 'd',
		Language: {
			value: 1,
			label: 'English'
		},
		Email: 'damon@bxbg.org',
		Institution: {
			value: 3,
			label: 'Bronx Botanical Gardens'
		},
		Status: true,
		LastProject: {
			value: 2,
			label: 'Callitropsis'
		},
		PasswordExpiration: '2029-04-17T19:51:18+00:00',
		LastLogin: '2019-04-17T19:51:18+00:00',
//		Hash: '10611afaf7367466'
	}, {
		id: 2,
		GivenName: 'Lisa',
		MiddleName: 'April',
		FamilyName: 'California',
		ScreenName: 'Lisa',
		Language: {
			value: 1,
			label: 'English'
		},
		Email: 'lisa@nybg.org',
		Institution: {
			value: 1,
			label: 'Savanna Botanial Reserve'
		},
		Status: true,
		LastProject: {
			value: 3,
			label: 'Xyris'
		},
		PasswordExpiration: '2028-05-17T20:31:18+00:00',
		LastLogin: '2018-05-17T20:31:18+00:00',
//		Hash: '61d59c971174816'
	}, {
		id: 3,
		GivenName: 'Lord',
		MiddleName: 'Admiral',
		FamilyName: 'Nelson',
		ScreenName: 'Nelson',
		Language: {
			value: 2,
			label: 'Español'
		},
		Email: 'admiral.nelson@royalnavy.mod.uk',
		Institution: {
			value: 4,
			label: 'Royal Botanic Gardens, Inverleith'
		},
		Status: false,
		LastProject: {
			value: 4,
			label: 'Salmon of the Pacific'
		},
		PasswordExpiration: '2027-01-17T21:21:18+00:00',
		LastLogin: '2017-01-17T21:21:18+00:00',
//		Hash: 'b09988bb9be65a04'
	}, {
		id: 4,
		GivenName: 'Larry',
		MiddleName: 'Anthony',
		FamilyName: 'Kansas',
		ScreenName: 'LK',
		Language: {
			value: 2,
			label: 'Español'
		},
		Email: 'larry@bxbg.org',
		Institution: {
			value: 3,
			label: 'Bronx Botanical Gardens'
		},
		Status: true,
		LastProject: {
			value: 1,
			label: 'Lepidoptera of California'
		},
		PasswordExpiration: '2029-09-17T18:11:18+00:00',
		LastLogin: '2019-09-17T18:11:18+00:00',
//		Hash: '220af1639947a0c3'
	}
];
