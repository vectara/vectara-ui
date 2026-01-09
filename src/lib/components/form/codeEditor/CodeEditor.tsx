import Editor from "@monaco-editor/react";
import * as monacoTypes from "monaco-editor/esm/vs/editor/editor.api";
import { useRef } from "react";
import { generateTokensProvider } from "./generateTokensProvider";

export type ColorConfig = {
  token: string;
  // There are more exhaustive ways of typing this as a hex string,
  // but for now, requiring a # should be a good enough indicator of the required value type.
  foreground: `#${string}`;
};

export type CodeEditorError = {
  startLine: number;
  endLine: number;
  startColumn: number;
  endColumn: number;
  message: string;
};

interface Props {
  language: string;
  TokensProvider?: ReturnType<typeof generateTokensProvider>;
  onChange?: (value?: string) => void;
  onError?: (errors: Array<CodeEditorError>) => void;
  colorConfig?: Array<ColorConfig>;
  value?: string;
  defaultValue?: string;
  error?: CodeEditorError;
  /** Placeholder text that supports code formatting, indentation, and line breaks */
  placeholder?: string;
  isReadOnly?: boolean;
  height?: string;
  resizable?: boolean;
  "data-testid"?: string;
}

type Monaco = typeof monacoTypes;

/**
 * Generic (to console) code editor that wraps React Monaco Editor.
 * As the need arises, this component can accept props to customize the internal Monaco editor options.
 */
export const VuiCodeEditor = ({
  language,
  TokensProvider,
  onChange,
  placeholder,
  onError = (errors) => {
    /*noop*/
  },
  colorConfig,
  value,
  defaultValue,
  error,
  isReadOnly,
  height = "300px",
  resizable = false,
  "data-testid": testId
}: Props) => {
  const tokensProvider = TokensProvider ? new TokensProvider() : null;
  const monacoRef = useRef<Monaco | null>(null);
  const modelRef = useRef<monacoTypes.editor.ITextModel | null>(null);

  if (modelRef.current && monacoRef.current) {
    if (error) {
      const markers = [
        {
          severity: monacoRef.current.MarkerSeverity.Error,
          startLineNumber: error.startLine,
          startColumn: error.startColumn,
          endLineNumber: error.endLine,
          endColumn: error.endColumn,
          message: error.message
        }
      ];

      monacoRef.current.editor.setModelMarkers(modelRef.current, language, markers);
    } else {
      monacoRef.current.editor.setModelMarkers(modelRef.current, language, []);
    }
  }

  const init = (monaco: Monaco) => {
    monacoRef.current = monaco;
    monaco.languages.register({ id: language });

    if (tokensProvider) {
      monaco.languages.setTokensProvider(language, tokensProvider);
    }

    monaco.editor.defineTheme("vectaraEditor", {
      base: "vs",
      inherit: true,
      rules: colorConfig ?? [],
      colors: {}
    });

    monaco.languages.setLanguageConfiguration(language, {
      autoClosingPairs: [
        { open: "(", close: ")" },
        { open: "[", close: "]" },
        { open: "{", close: "}" },
        { open: "'", close: "'", notIn: ["string"] }
      ],
      colorizedBracketPairs: [
        ["(", ")"],
        ["[", "]"],
        ["(", ")"]
      ]
    });

    monaco.editor.onDidCreateModel((model) => (modelRef.current = model));
  };

  const shouldShowPlaceholder =
    placeholder && (!value || value.trim() === "") && (!defaultValue || defaultValue.trim() === "");

  return (
    <div
      className="vuiCodeEditor"
      data-testid={testId}
      style={resizable ? { minHeight: height, height, resize: "vertical", overflow: "auto" } : undefined}
    >
      {shouldShowPlaceholder && (
        <div className="vuiCodeEditor-placeholder" aria-hidden="true">
          {placeholder}
        </div>
      )}
      <Editor
        beforeMount={init}
        height={resizable ? "100%" : height}
        width="100%"
        defaultLanguage={language}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onValidate={(markers: Array<monacoTypes.editor.IMarkerData>) => {
          const errors = markers.reduce((acc: Array<CodeEditorError>, marker: monacoTypes.editor.IMarkerData) => {
            if (marker.severity === monacoTypes.MarkerSeverity.Error) {
              acc.push({
                startLine: marker.startLineNumber,
                endLine: marker.endLineNumber,
                startColumn: marker.startColumn,
                endColumn: marker.endColumn,
                message: marker.message
              });
            }

            return acc;
          }, []);

          if (errors.length) {
            onError(errors);
          }
        }}
        theme="vectaraEditor"
        options={{
          readOnly: isReadOnly,
          fontSize: 12,
          automaticLayout: true,
          renderLineHighlight: "none",
          lineNumbers: "off",
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 2,
          fixedOverflowWidgets: true,
          quickSuggestions: {
            comments: false,
            strings: false,
            other: false
          },
          suggestOnTriggerCharacters: true,
          minimap: {
            enabled: false
          },
          wordWrap: "on"
        }}
      />
    </div>
  );
};
