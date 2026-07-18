import type { LiteralUnion, BuiltInParserName, Plugin } from "prettier";

export {};
/**
 * For use in `.prettierrc.js`, `.prettierrc.ts`, `.prettierrc.cjs`, `.prettierrc.cts`, `prettierrc.mjs`, `prettierrc.mts`, `prettier.config.js`, `prettier.config.ts`, `prettier.config.cjs`, `prettier.config.cts`, `prettier.config.mjs`, `prettier.config.mts`
 */
export interface Config extends Partial<Options> {
	overrides?: Array<{
		files: string | string[];
		excludeFiles?: string | string[];
		options?: Options;
	}>;
}

interface Options {
	/**
	 * Specify the line length that the printer will wrap on.
	 * @default 140
	 *
	 * @see https://prettier.io/docs/options#print-width
	 */
	printWidth: number;
	/**
	 * Specify the number of spaces per indentation-level.
	 * @default 4
	 *
	 * @see https://prettier.io/docs/options#tab-width
	 */
	tabWidth: number;
	/**
	 * Indent lines with tabs instead of spaces.
	 * @default true
	 *
	 * @see https://prettier.io/docs/options#tabs
	 */
	useTabs: boolean;
	parentParser?: string;
	__embeddedInHtml?: boolean;
	/**
	 * Print semicolons at the ends of statements.
	 * @default true
	 *
	 * @see https://prettier.io/docs/options#semicolons
	 */
	semi: boolean;
	/**
	 * Use single quotes instead of double quotes.
	 * @default false
	 *
	 * @see https://prettier.io/docs/options#quotes
	 */
	singleQuote: boolean;
	/**
	 * Use single quotes in JSX.
	 * @default false
	 *
	 * @see https://prettier.io/docs/options#quotes
	 */
	jsxSingleQuote: boolean;
	/**
	 * Print trailing commas wherever possible.
	 * @default "all"
	 *
	 * @see https://prettier.io/docs/options#trailing-commas
	 */
	trailingComma: "none" | "es5" | "all";
	/**
	 * Print spaces between brackets in object literals.
	 * @default true
	 *
	 * @see https://prettier.io/docs/options#bracket-spacing
	 */
	bracketSpacing: boolean;
	/**
	 * How to wrap object literals.
	 * @default "preserve"
	 *
	 * @see https://prettier.io/docs/options#object-wrap
	 */
	objectWrap: "preserve" | "collapse";
	/**
	 * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being
	 * alone on the next line (does not apply to self closing elements).
	 * @default false
	 *
	 * @see https://prettier.io/docs/options#bracket-same-line
	 */
	bracketSameLine: boolean;
	/**
	 * Format only a segment of a file.
	 * @default 0
	 *
	 * @see https://prettier.io/docs/options#range-start
	 */
	rangeStart: number;
	/**
	 * Format only a segment of a file.
	 * @default Infinity
	 *
	 * @see https://prettier.io/docs/options#range-end
	 */
	rangeEnd: number;
	/**
	 * Specify which parser to use.
	 *
	 * @see https://prettier.io/docs/options#parser
	 */
	parser: LiteralUnion<BuiltInParserName>;
	/**
	 * Specify the input filepath. This will be used to do parser inference.
	 *
	 * @see https://prettier.io/docs/options#file-path
	 */
	filepath: string;
	/**
	 * Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the
	 * file. This is very useful when gradually transitioning large, unformatted codebases to prettier.
	 * @default false
	 *
	 * @see https://prettier.io/docs/options#require-pragma
	 */
	requirePragma: boolean;
	/**
	 * Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with
	 * prettier. This works well when used in tandem with the --require-pragma option. If there is already a docblock at
	 * the top of the file then this option will add a newline to it with the @format marker.
	 * @default false
	 *
	 * @see https://prettier.io/docs/options#insert-pragma
	 */
	insertPragma: boolean;
	/**
	 * Prettier can allow individual files to opt out of formatting if they contain a special comment, called a pragma, at
	 * the top of the file.
	 * @default false
	 *
	 * @see https://prettier.io/docs/options#check-ignore-pragma
	 */
	checkIgnorePragma: boolean;
	/**
	 * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer. In some
	 * cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
	 * @default "always"
	 *
	 * @see https://prettier.io/docs/options#prose-wrap
	 */
	proseWrap: "always" | "never" | "preserve";
	/**
	 * Include parentheses around a sole arrow function parameter.
	 * @default "always"
	 *
	 * @see https://prettier.io/docs/options#arrow-parens
	 */
	arrowParens: "avoid" | "always";
	/**
	 * Provide ability to support new languages to prettier.
	 *
	 * @see https://prettier.io/docs/plugins
	 */
	plugins: Array<string | URL | Plugin>;
	/**
	 * How to handle whitespaces in HTML.
	 * @default "css"
	 *
	 * @see https://prettier.io/docs/options#html-whitespace-sensitivity
	 */
	htmlWhitespaceSensitivity: "css" | "strict" | "ignore";
	/**
	 * Which end of line characters to apply.
	 * @default "lf"
	 *
	 * @see https://prettier.io/docs/options#end-of-line
	 */
	endOfLine: "auto" | "lf" | "crlf" | "cr";
	/**
	 * Change when properties in objects are quoted.
	 *
	 * @see https://prettier.io/docs/options#quote-props
	 * @default "consistent"
	 */
	quoteProps: "as-needed" | "consistent" | "preserve";
	/**
	 * Whether or not to indent the code inside <script> and <style> tags in Vue files.
	 * @default false
	 *
	 * @see https://prettier.io/docs/options#vue-indent-script-and-style
	 */
	vueIndentScriptAndStyle: boolean;
	/**
	 * Control whether Prettier formats quoted code embedded in the file.
	 * @default "auto"
	 *
	 * @see https://prettier.io/docs/options#embedded-language-formatting
	 */
	embeddedLanguageFormatting: "auto" | "off";
	/**
	 * Enforce single attribute per line in HTML, Vue and JSX.
	 * @default true
	 *
	 * @see https://prettier.io/docs/options#single-attribute-per-line
	 */
	singleAttributePerLine: boolean;
	/**
	 * Where to print operators when binary expressions wrap lines.
	 * @default "end"
	 *
	 * @see https://prettier.io/docs/options#experimental-operator-position
	 */
	experimentalOperatorPosition: "start" | "end";
	/**
	 * Use curious ternaries, with the question mark after the condition, instead of on the same line as the consequent.
	 * @default false
	 *
	 * @see https://prettier.io/docs/options#experimental-ternaries
	 */
	experimentalTernaries: boolean;
	/**
	 * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
	 * @default false
	 *
	 * @deprecated use bracketSameLine instead
	 */
	jsxBracketSameLine: boolean;
	/**
	 * Arbitrary additional values on an options object are always allowed.
	 */
	[_: string]: unknown;
}
