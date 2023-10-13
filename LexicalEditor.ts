import { createEmptyEditorState } from './LexicalEditorState';

import { internalGetActiveEditor } from './LexicalUpdates';

export type EditorThemeClassName = string;

export type EditorThemeClasses = {
  blockCursor?: EditorThemeClassName;
  characterLimit?: EditorThemeClassName;
  code?: EditorThemeClassName;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type CreateEditorArgs = {
  disableEvents?: boolean;
  theme?: EditorThemeClasses;
  parentEditor?: LexicalEditor;
};

export function createEditor(editorConfig?: CreateEditorArgs): LexicalEditor {
  const config = editorConfig || {};
  const activeEditor = internalGetActiveEditor();
  const theme = config.theme || {};
  const parentEditor =
    editorConfig === undefined ? activeEditor : config.parentEditor || null;
  const disableEvents = config.disableEvents || false;
  const editorState = createEmptyEditorState();

  const editor = new LexicalEditor();

  return editor;
}

export class LexicalEditor {
  constructor() {}
}
