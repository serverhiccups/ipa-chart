import dataFile from "../../data/symbol-data.json";

interface IPASymbolData {
	consonants: Array<IPASymbolMainConsonant>;
	vowels: Array<IPASymbolVowel>;
	impossibleBlanks: Array<IPASymbolBlank>;
	possibleBlanks: Array<IPASymbolBlank>;
	nonpulmonic: {
		clicks: Array<IPASymbolAdditionalConsonant>;
		implosives: Array<IPASymbolAdditionalConsonant>;
		ejectives: Array<IPASymbolAdditionalConsonant>;
	};
	labels: {
		cplaces: Array<string>;
		cmanners: Array<string>;
		vtop: Array<string>;
		vside: Array<string>;
		nonpulmonic: Array<string>;
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

export interface IPASymbolAdditionalConsonant extends IPASymbol {
	description?: string;
}

export interface IPASymbol {
	kind: string;
	name: string;
	audio?: string;
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
