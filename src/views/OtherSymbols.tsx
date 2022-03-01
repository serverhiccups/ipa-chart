import { h, Fragment } from "preact";

import IPASymbolModel from "../models/IPASymbolModel";
import IPASymbolView from "./IPASymbolView";

import styles from "../styles/other-symbols.module.scss";

interface Props {
	model: IPASymbolModel;
	style?: h.JSX.CSSProperties;
}

export default function OtherSymbols(props: Props) {
	return (
		<div class={styles.othersymbols} style={props.style}>
			<span class={styles.title}>Other Symbols</span>
			<div class={styles.list}>
				{props.model.data.others.map((s) => {
					return (
						<div>
							<IPASymbolView symbol={s}></IPASymbolView>
							<span>{s.description ? s.description : s.name}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
