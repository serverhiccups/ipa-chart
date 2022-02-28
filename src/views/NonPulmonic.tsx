import { h, Fragment } from "preact";
import IPASymbolModel from "../models/IPASymbolModel";
import IPASymbolView from "./IPASymbolView";

import styles from "../styles/non-pulmonic.module.scss";

interface Props {
	model: IPASymbolModel;
}

export default function NonPulmonic(props: Props) {
	return (
		<div class={styles.nonpulmonic}>
			<span class={styles.title}>Non-Pulmonic Consonants</span>
			{props.model.data.labels.nonpulmonic.map((l, i) => {
				return (
					<span
						class={styles.label}
						style={{
							gridColumn: i + 1,
						}}
					>
						{l}
					</span>
				);
			})}
			{props.model.data.nonpulmonic.clicks.map((c, i) => {
				return (
					<div
						class={styles.item}
						style={{
							gridColumn: 1,
							gridRow: i + 3,
						}}
					>
						<IPASymbolView symbol={c}></IPASymbolView>
						<span>{c.description ? c.description : c.name}</span>
					</div>
				);
			})}
			{props.model.data.nonpulmonic.implosives.map((c, i) => {
				return (
					<div
						class={styles.item}
						style={{
							gridColumn: 2,
							gridRow: i + 3,
						}}
					>
						<IPASymbolView symbol={c}></IPASymbolView>
						<span>{c.description ? c.description : c.name}</span>
					</div>
				);
			})}
			{props.model.data.nonpulmonic.ejectives.map((c, i) => {
				return (
					<div
						class={styles.item}
						style={{
							gridColumn: 3,
							gridRow: i + 3,
						}}
					>
						<IPASymbolView symbol={c}></IPASymbolView>
						<span>{c.description ? c.description : c.name}</span>
					</div>
				);
			})}
		</div>
	);
}
