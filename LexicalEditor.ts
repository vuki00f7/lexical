export type CreateEditorArgs = {
    disableEvents?: boolean;
}

export function createEditor(editorConfig?: CreateEditorArgs) : LexicalEditor {
    const config = editorConfig || {};

    const editor = new LexicalEditor();

    return editor;

}

export class LexicalEditor {
    constructor() {

    }
}
