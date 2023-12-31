import { DidactContainer, DidactElement } from "./type";

export function render(element: DidactElement, container: DidactContainer) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter((key) => {
      key !== "children";
    })
    .forEach((name) => {
      // @ts-ignore
      dom[name] = String(element.props[name]);
    });

  element.props.children.forEach((child) => {
    render(child, dom);
  });

  container.appendChild(dom);
}
