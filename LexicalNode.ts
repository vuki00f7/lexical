import { $setNodeKey } from './LexicalUtils';

export type NodeMap = Map<NodeKey, LexicalNode>;

export type NodeKey = string;

export class LexicalNode {
  /** @internal */
  //@ts-ignore We set the key in the constructor.
  __key: string;
  /** @internal */
  __parent: null | NodeKey;
  /** @internal */
  __prev: null | NodeKey;
  /** @internal */
  __next: null | NodeKey;

  constructor(key?: NodeKey) {
    this.__parent = null;
    this.__prev = null;
    this.__next = null;
    $setNodeKey(this, key);
  }
}
