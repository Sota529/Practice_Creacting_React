import { createElement } from "./createElement";

export const Didact = {
  createElement,
};

const element = Didact.createElement(
  "div",
  { id: "foo" },
  Didact.createElement("a", null, "bar"), //<a>bar</a>
  Didact.createElement("b") // <b></b>
);
