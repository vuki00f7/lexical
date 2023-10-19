import { LexicalNode, NodeKey } from './LexicalNode';

import { errorOnInfiniteTransforms, errorOnReadOnly } from './LexicalUpdates';

export function $setNodeKey(
  node: LexicalNode,
  existingKey: NodeKey | null | undefined,
): void {
  if (existingKey != null) {
    node.__key = existingKey;
    return;
  }
  errorOnReadOnly();
  errorOnInfiniteTransforms();
  // TODO: continue here
}
