import { Didact } from "./Didact/index";

const element = Didact.createElement("div", { id: "foo" }); // <div id="foo"></div>
Didact.createElement("a", null, "bar"); //<a>bar</a>
Didact.createElement("b"); // <b></b>
console.log(Didact.render(element, document.createElement("div")));
console.log("hogew");

