//@ts-nocheck
import { createHash } from "https://deno.land/std/node/crypto.ts";

const md5 = (input: string) => createHash("md5").update(input).digest("hex");

const slugify = (s: string) => s.replace(/\s+/g, "_");

let symbolData = JSON.parse(await Deno.readTextFile("./data/symbol-data.json"));

let wikiData = JSON.parse(await Deno.readTextFile("./scripts/wiki-data.json"));

interface symb {
	name: string;
	character: string;
	audio?: string;
}

function downloadFromName(path: string): string {
	path = slugify(path);
	let hash = md5(path);
	return `https://upload.wikimedia.org/wikipedia/commons/${
		hash[0]
	}/${hash.slice(0, 2)}/${path}`;
}

let urls: Array<{ current: string; newname: string }> = [];

const findMatch = (res: Array<symb>, c: symb) => {
	const i = wikiData.find((e: any) => e.symbols.includes(c.character));
	if (i != undefined) {
		res.push({ ...c, audio: c.name.replace("/", "-") + ".ogg" });
		try {
			Deno.lstatSync("./assets/sounds/" + c.name.replace("/", "-") + ".ogg");
		} catch (e) {
			urls.push({
				current: i.audio,
				newname: c.name.replace("/", "-") + ".ogg",
			});
		}
	}
	return res;
};

symbolData.vowels = symbolData.vowels.reduce(findMatch, []);
symbolData.consonants = symbolData.consonants.reduce(findMatch, []);
symbolData.nonpulmonic.clicks = symbolData.nonpulmonic.clicks.reduce(
	findMatch,
	[]
);
symbolData.nonpulmonic.implosives = symbolData.nonpulmonic.implosives.reduce(
	findMatch,
	[]
);
symbolData.nonpulmonic.ejectives = symbolData.nonpulmonic.ejectives.reduce(
	findMatch,
	[]
);
symbolData.others = symbolData.others.reduce(findMatch, []);

await Deno.writeTextFile("./symbol-data-new.json", JSON.stringify(symbolData));

await Promise.allSettled(
	urls.map(async (u: { current: string; newname: string }) => {
		console.log("downloading");
		let res = await fetch(downloadFromName(u.current));
		if (res.status != 200) throw new Error("got error when downloading");
		const buf = await res.arrayBuffer();
		try {
			await Deno.writeFile("./assets/sounds/" + u.newname, new Uint8Array(buf));
		} catch (e) {
			console.error(e);
		}
	})
);
