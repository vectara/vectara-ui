/**
 * This exposes a utility that wraps an ANTLR-generated lexer in a TokensProvider class and returns that class.
 * The underlying logic is mostly lifted from https://tomassetti.me/writing-a-browser-based-editor-using-monaco-and-antlr.
 */

import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import ILineTokens = monaco.languages.ILineTokens;
import IToken = monaco.languages.IToken;
import { BaseErrorListener, CharStream, CommonTokenStream, Token } from "antlr4ng";

const EOF = -1;

type SyntaxChecker = {
  Parser: any;
  onError: (offendingSymbol: Token | null, line: number, column: number, msg: string) => void;
};

/**
 * Generates a TokensProvider for use with the CodeEditor component.
 * Provide the optional syntaxChecker config to enable client-side syntax checking.
 */
export const generateTokensProvider = (Lexer: any, syntaxChecker?: SyntaxChecker) => {
  return class TokensProvider implements monaco.languages.TokensProvider {
    getInitialState(): monaco.languages.IState {
      return new MonacoState();
    }

    tokenize(line: string): monaco.languages.ILineTokens {
      if (line.length === 0) return new MonacoLineTokens([]);
      return this.tokensForLine(line);
    }

    tokensForLine(input: string): monaco.languages.ILineTokens {
      const lexerInputStream = CharStream.fromString(input);
      const lexer = new Lexer(lexerInputStream);

      const myTokens: monaco.languages.IToken[] = [];
      let done = false;

      // If doing client-side syntax checking, create a second input stream for the parser.
      // This is because using a single stream for both results in
      // the lexer consuming the stream, leaving nothing for the parser to consume.
      // TODO: Check if there's a way to use just one. In the interest of time, this will do.
      if (syntaxChecker) {
        const parserInputStream = CharStream.fromString(input);
        const tokenStream = new CommonTokenStream(new Lexer(parserInputStream));
        const parser = new syntaxChecker.Parser(tokenStream);
        class ConsoleErrorListener extends BaseErrorListener {
          syntaxError(recognizer: any, offendingSymbol: Token | null, line: any, column: any, msg: any) {
            syntaxChecker?.onError(offendingSymbol, line, column, msg);
          }
        }
        parser.addErrorListener(new ConsoleErrorListener());
        parser.parse();
      }

      do {
        const token = lexer.nextToken();

        if (token == null) {
          done = true;
        } else {
          // We exclude EOF
          if (token.type == EOF) {
            done = true;
          } else if (lexer.literalNames[token.type]) {
            // Allow tokenizing of literal names.
            // Facilitates colorizing of tokens like "+".
            const tokenTypeName = lexer.literalNames[token.type];
            if (tokenTypeName) {
              const myToken = new MonacoToken("LITERAL", token.column);
              myTokens.push(myToken);
            }
          } else {
            const tokenTypeName = lexer.symbolicNames[token.type];
            if (tokenTypeName) {
              const myToken = new MonacoToken(tokenTypeName, token.column);
              myTokens.push(myToken);
            }
          }
        }
      } while (!done);

      myTokens.sort((a, b) => (a.startIndex > b.startIndex ? 1 : -1));

      return new MonacoLineTokens(myTokens);
    }
  };
};

class MonacoState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new MonacoState();
  }

  // This is hard-coded to true because this implementation exists solely to
  // satisfy the monaco.languages.IState interface.
  equals(): boolean {
    return true;
  }
}

class MonacoToken implements IToken {
  scopes: string;
  startIndex: number;

  constructor(ruleName: string, startIndex: number) {
    this.scopes = ruleName;
    this.startIndex = startIndex;
  }
}

class MonacoLineTokens implements ILineTokens {
  endState: monaco.languages.IState;
  tokens: monaco.languages.IToken[];

  constructor(tokens: monaco.languages.IToken[]) {
    this.endState = new MonacoState();
    this.tokens = tokens;
  }
}
