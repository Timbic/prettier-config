export interface OxcTimbicOptions {
	/**
	 * Format JavaScript and TypeScript with the Oxc parsers (`oxc` and `oxc-ts`) instead of Prettier's built-in `babel` and
	 * `typescript` parsers.
	 * @default false
	 *
	 * @see https://github.com/prettier/prettier/tree/main/packages/plugin-oxc
	 */
	oxc?: boolean;
}
