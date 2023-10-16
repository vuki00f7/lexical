import { LexicalNode, NodeKey } from './LexicalNode';

export function $setNodeKey(
  node: LexicalNode,
  existingKey: NodeKey | null | undefined,
): void {
  if (existingKey != null) {
    node.__key = existingKey;
    return;
  }
  // TODO: continue here
}
