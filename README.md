# @timbic/prettier-config

Extensible prettier configuration for smart developers.

## Usage

```bash
pnpm add -D prettier @timbic/prettier-config
```

```ts
// prettier.config.{js,mjs,ts,mts}
import withTimbic from "@timbic/prettier-config";

export default withTimbic();

// or

export default withTimbic({
	// your options
});
```

Your options will override the defaults and extend the config.

## Types

Now this package has its own types! That means that when using withTimbic() you will get enhanced type annotations via Quick Info on each
rule, as well as the right default set by withTimbic(), e.g.

```ts
// before
export default withTimbic({
	tabWidth: 3,
	// Specify the number of spaces per indentation-level.
	// @default
	//
	// 2 (incorrect, this is not a withTimbic() default, this is the prettier default)
});

// after
export default withTimbic({
	tabWidth: 3,
	// Specify the number of spaces per indentation-level.
	// @default
	//
	// 4 (correct, see our default options below)
	// @see — https://prettier.io/docs/options#tab-width
});
```

## Default options

```ts
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
