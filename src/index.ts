import { Didact } from "./Didact";

const element = Didact.createElement("div", { id: "foo" }); // <div id="foo"></div>
Didact.createElement("a", null, "bar"); //<a>bar</a>
Didact.createElement("b"); // <b></b>
