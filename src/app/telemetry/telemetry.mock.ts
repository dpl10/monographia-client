/* imports from app */
import { ExitTelemetry } from '@monographia/telemetry/telemetry.model';
import { RandomService } from '@monographia/random.service';
const randomService = new RandomService();
export const Telemetries: Array<ExitTelemetry> = [
// Hashes are wrong!
	{
		id: 1,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'acknowledgments',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 23637371717555, 14433951931039, 78011708822430, 20295106),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 197001829130818, 296078364767, 77421460821205, 18713503118557),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 138701130211221, 135032774621715, 59692458215974, 140172596211495),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 19283001624459, 19079297266154, 221021681329593, 26149162972547),
//		Hash: '10611afaf7367466'
	}, {
		id: 2,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'all',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 25012740430236, 11282294493248, 7035150878565, 45213196512385),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 22477256629800, 237152668822729, 119552405166, 282121551127696),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 254241314119879, 165962195013444, 2127994338943, 660012686618),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 145691783420221, 270641894421660, 246172090516381, 11195171528),
//		Hash: '10611afaf7367466'
	}, {
		id: 3,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'characters',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 261893230520224, 2982199647094, 28701654632735, 302691858520031),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 309731253330673, 39811708519781, 60521717327073, 21192358310464),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 245171407729001, 177702036215810, 120581197917805, 307903065718409),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 45451788126091, 31305146820507, 21209186464761, 214001737421211),
//		Hash: '10611afaf7367466'
	}, {
		id: 4,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'classifications',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 29687288230547, 143852001019955, 15877326868111, 171901151325765),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 213899273552, 126772883022787, 2241420914040, 271452065726904),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 29252120923949, 110482985825428, 19424691428501, 12043158666995),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 227532264432707, 308792038427755, 504728319755, 6162277788168),
//		Hash: '10611afaf7367466'
	}, {
		id: 5,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'click',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 225681904721577, 12337219221289, 699822423214, 6620405230232),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 201682726125452, 3033820115986, 31699732324702, 8099154721632),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 236592026311327, 140973114410438, 95751760910503, 160803010121923),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 2797324541421, 1386920066621, 193331540619759, 1356589212779),
//		Hash: '10611afaf7367466'
	}, {
		id: 6,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'collections',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 5498215615388, 31621111944990, 23309325865901, 900136243897),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 12732152125445, 66412964920277, 30364633416047, 5975310985362),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 2023733019306, 195221002718007, 10362115474567, 32681239007906),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 11106348526021, 298221648721766, 856183936993, 7075107608253),
//		Hash: '10611afaf7367466'
	}, {
		id: 7,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'copyButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 114472568518952, 47672442027762, 261782148911729, 88092204523021),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 85302550429534, 20227887723694, 12169457826465, 2118047083742),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 186431743130385, 874221034475, 316363168218049, 23998906527272),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 140542382922657, 1822188357671, 306189298542, 2133520361189),
//		Hash: '10611afaf7367466'
	}, {
		id: 8,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'database',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 17461658620398, 20315114853974, 263131814025705, 26256823423880),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 22764736818138, 18125271813615, 27684292445148, 32015289514637),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 30878260519505, 179652334030011, 60811109430021, 1400862977420),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 91172953627342, 2074664228649, 164562239528965, 484483016686),
//		Hash: '10611afaf7367466'
	}, {
		id: 9,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'deleteButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 204651058664, 73871080311483, 34612456412587, 12481327218546),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 199161257629241, 213761107619945, 801110432514, 12253297532347),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 146622046822024, 131292535802, 9829187825520, 291853089819174),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 52861808919301, 727725798380, 281502766225847, 25842558824741),
//		Hash: '10611afaf7367466'
	}, {
		id: 10,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'deselect',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 129711237815833, 1963830537585, 314542255413855, 229302225916816),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 120141536418463, 112433241923709, 20612604618394, 5041284142348),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 229542514913586, 109425501111, 14437153714876, 8217324812915),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 19491133257128, 179617505535, 7233396825569, 29410463016012),
//		Hash: '10611afaf7367466'
	}, {
		id: 11,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'detailButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 1166830432490, 1360053617307, 89671965118937, 13676494720927),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 3345804525109, 66742440216531, 184912629425000, 1242547226290),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 16534227378414, 4033200627563, 29964102536614, 22651421722318),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 212302129762, 5219357013469, 241572878725872, 1638814811170),
//		Hash: '10611afaf7367466'
	}, {
		id: 12,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'editButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 170071527130415, 264222169930923, 2484128957291, 3215971184992),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 1592956927844, 22126707019610, 225281351716056, 1871269035233),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 23731324011844, 12510535815773, 209471182519123, 313191378414457),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 179921658420863, 1487175716933, 201261269323351, 199101430718873),
//		Hash: '10611afaf7367466'
	}, {
		id: 13,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'faq',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 196793274230058, 18505222888205, 15432193710185, 9988567826801),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 307581805125636, 126582760030493, 2555283852024, 249052096916132),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 29858528131521, 26730137213631, 197381347321747, 2965712987540),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 21627473818065, 5272419915161, 2289192956414, 104372634422414),
//		Hash: '10611afaf7367466'
	}, {
		id: 14,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'findFunction',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 20909199525142, 390473225506, 267511774821876, 305112122823712),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 1482373576443, 4796543425292, 235731101420406, 26279142882280),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 1388636213327, 1471306012750, 2978457825653, 1797131799226),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 201022931722125, 24464560821615, 8336523113296, 32113189298627),
//		Hash: '10611afaf7367466'
	}, {
		id: 15,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'graphButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 4232586313406, 148423121123631, 292841705015235, 13737125413272),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 280352178821196, 339623916480, 83031255620770, 17153107442244),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 19547919118983, 86283128011072, 113652699112460, 41802104723041),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 58181783531567, 139333079031157, 62923145821128, 13859235495477),
//		Hash: '10611afaf7367466'
	}, {
		id: 16,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'literature',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 15142247293454, 90163186030531, 7991449532465, 6838319332908),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 1148532115158, 78233062713166, 224581079628962, 179231513421187),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 215401737819685, 112482980520618, 17798546226347, 26631122325895),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 1614339187988, 245042923022530, 8510106173001, 206042229527432),
//		Hash: '10611afaf7367466'
	}, {
		id: 17,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'logon',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 206942582717643, 24078648030871, 17322321124074, 307002263828509),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 28406793229264, 158082127914232, 3509740123431, 16723296025599),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 10446304427487, 21834123972419, 5302324243629, 2356217375806),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 267582615320332, 5392481114475, 2742952441745, 20504110439888),
//		Hash: '10611afaf7367466'
	}, {
		id: 18,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'monographia',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 7730655027391, 266763206620652, 66762498632566, 119582604659),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 700971317969, 701654723001, 365365630937, 19663269695874),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 71522094716846, 229011445713575, 13939370416337, 25273129716578),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 1104074886420, 17394740712363, 21871100914174, 159842253320630),
//		Hash: '10611afaf7367466'
	}, {
		id: 19,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'multimedia',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 2117366302578, 326202298530959, 27437481529549, 10924140431805),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 67382035613799, 10154979628674, 25316977022407, 134061949312788),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 20436168378329, 94951878719476, 45931675215568, 8610185765099),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 9731200622193, 78792511016772, 5788719812186, 14801638026476),
//		Hash: '10611afaf7367466'
	}, {
		id: 20,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'newButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 3971548031852, 15456260783400, 94433101512755, 160901067014542),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 1356019950335, 63642848527091, 149582033514755, 8821285219606),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 103062260815784, 139691569919090, 2670104121342, 26105401614987),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 11684113952758, 4949254329586, 11510317327967, 610726532404),
//		Hash: '10611afaf7367466'
	}, {
		id: 21,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'observations',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 19601878827464, 2526466764, 84223256228847, 124741342021689),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 39031986716143, 114252024827093, 163412785720742, 135662685632545),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 3552326432361, 264041747321751, 190642709528506, 105812393019213),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 295471292119791, 7841498915686, 54141859611736, 4497254311127),
//		Hash: '10611afaf7367466'
	}, {
		id: 22,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'output',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 154531212912814, 225791594410246, 187401297912248, 230941123131810),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 6272773531577, 18490836127904, 301931884029822, 18498170531542),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 17426210152454, 6724754023346, 232932025629139, 112893038132492),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 11472753320654, 11432662525161, 2500822015565, 21461217815338),
//		Hash: '10611afaf7367466'
	}, {
		id: 23,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'passwordButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 169842158122342, 317621667915167, 229771786923306, 6342495422597),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 192471909429791, 215232934032310, 215361111717847, 1928344545864),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 5481213006411, 202531929210343, 237222369816543, 2409727951582),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 297814832374, 296154193741, 161011959020044, 140221156419470),
//		Hash: '10611afaf7367466'
	}, {
		id: 24,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'profile',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 200601248222463, 39872033428107, 227445523798, 20908543330212),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 96362180423665, 22060314319294, 157442477331933, 10528179857173),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 25972289812881, 93561545230896, 114223039913105, 31158305742928),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 36802870721413, 144792272111302, 186263058010895, 259932144125046),
//		Hash: '10611afaf7367466'
	}, {
		id: 25,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'projects',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 25947246642272, 31481695527927, 148161854427269, 19522007815501),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 6936813422838, 2401243766649, 299061084328786, 57011295628439),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 7037233297577, 207722300419772, 220842358922897, 21076233336302),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 191252457713158, 9559652228063, 160812391030475, 76423237723337),
//		Hash: '10611afaf7367466'
	}, {
		id: 26,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'saveButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 5365966031217, 25082277330254, 524438873205, 130101602412291),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 2385723118437, 25653821327184, 133901263024516, 232722190525882),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 19136148276608, 304863083021477, 3119930132188, 2693018527500),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 92381977026696, 60992590114589, 64582173318194, 63171471811753),
//		Hash: '10611afaf7367466'
	}, {
		id: 27,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'saveFunction',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 16579435626392, 18891235714712, 162911731231439, 2246354909845),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 31108984816290, 19927892820780, 301342161819794, 32202980321427),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 2688732568664, 2562246945817, 88221946222891, 168873202624486),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 25073216198780, 221391706021344, 26261677919000, 25487233416464),
//		Hash: '10611afaf7367466'
	}, {
		id: 28,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'select',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 27295287410947, 31012819818552, 3822157516401, 18626251794806),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 244181581222489, 16756325415846, 32060190019782, 178041427824364),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 516241502197, 28801686432749, 268251017711627, 30149184124852),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 128902824830194, 46151164111158, 12251325623557, 20041152322739),
//		Hash: '10611afaf7367466'
	}, {
		id: 29,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'showcase',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 129712227118133, 24451710523844, 101751423320620, 18305150003467),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 27957313625984, 20502571210192, 670175622, 22128407927710),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 94462147222683, 18975230095852, 28435311630742, 12288140024669),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 75391439924642, 267153152622738, 32122444715782, 74233274326146),
//		Hash: '10611afaf7367466'
	}, {
		id: 30,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'sort',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 305912883021166, 311651701322182, 26378807019437, 27047793711179),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 12158781724148, 5445144317339, 234271070825702, 1261948131724),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 25819407325054, 590319314682, 296262377527599, 39811321325483),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 26579927520946, 6522873016342, 13447121565052, 299271761517935),
//		Hash: '10611afaf7367466'
	}, {
		id: 31,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'specimens',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 8444157866590, 235971669514567, 32384200137002, 239052626531237),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 1750999423603, 234801981721968, 29028319135506, 1976732883169),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 31321167519636, 2995172407677, 30476245504682, 507166553473),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 233592231618576, 838917300888, 22931364826008, 15481088229926),
//		Hash: '10611afaf7367466'
	}, {
		id: 32,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'syndication',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 17926325493031, 859821194870, 162472120518215, 309052645228642),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 326491547929341, 301081255413973, 4476163814531, 109012277820645),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 122071519425798, 13544998323218, 134842255020208, 194272895011914),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 45381261993, 1754257223241, 296551832628097, 299271547120589),
//		Hash: '10611afaf7367466'
	}, {
		id: 33,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'tableButton',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 2903281706602, 25671401125486, 233222322412101, 12119882528222),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 2373119518650, 112831583024104, 2844759154763, 96101483830090),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 3097932137414, 241061387224060, 976927883858, 105141260249),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 215702356227123, 55882102715257, 22986102232103, 41363051821007),
//		Hash: '10611afaf7367466'
	}, {
		id: 34,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'taxonomy',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 3858656326958, 161021550022719, 77811459024829, 1652332141757),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 250012355819467, 93652892623526, 305371180317390, 4457241549456),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 204742515610254, 20023171188459, 66601254730507, 23909196933982),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 27168469718466, 2663033728064, 234451849931644, 267222138930027),
//		Hash: '10611afaf7367466'
	}, {
		id: 35,
		Client: {
			Fingerprint: '3f856411fd124113',
			PreviousFingerprint: '3f856411fd124113',
			Referrer: 'www.google.com',
			RenderingEngine: 'WebKit'
		},
		Interface: 'wiki',
		FirstQuartile: {
			Quartile: randomService.sfc32(100, 600000, 28015235798704, 19131482919711, 100041740721385, 31927654518695),
			Step: 1,
			Tendency: -1
		},
		SecondQuartile: {
			Quartile: randomService.sfc32(100, 600000, 9193238834555, 326861616519673, 29233499224268, 216431938626614),
			Step: 1,
			Tendency: -1
		},
		ThirdQuartile: {
			Quartile: randomService.sfc32(100, 600000, 28270216438948, 73472379419665, 2118519180336, 26416926719152),
			Step: 1,
			Tendency: -1
		},
		Samples: randomService.sfc32(1, 500, 155881834332546, 163701924024967, 6989600918683, 92691750217498),
//		Hash: '10611afaf7367466'
	}
];
