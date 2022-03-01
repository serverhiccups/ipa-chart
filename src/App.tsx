import { h, Component, createContext } from "preact";

import Controller from "./controllers/Controller";
import { AudioPlayer, AudioPlayerContext } from "./AudioPlayer";

import Navbar from "./views/Navbar";
import MainConsonants from "./views/MainConsonants";
import Vowels from "./views/Vowels";
import FaqHelp from "./views/FaqHelp";

import style from "./styles/app.module.scss";
import WipWarning from "./views/WipWarning";
import NonPulmonic from "./views/NonPulmonic";
import OtherSymbols from "./views/OtherSymbols";

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
					<Navbar />
					<div class={style.charts}>
						<WipWarning />
						<MainConsonants
							model={this.controller.ipaSymbolModel}
						></MainConsonants>
						<Vowels model={this.controller.ipaSymbolModel}></Vowels>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "1rem",
							}}
						>
							<NonPulmonic model={this.controller.ipaSymbolModel} />
							<OtherSymbols
								model={this.controller.ipaSymbolModel}
							></OtherSymbols>
						</div>
						<FaqHelp />
					</div>
				</div>
			</AudioPlayerContext.Provider>
		);
	}
}
