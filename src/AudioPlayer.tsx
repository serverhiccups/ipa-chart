import { Context, createContext } from "preact";

export class AudioPlayer {
	element: HTMLAudioElement;
	playing: boolean;

	constructor() {
		this.element = new Audio();
		this.playing = false;
	}

	play(file: string) {
		this.element.addEventListener("canplay", () => {
			this.playing = true;
			this.element.play();
		});
		this.element.addEventListener("ended", () => {
			this.playing = false;
		});
		this.element.src = file;
		this.element.load();
	}
}

export const AudioPlayerContext: Context<AudioPlayer> = createContext(
	new AudioPlayer()
);
