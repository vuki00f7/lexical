import type { NodeMap } from './LexicalNode';

import { $createRootNode } from './nodes/LexicalRootNode';

export function createEmptyEditorState() {
  return new EditorState(new Map([['root', $createRootNode()]]));
}

export class EditorState {
  _nodeMap: NodeMap;

  constructor(nodePam: NodeMap) {
    this._nodeMap = nodePam;
  }
}
