import m from "mithril";

import App from "./App";
import Controller from "./controllers/Controller";

let controller = new Controller();
let app = new App(controller);

m.route(document.body, "/", {
	"/": app,
});
