import { h, Component, createContext } from "preact";

import Controller from "./controllers/Controller";
import { AudioPlayer, AudioPlayerContext } from "./AudioPlayer";

import Navbar from "./views/Navbar";
import MainConsonants from "./views/MainConsonants";
import Vowels from "./views/Vowels";

import style from "./styles/app.module.scss";

interface Props {
	controller: Controller;
}

export default class App extends Component<Props> {
	controller: Controller;
	audioPlayer: AudioPlayer;

	constructor(props: Props) {
		super(props);
		this.controller = props.controller;
		this.audioPlayer = new AudioPlayer();
	}

	render() {
		return (
			<AudioPlayerContext.Provider value={this.audioPlayer}>
				<div id="app">
					<Navbar></Navbar>
					<div class={style.charts}>
						<MainConsonants
							model={this.controller.ipaSymbolModel}
						></MainConsonants>
						<Vowels model={this.controller.ipaSymbolModel}></Vowels>
					</div>
				</div>
			</AudioPlayerContext.Provider>
		);
	}
}
