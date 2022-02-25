import { h, render } from "preact";

import App from "./App";
import Controller from "./controllers/Controller";

let controller = new Controller();

render(<App controller={controller} />, document.body);
