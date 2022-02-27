import { h, Fragment } from "preact";

import styles from "../styles/faq-help.module.scss";

export default function FaqHelp() {
	return (
		<div class={styles.faqhelp}>
			<span class={styles.title}>FAQ / Help</span>
			<ul class={styles.list}>
				<li>
					<span>What is the International Phonetic Phonetic Alpabet?</span>
					<p>
						The International Phonetic Alphabet (IPA) is an alphabet that
						(approximately) gives one letter to each different sounds that
						humans can make. It is used by linguists, language learners, speech
						pathologists and singers all around the globe.
					</p>
				</li>
				<li>
					<span>How do I use this website?</span>
					<p>Click on dark purple square to hear what sound each symbol has.</p>
				</li>
				<li id="#soundrights">
					<span>Who recorded the sounds on this website?</span>
					<p>
						The sounds included are licensed under CC BY-SA 3.0 and are the
						respective works of Peter Isotalo, User:Erutoon, User:TFighterPilot
						and User:Adamsa123.
					</p>
				</li>
				<li>
					<span>Is this website copyrighted?</span>
					<p>
						This website is licensed under Creative Commons BY-SA 4.0. That
						means, in short, that you can adapt this site as you like, as long
						as you provide attribution and your work is also using the same
						license.
					</p>
				</li>
				<li>
					<span>Can I contribute to this site?</span>
					<p>You can contribute to this website on Github.</p>
				</li>
				{/* <li>
					<span>Can I have a biscuit?</span>
					<p>Only if you click here...</p>
				</li> */}
			</ul>
		</div>
	);
}
