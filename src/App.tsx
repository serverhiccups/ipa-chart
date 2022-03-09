import { h } from "preact";
import { useState } from "preact/hooks";

import { AudioPlayer, AudioPlayerContext } from "./AudioPlayer";
import IPASymbolModel from "./models/IPASymbolModel";

import Navbar from "./views/Navbar";
import MainConsonants from "./views/MainConsonants";
import Vowels from "./views/Vowels";
import FaqHelp from "./views/FaqHelp";
import WipWarning from "./views/WipWarning";
import NonPulmonic from "./views/NonPulmonic";
import OtherSymbols from "./views/OtherSymbols";

import style from "./styles/app.module.scss";

const audioPlayer = new AudioPlayer();

export default function App() {
	const [symbolModel] = useState(new IPASymbolModel());

	return (
		<AudioPlayerContext.Provider value={audioPlayer}>
			<div id="app">
				<Navbar />
				<div class={style.charts}>
					{/* <WipWarning /> */}
					<MainConsonants model={symbolModel}></MainConsonants>
					<Vowels model={symbolModel}></Vowels>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
						}}
					>
						<NonPulmonic model={symbolModel} />
						<OtherSymbols model={symbolModel}></OtherSymbols>
					</div>
					<FaqHelp />
				</div>
			</div>
		</AudioPlayerContext.Provider>
	);
}
