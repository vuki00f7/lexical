import type { LexicalEditor } from './LexicalEditor';

import invariant from './shared/invariant';

let activeEditor: null | LexicalEditor = null;
let isReadOnlyMode = false;

export function internalGetActiveEditor(): LexicalEditor | null {
  return activeEditor;
}

export function errorOnReadOnly(): void {
  if (isReadOnlyMode) {
    invariant(false, 'Cannot use method in read-only mode.');
  }
}
