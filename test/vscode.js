const mock = Reflect.get(globalThis, "__vscode_mock")
export const CompletionItem = mock.CompletionItem
export const CompletionItemKind = mock.CompletionItemKind
export const MarkdownString = mock.MarkdownString
export const Range = mock.Range
export const languages = mock.languages
export const window = mock.window
export const workspace = mock.workspace