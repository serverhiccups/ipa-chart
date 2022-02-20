import m from "mithril";
import { cx } from "@emotion/css";

import { IPASymbol } from "../models/IPASymbolModel";

import style from "../styles/symbol.module.scss";

export default class IPASymbolView {
	symbol: IPASymbol;
	classNames: string;

	constructor(props) {
		this.symbol = props.attrs.symbol;
		this.classNames = props.attrs.class;
	}

	view() {
		return (
			<div
				class={cx(
					{ [style.symbol]: true },
					{ [this.classNames]: true },
					{ [style.symbolVowel]: this.symbol.kind == "VOWEL" },
					{
						[style["symbol-left"]]:
							this.symbol.kind == "MAIN_CONSONANT" &&
							//@ts-ignore
							this.symbol.align == "left",
					},
					{
						[style["symbol-right"]]:
							this.symbol.kind == "MAIN_CONSONANT" &&
							//@ts-ignore
							this.symbol.align == "right",
					}
				)}
			>
				<span>{this.symbol.character}</span>
			</div>
		);
	}
}
