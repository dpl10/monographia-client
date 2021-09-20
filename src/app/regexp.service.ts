/* imports from node_modules */
import XRegExp from 'xregexp';
import { isValid } from 'date-fns';
import { Injectable } from '@angular/core';
/* unicode for regular expressions... because JavaScript is painful. */
const u = {
	Latin: '\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u01FF', /* https://www.utf8-chartable.de/unicode-utf8-table.pl; grep 'LATIN' latin.txt | awk '{print $1}' | perl -pe 's/U\+/0x/' | awk --non-decimal-data 'BEGIN{x=0;}{if($1""==x""){print("-")}else{print(y"\n"$1)};x=sprintf("0x%04X",$1+1);y=$1}END{print(y)}' | perl -pe 's/0x/\\\\u/' | tr -d '\n' | perl -pe 'tr/-/-/s' */
	LatinLowerCase: '\\u0061-\\u007A\\u00DF-\\u00F6\\u00F8-\\u00FF\\u0101\\u0101\\u0103\\u0103\\u0105\\u0105\\u0107\\u0107\\u0109\\u0109\\u010B\\u010B\\u010D\\u010D\\u010F\\u010F\\u0111\\u0111\\u0113\\u0113\\u0115\\u0115\\u0117\\u0117\\u0119\\u0119\\u011B\\u011B\\u011D\\u011D\\u011F\\u011F\\u0121\\u0121\\u0123\\u0123\\u0125\\u0125\\u0127\\u0127\\u0129\\u0129\\u012B\\u012B\\u012D\\u012D\\u012F\\u012F\\u0131\\u0131\\u0133\\u0133\\u0135\\u0135\\u0137-\\u0138\\u013A\\u013A\\u013C\\u013C\\u013E\\u013E\\u0140\\u0140\\u0142\\u0142\\u0144\\u0144\\u0146\\u0146\\u0148-\\u0149\\u014B\\u014B\\u014D\\u014D\\u014F\\u014F\\u0151\\u0151\\u0153\\u0153\\u0155\\u0155\\u0157\\u0157\\u0159\\u0159\\u015B\\u015B\\u015D\\u015D\\u015F\\u015F\\u0161\\u0161\\u0163\\u0163\\u0165\\u0165\\u0167\\u0167\\u0169\\u0169\\u016B\\u016B\\u016D\\u016D\\u016F\\u016F\\u0171\\u0171\\u0173\\u0173\\u0175\\u0175\\u0177\\u0177\\u017A\\u017A\\u017C\\u017C\\u017E-\\u0180\\u0183\\u0183\\u0185\\u0185\\u0188\\u0188\\u018C-\\u018D\\u0192\\u0192\\u0195\\u0195\\u0199-\\u019B\\u019E\\u019E\\u01A1\\u01A1\\u01A3\\u01A3\\u01A5\\u01A5\\u01A8\\u01A8\\u01AB\\u01AB\\u01AD\\u01AD\\u01B0\\u01B0\\u01B4\\u01B4\\u01B6\\u01B6\\u01B9-\\u01BA\\u01BD\\u01BD\\u01C6\\u01C6\\u01C9\\u01C9\\u01CC\\u01CC\\u01CE\\u01CE\\u01D0\\u01D0\\u01D2\\u01D2\\u01D4\\u01D4\\u01D6\\u01D6\\u01D8\\u01D8\\u01DA\\u01DA\\u01DC-\\u01DD\\u01DF\\u01DF\\u01E1\\u01E1\\u01E3\\u01E3\\u01E5\\u01E5\\u01E7\\u01E7\\u01E9\\u01E9\\u01EB\\u01EB\\u01ED\\u01ED\\u01EF-\\u01F0\\u01F3\\u01F3\\u01F5\\u01F5\\u01F9\\u01F9\\u01FB\\u01FB\\u01FD\\u01FD\\u01FF\\u01FF', /* https://www.utf8-chartable.de/unicode-utf8-table.pl; grep 'LATIN SMALL' latin.txt | awk '{print $1}' | perl -pe 's/U\+/0x/' | awk --non-decimal-data 'BEGIN{x=0;}{if($1""==x""){print("-")}else{print(y"\n"$1)};x=sprintf("0x%04X",$1+1);y=$1}END{print(y)}' | perl -pe 's/0x/\\\\u/' | tr -d '\n' | perl -pe 'tr/-/-/s' */
	LatinUpperCase: '\\u0041-\\u005A\\u00C0-\\u00D6\\u00D8-\\u00DE\\u0100\\u0100\\u0102\\u0102\\u0104\\u0104\\u0106\\u0106\\u0108\\u0108\\u010A\\u010A\\u010C\\u010C\\u010E\\u010E\\u0110\\u0110\\u0112\\u0112\\u0114\\u0114\\u0116\\u0116\\u0118\\u0118\\u011A\\u011A\\u011C\\u011C\\u011E\\u011E\\u0120\\u0120\\u0122\\u0122\\u0124\\u0124\\u0126\\u0126\\u0128\\u0128\\u012A\\u012A\\u012C\\u012C\\u012E\\u012E\\u0130\\u0130\\u0132\\u0132\\u0134\\u0134\\u0136\\u0136\\u0139\\u0139\\u013B\\u013B\\u013D\\u013D\\u013F\\u013F\\u0141\\u0141\\u0143\\u0143\\u0145\\u0145\\u0147\\u0147\\u014A\\u014A\\u014C\\u014C\\u014E\\u014E\\u0150\\u0150\\u0152\\u0152\\u0154\\u0154\\u0156\\u0156\\u0158\\u0158\\u015A\\u015A\\u015C\\u015C\\u015E\\u015E\\u0160\\u0160\\u0162\\u0162\\u0164\\u0164\\u0166\\u0166\\u0168\\u0168\\u016A\\u016A\\u016C\\u016C\\u016E\\u016E\\u0170\\u0170\\u0172\\u0172\\u0174\\u0174\\u0176\\u0176\\u0178-\\u0179\\u017B\\u017B\\u017D\\u017D\\u0181-\\u0182\\u0184\\u0184\\u0186-\\u0187\\u0189-\\u018B\\u018E-\\u0191\\u0193-\\u0194\\u0196-\\u0198\\u019C-\\u019D\\u019F-\\u01A0\\u01A2\\u01A2\\u01A4\\u01A4\\u01A7\\u01A7\\u01A9\\u01A9\\u01AC\\u01AC\\u01AE-\\u01AF\\u01B1-\\u01B3\\u01B5\\u01B5\\u01B7-\\u01B8\\u01BC\\u01BC\\u01C4-\\u01C5\\u01C7-\\u01C8\\u01CA-\\u01CB\\u01CD\\u01CD\\u01CF\\u01CF\\u01D1\\u01D1\\u01D3\\u01D3\\u01D5\\u01D5\\u01D7\\u01D7\\u01D9\\u01D9\\u01DB\\u01DB\\u01DE\\u01DE\\u01E0\\u01E0\\u01E2\\u01E2\\u01E4\\u01E4\\u01E6\\u01E6\\u01E8\\u01E8\\u01EA\\u01EA\\u01EC\\u01EC\\u01EE\\u01EE\\u01F1-\\u01F2\\u01F4\\u01F4\\u01F6-\\u01F8\\u01FA\\u01FA\\u01FC\\u01FC\\u01FE\\u01FE', /* https://www.utf8-chartable.de/unicode-utf8-table.pl; grep 'LATIN CAPITAL' latin.txt | awk '{print $1}' | perl -pe 's/U\+/0x/' | awk --non-decimal-data 'BEGIN{x=0;}{if($1""==x""){print("-")}else{print(y"\n"$1)};x=sprintf("0x%04X",$1+1);y=$1}END{print(y)}' | perl -pe 's/0x/\\\\u/' | tr -d '\n' | perl -pe 'tr/-/-/s' */
	dash: '\\p{Dash_Punctuation}',
	letter: '\\p{Letter}',
	letterLowerCase: '\\p{Lowercase_Letter}',
	letterUpperCase: '\\p{Uppercase_Letter}',
	number: '\\p{Number}',
	punctuation: '\\p{Punctuation}',
	punctuationClose: '\\p{Close_Punctuation}',
	punctuationConnector: '\\p{Connector_Punctuation}',
	punctuationFinal: '\\p{Final_Punctuation}',
	punctuationInitial: '\\p{Initial_Punctuation}',
	punctuationOpen: '\\p{Open_Punctuation}',
	punctuationOther: '\\p{Other_Punctuation}',
	separator: '\\p{Separator}',
	separatorSpace: '\\p{Space_Separator}',
	symbol: '\\p{Symbol}'
};
const U = u.dash + u.letter + u.number + u.punctuation + u.symbol;
/* other reusable RegExp fragments */
const styleColor = ' style="color: rgb[0-9, ()]{9,15};"{0,1}'; /* attempts to exactly specify color values failed (perhaps due to ts parenthesis escapes) */
/* regular expressions */
export const BIGINT: RegExp = XRegExp('^([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-8][0-9]{4}|9[0-8][0-9]{3}|99[0-8][0-9]{2}|999[0-8][0-9]|9999[0-9]|[1-8][0-9]{5}|9[0-8][0-9]{4}|99[0-8][0-9]{3}|999[0-8][0-9]{2}|9999[0-8][0-9]|99999[0-9]|[1-8][0-9]{6}|9[0-8][0-9]{5}|99[0-8][0-9]{4}|999[0-8][0-9]{3}|9999[0-8][0-9]{2}|99999[0-8][0-9]|999999[0-9]|[1-8][0-9]{7}|9[0-8][0-9]{6}|99[0-8][0-9]{5}|999[0-8][0-9]{4}|9999[0-8][0-9]{3}|99999[0-8][0-9]{2}|999999[0-8][0-9]|9999999[0-9]|[1-8][0-9]{8}|9[0-8][0-9]{7}|99[0-8][0-9]{6}|999[0-8][0-9]{5}|9999[0-8][0-9]{4}|99999[0-8][0-9]{3}|999999[0-8][0-9]{2}|9999999[0-8][0-9]|99999999[0-9]|[1-8][0-9]{9}|9[0-8][0-9]{8}|99[0-8][0-9]{7}|999[0-8][0-9]{6}|9999[0-8][0-9]{5}|99999[0-8][0-9]{4}|999999[0-8][0-9]{3}|9999999[0-8][0-9]{2}|99999999[0-8][0-9]|999999999[0-9]|[1-8][0-9]{10}|9[0-8][0-9]{9}|99[0-8][0-9]{8}|999[0-8][0-9]{7}|9999[0-8][0-9]{6}|99999[0-8][0-9]{5}|999999[0-8][0-9]{4}|9999999[0-8][0-9]{3}|99999999[0-8][0-9]{2}|999999999[0-8][0-9]|9999999999[0-9]|[1-8][0-9]{11}|9[0-8][0-9]{10}|99[0-8][0-9]{9}|999[0-8][0-9]{8}|9999[0-8][0-9]{7}|99999[0-8][0-9]{6}|999999[0-8][0-9]{5}|9999999[0-8][0-9]{4}|99999999[0-8][0-9]{3}|999999999[0-8][0-9]{2}|9999999999[0-8][0-9]|99999999999[0-9]|1[0-7][0-9]{11}|18[0-3][0-9]{10}|184[0-3][0-9]{9}|1844[0-5][0-9]{8}|18446[0-6][0-9]{7}|184467[0-3][0-9]{6}|1844674[0-3][0-9]{5}|184467440[0-6][0-9]{3}|1844674407[0-2][0-9]{2}|18446744073[0-6][0-9]|1844674407370)$') as RegExp;
export const DOI: RegExp = XRegExp('^(10[.][0-9]{4,}(?:[.][0-9]+)*/(?:(?![%"#? ])\\S)+)$') as RegExp; /* from https://github.com/BeagleLab/doi-regex */
export const INT: RegExp = XRegExp('^([1-9]|[1-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|[1-9][0-9]{4}|[1-9][0-9]{5}|[1-9][0-9]{6}|[1-9][0-9]{7}|[1-9][0-9]{8}|[1-3][0-9]{9}|4[0-1][0-9]{8}|42[0-8][0-9]{7}|429[0-3][0-9]{6}|4294[0-8][0-9]{5}|42949[0-5][0-9]{4}|429496[0-6][0-9]{3}|4294967[0-1][0-9]{2}|42949672[0-8][0-9]|429496729[0-5])$') as RegExp;
export const ISBN: RegExp = XRegExp('^(?=[0-9X]{10}$|(?=(?:[0-9]+-){3})[-\ 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+-){4})[-\ 0-9]{17}$)(?:97[89]-)?[0-9]{1,5}-[0-9]+-[0-9]+-[0-9X]$') as RegExp;
export const ISSN: RegExp = XRegExp('^[0-9]{4}-[0-9]{3}[0123456789X]$') as RegExp;
export const MEDIUMINT: RegExp = XRegExp('^([1-9]|[1-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|[1-9][0-9]{4}|[1-9][0-9]{5}|[1-9][0-9]{6}|1[0-5][0-9]{6}|16[0-6][0-9]{5}|167[0-6][0-9]{4}|1677[0-6][0-9]{3}|16777[0-1][0-9]{2}|1677720[0-9]|1677721[0-5])$') as RegExp;
export const SMALLINT: RegExp = XRegExp('^([1-9]|[1-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$') as RegExp;
export const TINYINT: RegExp = XRegExp('^([1-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$') as RegExp;
export const URL: RegExp = XRegExp('^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$', 'i') as RegExp; /* from https://gist.github.com/dperini/729294 Copyright (c) 2010-2018 Diego Perini (http://www.iport.it) [MIT license] */
export const a: RegExp = XRegExp('<a href="[' + U + ']{1,}" target="_blank">([' + U + ' ]{1,})</a>', 'g') as RegExp;
export const antiAlphaNumericSymbolDash: RegExp = XRegExp('[^\\p{Letter}\\p{Number}\\p{Symbol}-]', 'g') as RegExp;
export const br: RegExp = XRegExp('<br>', 'g') as RegExp;
export const closingHTML: RegExp = XRegExp('</.+?>', 'g') as RegExp;
export const dash: RegExp = XRegExp('[\\p{Dash_Punctuation}]', 'g') as RegExp;
export const domain: RegExp = XRegExp('^http[s]{0,1}:\\/\\/([A-z0-9][A-z0-9.-]{1,251}[A-z0-9])') as RegExp;
export const em: RegExp = XRegExp('<em' + styleColor + '>([' + U + ' ]{1,})</em>', 'g') as RegExp;
export const eMail: RegExp = XRegExp('^(([0-9a-zA-Z]{1,}[-._+&]){0,}[0-9a-zA-Z]{1,}@([-0-9a-zA-Z]{1,}[.]){1,}[a-zA-Z]{2,6}){0,1}$') as RegExp;
export const forma: RegExp = XRegExp(' f\\. $') as RegExp;
export const hex16: RegExp = XRegExp('^[0-9a-f]{16}$') as RegExp;
export const html: RegExp = XRegExp('<[^/].*?>|</.+?>', 'g') as RegExp;
export const isoDate: RegExp = XRegExp('^([0-9]{4,4})-(0{0,1}([1-9]|1[0-2]))-(0{0,1}([1-9]|[1-2][0-9]|3[0-1]))$') as RegExp;
export const italics: RegExp = XRegExp('</{0,1}i>', 'i') as RegExp;
export const openingHTML: RegExp = XRegExp('<[^/].*?>', 'g') as RegExp;
export const p: RegExp = XRegExp('<p>([' + U + ' ]{1,})</p>', 'g') as RegExp;
export const publicationYear: RegExp = XRegExp('^145[0-9]|14[6-9][0-9]|1[5-9][0-9]{2}|20[0-9]{2}|2100$') as RegExp; /* 1450 (ca. first printed books) through 2100 (if this code has not been updated by then, something has gone horribly wrong) */
export const span: RegExp = XRegExp('<span' + styleColor + '>([' + U + ' ]{1,})</span>', 'g') as RegExp;
export const strong: RegExp = XRegExp('<strong' + styleColor + '>([' + U + ' ]{1,})</strong>', 'g') as RegExp;
export const separator: RegExp = XRegExp('\\p{Separator}+', 'g') as RegExp;
export const sub: RegExp = XRegExp('<sub' + styleColor + '>([' + U + ' ]{1,})</sub>', 'g') as RegExp;
export const subspecies: RegExp = XRegExp(' subsp\\. $') as RegExp;
export const sup: RegExp = XRegExp('<sup' + styleColor + '>([' + U + ' ]{1,})</sup>', 'g') as RegExp;
export const unicode: RegExp = XRegExp('^[' + U + ' ]{1,}$') as RegExp;
export const variety: RegExp = XRegExp(' var\\. $') as RegExp;
@Injectable({
	providedIn: 'root'
})
export class RegexpService {
	constructor(){
	}
	/* public functions: all require test string/object, many require 'least' (l) and 'most' (m) length arguments as well */
	public array(x: Array<any>): boolean {
		return(Object.prototype.toString.call(x) === '[object Array]');
	}
	public dateObject(x: Date): boolean {
		if(Object.prototype.toString.call(x) === '[object Null]'){
			return(true);
		} else {
			return(isValid(x));
		}
	}
	public dateString(x: string): boolean {
		return(isoDate.test(x));
	}
	public doi(x: string): boolean {
		return(DOI.test(x));
	}
	public domainExtract(x: string): string {
		let y: string = '';
		if(x != null){
			const z = domain.exec(x);
			if((z != null) && (z[1] != null)){
				y = z[1];
			}
		}
		return(y);
	}
	public editorHTML(x: string, l: number, m: number): boolean {
		if(x == null){
			return(false);
		} else if((x.length < l) || (x.length > m)){
			return(false);
		} else {
			x = x.replace(a, '$1').replace(br, '').replace(em, '$1').replace(p, '$1').replace(span, '$1').replace(strong, '$1').replace(sub, '$1').replace(sup, '$1');
			if(openingHTML.test(x) === true){
				return(false);
			} else if(closingHTML.test(x) === true){
				return(false);
			} else {
				return(true);
			}
		}
	}
	public email(x: string): boolean {
		if(x == null){
			return(false);
		} else {
			return(eMail.test(x));
		}
	}
	public inputtext(x: string, l: number, m: number): boolean {
		if(x == null){
			return(false);
		} else if((x.length < l) || (x.length > m)){
			return(false);
		} else {
			return(unicode.test(x));
		}
	}
	public intMySQL(x: number, t: 'TINYINT'|'SMALLINT'|'MEDIUMINT'|'INT'|'BIGINT'): boolean {
		switch(t){
			case 'TINYINT':
				return(TINYINT.test(x.toString()));
			case 'SMALLINT':
				return(SMALLINT.test(x.toString()));
			case 'MEDIUMINT':
				return(MEDIUMINT.test(x.toString()));
			case 'INT':
				return(INT.test(x.toString()));
			case 'BIGINT':
				return(BIGINT.test(x.toString()));
			default:
				return(false);
		}
	}
	public isbn(x: string): boolean {
		if(x == null){
			return(false);
		} else {
			if(ISBN.test(x) === true){
				const C: Array<string> = x.slice(0, -1).replace(/-/g, '').split('');
				if(C.length === 9){
					let c: number = C.reverse().reduce(((total: number, current: string, index: number): number => {
						return(total+(parseInt(current, 10)*(index+2)));
					}), 0)%11;
					if(c > 0){
						c = 11-c;
					}
					let s: string;
					if(c === 10){
						s = 'X';
					} else {
						s = c.toString();
					}
					return(x.slice(-1) === s);
				} else if(C.length === 12){
					let c: number = C.reduce(((total: number, current: string, index: number): number => {
						return(total+(parseInt(current, 10)*(index%2*2+1)));
					}), 0)%10;
					if(c > 0){
						c = 10-c;
					}
					return(x.slice(-1) === c.toString());
				} else {
					return(false);
				}
			} else {
				return(false);
			}
		}
	}
	public issn(x: string): boolean {
		if(x == null){
			return(false);
		} else {
			if(ISSN.test(x) === true){
				let C = x.slice(0, -1).replace('-', '').split('').reverse().reduce(((total: number, current: string, index: number): number => {
					return(total+(parseInt(current, 10)*(index+2)));
				}), 0)%11;
				if(C > 0){
					C = 11-C;
				}
				let c: string;
				if(C === 10){
					c = 'X';
				} else {
					c = C.toString();
				}
				return(x.slice(-1) === c);
			} else {
				return(false);
			}
		}
	}
	public url(x: string): boolean {
		if(x == null){
			return(false);
		} else {
			return(URL.test(x));
		}
	}
	public xxHashHex(x: string): boolean {
		if(x == null){
			return(false);
		} else {
			return(hex16.test(x));
		}
	}
	public year(x: string): boolean {
		if(x == null){
			return(false);
		} else {
			return(publicationYear.test(x));
		}
	}
}
