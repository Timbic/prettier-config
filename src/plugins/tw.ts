export interface TailwindPluginOptions {
	/**
	 * Requires `timbicOptions.tailwind` to be `true`
	 *
	 * Path to the Tailwind config file (Tailwind CSS v3).
	 *
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#specifying-your-tailwind-javascript-config-path-tailwind-css-v3
	 */
	tailwindConfig?: string;
	/**
	 * Requires `timbicOptions.tailwind` to be `true`
	 *
	 * Path to the CSS stylesheet used by Tailwind CSS (v4+).
	 *
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#specifying-your-tailwind-stylesheet-path-tailwind-css-v4
	 */
	tailwindStylesheet?: string;
	/**
	 * Requires `timbicOptions.tailwind` to be `true`
	 *
	 * Path to the CSS stylesheet used by Tailwind CSS (v4+).
	 * @deprecated Use `tailwindStylesheet` instead
	 */
	tailwindEntryPoint?: string;
	/**
	 * Requires `timbicOptions.tailwind` to be `true`
	 *
	 * List of custom function and tag names that contain classes.
	 * @default []
	 *
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#sorting-classes-in-function-calls
	 */
	tailwindFunctions?: string[];
	/**
	 * Requires `timbicOptions.tailwind` to be `true`
	 *
	 * List of custom attributes that contain classes.
	 * @default []
	 *
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#sorting-non-standard-attributes
	 */
	tailwindAttributes?: string[];
	/**
	 * Requires `timbicOptions.tailwind` to be `true`
	 *
	 * Preserve whitespace around Tailwind classes when sorting.
	 * @default false
	 *
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#preserving-whitespace
	 */
	tailwindPreserveWhitespace?: boolean;
	/**
	 * Requires `timbicOptions.tailwind` to be `true`
	 *
	 * Preserve duplicate classes inside a class list when sorting.
	 * @default false
	 *
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#preserving-duplicate-classes
	 */
	tailwindPreserveDuplicates?: boolean;
}

export const tailwindDefaultConfig = {
	tailwindAttributes: [],
	tailwindFunctions: [],
	tailwindPreserveDuplicates: false,
	tailwindPreserveWhitespace: false,
} as const satisfies TailwindPluginOptions;

export interface TailwindTimbicOptions {
	/**
	 * Enable Tailwind CSS class sorting via `prettier-plugin-tailwindcss`.
	 * @default false
	 *
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
	 */
	tailwind?: boolean;
}
