import m from "mithril";
import { css, cx } from "@emotion/css";

import Controller from "../controllers/Controller";
import IPASymbolModel from "../models/IPASymbolModel";
import IPASymbolView from "./IPASymbolView";

import style from "../styles/main-consonants.module.scss";

export default class MainConsonants {
	controller: Controller;
	model: IPASymbolModel;

	constructor(props) {
		this.controller = props.attrs.controller;
		this.model = this.controller.ipaSymbolModel;
	}

	view() {
		return (
			<div class={style.mainconsonants}>
				<div class={style.chart}>
					{this.model.data.labels.places.map((l, i) => {
						return (
							<div class={style.toplabel} id={style["toplabel-" + (i + 1)]}>
								{l}
							</div>
						);
					})}
					{this.model.data.labels.manners.map((l, i) => {
						return (
							<div class={style.sidelabel} id={style["sidelabel-" + (i + 1)]}>
								{l}
							</div>
						);
					})}
					{this.model.data.consonants.map((c) => {
						return (
							<IPASymbolView
								class={cx(
									css({
										gridColumnStart: c.column + 2,
										gridColumnEnd:
											c.column + 2 + (c.width != undefined ? c.width : 1),
										gridRow: c.row + 2,
									})
								)}
								symbol={c}
							/>
						);
					})}
					{this.model.data.impossibleBlanks.map((b) => {
						return (
							<div
								class={cx(
									style.impossibleblank,
									css({
										gridColumnStart: b.column + 2,
										gridColumnEnd:
											b.column + 2 + (b.width != undefined ? b.width : 1),
										gridRow: b.row + 2,
									})
								)}
							></div>
						);
					})}
					{this.model.data.possibleBlanks.map((b) => {
						return (
							<div
								class={cx(
									style.possibleblank,
									css({
										gridColumnStart: b.column + 2,
										gridColumnEnd:
											b.column + 2 + (b.width != undefined ? b.width : 1),
										gridRow: b.row + 2,
									})
								)}
							></div>
						);
					})}
				</div>
				<span class={style.infoText}>
					Symbols to the right in a cell are voiced, to the left voiceless.
					Shaded areas denote articulations judged impossible.
				</span>
			</div>
		);
	}
}
