import { css } from "@emotion/css";
import m from "mithril";

import Controller from "../controllers/Controller";
import IPASymbolModel from "../models/IPASymbolModel";

import style from "../styles/vowels.module.scss";
import IPASymbolView from "./IPASymbolView";
const vowelGrid = new URL("../../assets/vowel-grid.svg", import.meta.url);

export default class Vowels {
	controller: Controller;
	model: IPASymbolModel;
	centers: Array<number>;

	constructor(props) {
		this.controller = props.attrs.controller;
		this.model = this.controller.ipaSymbolModel;
		this.centers = this.centerPoints();
	}

	centerPoints() {
		const svgWidth = 810;
		const svgHeight = 610;
		const svgHeightEm = 21;
		const scaleFactor = svgHeightEm / svgWidth;
		const centersPixels = [
			5, 140, 205, 270, 337.5, 405, 470, 505, 540, 572.5, 605, 705, 805,
		];
		let centersEm = centersPixels.map((center) => center * scaleFactor + 2.5);
		return centersEm;
	}

	view() {
		return (
			<div class={style.vowels}>
				<div class={style.grid}>
					<img class={style.lines} src={vowelGrid} alt="The vowel grid chart" />
					{this.model.data.vowels.map((v) => {
						return (
							<IPASymbolView
								class={css({
									gridRow: `row-start ${v.row + 1}  / row-end ${v.row + 1}`,
									gridColumn: "el-left / el-right",
									marginLeft:
										this.centers[v.place] + (v.rounded ? 1.5 : -1.5) + "rem",
								})}
								symbol={v}
							></IPASymbolView>
						);
					})}
				</div>
			</div>
		);
	}
}
