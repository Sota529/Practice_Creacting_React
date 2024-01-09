import { DidactContainer, DidactElement } from "./type";

export function render(
  element: DidactElement,
  container: DidactContainer | null
) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter((key) => {
      return key !== "children";
    })
    .forEach((name) => {
      // @ts-ignore propsを全て列挙するのがめんどく、、、難しいので
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => {
    render(child, dom);
  });

  container?.appendChild(dom);
  return container;
}
