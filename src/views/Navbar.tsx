import { h } from "preact";

import style from "../styles/navbar.module.scss";

export default function Navbar() {
	return (
		<nav class={style.navbar}>
			<span>The International Phonetic Alphabet</span>
			<span>
				Website design by <a href="https://hiccup01.com">serverhiccups</a>.
			</span>
			<span>
				Sounds are works of <a href="#soundrights">various users</a>, and
				licensed under CC BY-SA 3.0.
			</span>
		</nav>
	);
}
