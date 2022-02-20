import dataFile from "../../data/symbol-data.json";

interface IPASymbolData {
	consonants: Array<IPASymbolMainConsonant>;
	vowels: Array<IPASymbolVowel>;
	impossibleBlanks: Array<IPASymbolBlank>;
	possibleBlanks: Array<IPASymbolBlank>;
	labels: {
		places: Array<string>;
		manners: Array<string>;
	};
}

export interface IPASymbolBlank {
	row: number;
	column: number;
	width: number;
}

export interface IPASymbolMainConsonant extends IPASymbol {
	row: number;
	column: number;
	width?: number;
	// "left" or "right"
	align?: string;
}

export interface IPASymbolVowel extends IPASymbol {
	row: number;
	place: number;
	rounded: boolean;
}

export interface IPASymbol {
	kind: string;
	name: string;
	soundFile?: string;
	character: string;
}

/*
Properties of all symbols:
 * Name
 * Sound File
 * Symbol

Properties of main consonants
 * Position in the table (start and stop columns)
 * Manner and place of articulation

Properties of vowels
 * Position in vowel chart
*/

export default class IPASymbolModel {
	data: IPASymbolData;

	constructor() {
		this.data = dataFile;
	}
}
