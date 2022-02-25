import { h, Component } from "preact";
import Controller from "./controllers/Controller";

import Navbar from "./views/Navbar";
import MainConsonants from "./views/MainConsonants";
import Vowels from "./views/Vowels";

import style from "./styles/app.module.scss";

interface Props {
	controller: Controller;
}

export default class App extends Component<Props> {
	controller: Controller;

	constructor(props: Props) {
		super();
		this.controller = props.controller;
	}

	render() {
		return (
			<div id="app">
				<Navbar></Navbar>
				<div class={style.charts}>
					<MainConsonants controller={this.controller}></MainConsonants>
					<Vowels controller={this.controller}></Vowels>
				</div>
			</div>
		);
	}
}
