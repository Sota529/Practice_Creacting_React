import { Didact } from "./Didact/index";

const element1 = Didact.createElement("div", { id: "foo" }, "bar"); // <div id="foo">bar</div>
Didact.createElement("a", null, "bar"); //<a>bar</a>
Didact.createElement("b"); // <b></b>

Didact.render(element1, document.getElementById("app"));
