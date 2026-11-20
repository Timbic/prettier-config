# @timbic/prettier-config

<p>
  <a href="https://www.npmjs.com/package/@timbic/prettier-config"><img src="https://img.shields.io/npm/v/@timbic/prettier-config.svg?logo=nodedotjs" alt="npm package"></a>
  <a href="https://github.com/Timbic/prettier-config"><img src="https://img.shields.io/badge/Github-gray.svg?logo=github" alt="github repo"></a>
  <a href="https://npmx.dev/package/@timbic/prettier-config"><img src="https://img.shields.io/badge/npmx.dev-black?logo=npm" alt="view on npmx"></a>
</p>

Extensible Prettier configuration for smart developers.

## Usage

```bash
pnpm add -D @timbic/prettier-config
```

> **Important:** When using pnpm, don't forget to hoist Prettier to the top level in `pnpm-workspace.yaml`:
>
> ```yaml
> publicHoistPattern:
>     - prettier
> ```
>
> Alternatively, install Prettier as a dev dependency:
>
> ```bash
> pnpm add -D prettier
> ```

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

## Plugins

This package includes several Prettier plugins. To enable them use the second parameter of `withTimbic()` function:

```ts
export default withTimbic({}, { oxc: true, tailwind: true });
```

Currently included plugins:

- `@prettier/plugin-oxc`
- `prettier-plugin-tailwindcss`
- `prettier-plugin-astro`
- `prettier-plugin-yaml`

## Types

When using `withTimbic()`, you get enhanced type annotations (via Quick Info/IntelliSense) for each option, including bundled plugin
options, as well as the correct defaults set by `withTimbic()`.

```ts
// before
export default withTimbic({
	tabWidth: 3,
	// @default
	//
	// 2 (incorrect, this is not a withTimbic() default, this is the Prettier default)
});

// after
export default withTimbic({
	tabWidth: 3,
	// @default
	//
	// 4 (correct, see our default options below)
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

## License

Released under the [MIT License](./LICENSE).
