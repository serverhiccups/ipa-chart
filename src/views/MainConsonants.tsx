import { h, Component } from "preact";
import { css, cx } from "@emotion/css";

import Controller from "../controllers/Controller";
import IPASymbolModel from "../models/IPASymbolModel";
import IPASymbolView from "./IPASymbolView";

import style from "../styles/main-consonants.module.scss";

interface Props {
	model: IPASymbolModel;
}

export default class MainConsonants extends Component<Props> {
	model: IPASymbolModel;

	constructor(props: Props) {
		super(props);
		this.model = props.model;
	}

	render() {
		return (
			<div class={style.mainconsonants}>
				<div class={style.chart}>
					<div class={style.title}>
						<span>Consonants</span>
					</div>
					{this.model.data.labels.cplaces.map((l, i) => {
						return (
							<div class={style.toplabel} id={style["toplabel-" + (i + 1)]}>
								{l}
							</div>
						);
					})}
					{this.model.data.labels.cmanners.map((l, i) => {
						return (
							<div class={style.sidelabel} id={style["sidelabel-" + (i + 1)]}>
								{l}
							</div>
						);
					})}
					{this.model.data.consonants.map((c) => {
						return (
							<IPASymbolView
								style={{
									gridColumnStart: c.column + 2,
									gridColumnEnd:
										c.column + 2 + (c.width != undefined ? c.width : 1),
									gridRow: c.row + 2,
								}}
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
								class={style.possibleblank}
								style={{
									gridColumnStart: b.column + 2,
									gridColumnEnd:
										b.column + 2 + (b.width != undefined ? b.width : 1),
									gridRow: b.row + 2,
								}}
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
