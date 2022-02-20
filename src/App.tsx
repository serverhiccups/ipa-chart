import m from "mithril";
import Controller from "./controllers/Controller";

import MainConsonants from "./views/MainConsonants";
import Vowels from "./views/Vowels";

import style from "./styles/app.module.scss";

export default class App {
	controller: Controller;

	constructor(controller) {
		this.controller = controller;
	}

	view() {
		return (
			<div id="app">
				<div class={style.charts}>
					<MainConsonants controller={this.controller}></MainConsonants>
					<Vowels controller={this.controller}></Vowels>
				</div>
			</div>
		);
	}
}
