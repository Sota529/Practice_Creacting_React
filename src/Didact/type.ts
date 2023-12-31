// bigIntはes2016にはないので入れない
export type Primitive = string | number | boolean | undefined | symbol | null;

export type DidactElement = {
  type: keyof HTMLElementTagNameMap | "TEXT_ELEMENT";
  props: {
    children: DidactElement[];
    nodeValue?: string | number | null;
  };
};

export type DidactContainer = Node;
