import { h, Component } from "preact";
import { cx } from "@emotion/css";

import { AudioPlayerContext } from "../AudioPlayer";
import { IPASymbol } from "../models/IPASymbolModel";

import styles from "../styles/symbol.module.scss";

interface Props {
	symbol: IPASymbol;
	style?: h.JSX.CSSProperties;
}

export default function IPASymbolView(props: Props) {
	return (
		<AudioPlayerContext.Consumer>
			{(player) => {
				return (
					<div
						{...props}
						className={cx(
							{ [styles.symbol]: true },
							{ [styles.symbolVowel]: props.symbol.kind == "VOWEL" },
							{
								[styles["symbol-left"]]:
									props.symbol.kind == "MAIN_CONSONANT" &&
									//@ts-ignore
									props.symbol.align == "left",
							},
							{
								[styles["symbol-right"]]:
									props.symbol.kind == "MAIN_CONSONANT" &&
									//@ts-ignore
									props.symbol.align == "right",
							}
						)}
						onClick={() => {
							if (props.symbol.audio) {
								player.play(`/sounds/${props.symbol.audio}`);
							}
						}}
						title={props.symbol.name}
					>
						<span>{props.symbol.character}</span>
					</div>
				);
			}}
		</AudioPlayerContext.Consumer>
	);
}
