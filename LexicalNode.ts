export type NodeMap = Map<NodeKey, LexicalNode>;

export type NodeKey = string;

// TODO: Continue on this
export class LexicalNode {
  /** @internal */
  __parent: null | NodeKey;
  /** @internal */
  __prev: null | NodeKey;
  /** @internal */
  __next: null | NodeKey;

  constructor() {
    this.__parent = null;
    this.__prev = null;
    this.__next = null;
  }
}
