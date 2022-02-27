import { h, Fragment } from "preact";

import styles from "../styles/wip-warning.module.scss";

export default function WipWarning() {
	if (process.env.NODE_ENV !== "production") return <></>;
	return (
		<div class={styles.wipwarning}>
			<span class={styles.emoji}>⚠️</span>
			<span class={styles.title}>Warning!</span>
			<p>
				This website is currently under construction. Don't hold your breath!
			</p>
		</div>
	);
}
