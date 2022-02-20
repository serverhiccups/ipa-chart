import IPASymbolModel from "../models/IPASymbolModel";

export default class Controller {
	ipaSymbolModel: IPASymbolModel;

	constructor() {
		this.ipaSymbolModel = new IPASymbolModel();
	}
}
