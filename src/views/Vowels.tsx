import { h, Component } from "preact";
import IPASymbolModel from "../models/IPASymbolModel";

import styles from "../styles/vowels.module.scss";
import IPASymbolView from "./IPASymbolView";
const vowelGrid = new URL("../../assets/vowel-grid.svg", import.meta.url);

function centerPoints() {
	const svgWidth = 810;
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
	model: IPASymbolModel;
}

export default function Vowels(props: Props) {
	return (
		<div class={styles.vowels}>
			<div class={styles.title}>
				<span>Vowels</span>
			</div>
			{props.model.data.labels.vtop.map((l, i) => {
				return (
					<div class={styles.toplabel} id={styles["toplabel-" + i]}>
						<span>{l}</span>
					</div>
				);
			})}
			{props.model.data.labels.vside.map((l, i) => {
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
				{props.model.data.vowels.map((v) => {
					return (
						<IPASymbolView
							style={{
								gridRow: `row-start ${v.row + 1}  / row-end ${v.row + 1}`,
								gridColumn: "el-left / el-right",
								marginLeft: centers[v.place] + (v.rounded ? 1.5 : -1.5) + "rem",
							}}
							symbol={v}
						></IPASymbolView>
					);
				})}
			</div>
			<span class={styles.infotext}>
				Where symbols appear in pairs, the one to the right represents a rounded
				vowel.
			</span>
		</div>
	);
}
