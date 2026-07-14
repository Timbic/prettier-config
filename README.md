# @timbic/prettier-config

Extensible prettier configurations for the smart developers.

## Usage

```bash
pnpm add -D prettier @timbic/prettier-config
```

```mjs
import withTimbic from "@timbic/prettier-config";

export default withTimbic();

// or

export default withTimbic({
	// ... your options
});
```

Your options will override the defaults and extend the config.

## Default options:

```mjs
{
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
}
```
