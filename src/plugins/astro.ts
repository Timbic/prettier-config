export interface AstroPluginOptions {
	/**
	 * Requires `timbicOptions.astro` to be `true`
	 *
	 * Controls formatting of matching identifier attributes (e.g. `name={name}` vs `{name}`).
	 * When unset, the formatter preserves the input form.
	 *
	 * @see https://github.com/withastro/prettier-plugin-astro#astro-allow-shorthand
	 */
	astroAllowShorthand?: boolean;
	/**
	 * Requires `timbicOptions.astro` to be `true`
	 *
	 * Skip formatting the Astro frontmatter.
	 * @default false
	 *
	 * @see https://github.com/withastro/prettier-plugin-astro#astro-skip-frontmatter
	 */
	astroSkipFrontmatter?: boolean;
	/**
	 * Requires `timbicOptions.astro` to be `true`
	 *
	 * Mirror of `compressHTML` in `astro.config.mjs`, telling the formatter which whitespace the compiler will collapse.
	 * @default "jsx"
	 *
	 * @see https://github.com/withastro/prettier-plugin-astro#astro-compress-html
	 */
	astroCompressHTML?: "html" | "jsx" | "none" | boolean;
}

export const astroDefaultConfig = {
	astroCompressHTML: "jsx",
	astroSkipFrontmatter: false,
} as const satisfies AstroPluginOptions;

export interface AstroTimbicOptions {
	/**
	 * Enable formatting for Astro components via `prettier-plugin-astro`.
	 * @default false
	 *
	 * @see https://github.com/withastro/prettier-plugin-astro
	 */
	astro?: boolean;
}
