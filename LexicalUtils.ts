import { LexicalNode, NodeKey } from './LexicalNode';

import { errorOnReadOnly } from './LexicalUpdates';

export function $setNodeKey(
  node: LexicalNode,
  existingKey: NodeKey | null | undefined,
): void {
  if (existingKey != null) {
    node.__key = existingKey;
    return;
  }
  errorOnReadOnly();
  // TODO: continue here
}
