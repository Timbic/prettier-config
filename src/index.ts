import type { Config } from "./types";

const defaultConfig = {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	checkIgnorePragma: false,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	jsxSingleQuote: false,
	objectWrap: "preserve",
	printWidth: 140,
	proseWrap: "always",
	quoteProps: "consistent",
	rangeEnd: Infinity,
	rangeStart: 0,
	requirePragma: false,
	semi: true,
	singleAttributePerLine: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "all",
	useTabs: true,
	vueIndentScriptAndStyle: false,
} satisfies Config;

export default function withTimbic(options?: Config): Config {
	return { ...defaultConfig, ...options };
}
