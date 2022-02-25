import { h, Component } from "preact";
import { css } from "@emotion/css";

import Controller from "../controllers/Controller";
import IPASymbolModel from "../models/IPASymbolModel";

import styles from "../styles/vowels.module.scss";
import IPASymbolView from "./IPASymbolView";
const vowelGrid = new URL("../../assets/vowel-grid.svg", import.meta.url);

function centerPoints() {
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

const centers = centerPoints();

interface Props {
	controller: Controller;
}

export default class Vowels extends Component<Props> {
	model: IPASymbolModel;

	constructor(props) {
		super(props);
		this.model = props.controller;
	}

	render() {
		return (
			<div class={styles.vowels}>
				<div class={styles.title}>
					<span>Vowels</span>
				</div>
				{this.props.controller.ipaSymbolModel.data.labels.vtop.map((l, i) => {
					return (
						<div class={styles.toplabel} id={styles["toplabel-" + i]}>
							<span>{l}</span>
						</div>
					);
				})}
				{this.props.controller.ipaSymbolModel.data.labels.vside.map((l, i) => {
					return (
						<div class={styles.sidelabel} id={styles["sidelabel-" + i]}>
							<span>{l}</span>
						</div>
					);
				})}
				<div class={styles.grid}>
					<img
						class={styles.lines}
						src={vowelGrid.toString()}
						alt="The vowel grid chart"
					/>
					{this.props.controller.ipaSymbolModel.data.vowels.map((v) => {
						return (
							<IPASymbolView
								style={{
									gridRow: `row-start ${v.row + 1}  / row-end ${v.row + 1}`,
									gridColumn: "el-left / el-right",
									marginLeft:
										centers[v.place] + (v.rounded ? 1.5 : -1.5) + "rem",
								}}
								symbol={v}
							></IPASymbolView>
						);
					})}
				</div>
			</div>
		);
	}
}
