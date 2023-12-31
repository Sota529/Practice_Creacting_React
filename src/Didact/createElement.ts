import { DidactElement, Primitive } from "./type";

export function createElement(
  type: keyof HTMLElementTagNameMap,
  props?: Partial<HTMLElement> | Partial<HTMLElement>[] | null,
  ...children: (Primitive | DidactElement)[]
): DidactElement {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return isDidactElement(child) ? child : createTextElement(child);
      }),
    },
  };
}

function createTextElement(text: Primitive): DidactElement {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: String(text),
      children: [],
    },
  };
}

function isDidactElement(
  value: Primitive | DidactElement
): value is DidactElement {
  if (value === null) {
    return false;
  }
  if (
    typeof value === "string" ||
    typeof value === "boolean" ||
    typeof value === "number" ||
    typeof value === "symbol" ||
    typeof value === "undefined"
  ) {
    return false;
  }

  return true;
}
