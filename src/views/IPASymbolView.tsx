import { h, Component } from "preact";
import { cx } from "@emotion/css";

import { IPASymbol } from "../models/IPASymbolModel";

import styles from "../styles/symbol.module.scss";

interface Props {
	symbol: IPASymbol;
	style: h.JSX.CSSProperties;
}

export default class IPASymbolView extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	play() {
		const u = `/sounds/${this.props.symbol.audio}`;
		// const u = `/sounds/Hot Steppa.mp3`;
		const a: HTMLAudioElement = new Audio(u);
		a.play();
	}

	render() {
		return (
			<div
				{...this.props}
				className={cx(
					{ [styles.symbol]: true },
					{ [styles.symbolVowel]: this.props.symbol.kind == "VOWEL" },
					{
						[styles["symbol-left"]]:
							this.props.symbol.kind == "MAIN_CONSONANT" &&
							//@ts-ignore
							this.props.symbol.align == "left",
					},
					{
						[styles["symbol-right"]]:
							this.props.symbol.kind == "MAIN_CONSONANT" &&
							//@ts-ignore
							this.props.symbol.align == "right",
					}
				)}
				onClick={() => this.play()}
			>
				<span>{this.props.symbol.character}</span>
			</div>
		);
	}
}
