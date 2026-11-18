export interface YamlPluginOptions {
	/**
	 * Requires `timbicOptions.yaml` to be `true`
	 *
	 * Enforce a single block style for multi-line string values. Does not apply to flow collections.
	 *
	 * @see https://github.com/porada/prettier-plugin-yaml#options
	 */
	yamlBlockStyle?: "folded" | "literal";
	/**
	 * Requires `timbicOptions.yaml` to be `true`
	 *
	 * Enforce a single collection style for maps and sequences.
	 *
	 * @see https://github.com/porada/prettier-plugin-yaml#options
	 */
	yamlCollectionStyle?: "block" | "flow";
	/**
	 * Requires `timbicOptions.yaml` to be `true`
	 *
	 * Quote all scalar mapping keys. Leaves YAML merge keys and explicitly tagged non-string keys unchanged.
	 * Removes unnecessary quotes when disabled.
	 * @default false
	 *
	 * @see https://github.com/porada/prettier-plugin-yaml#options
	 */
	yamlQuoteKeys?: boolean;
	/**
	 * Requires `timbicOptions.yaml` to be `true`
	 *
	 * Quote keys that match a specific pattern. Non-string keys are matched based on their string representation.
	 * Leaves YAML merge keys and explicitly tagged non-string keys unchanged.
	 *
	 * @see https://github.com/porada/prettier-plugin-yaml#options
	 */
	yamlQuoteKeysMatching?: string;
	/**
	 * Requires `timbicOptions.yaml` to be `true`
	 *
	 * Quote all string values. Takes precedence over `yamlBlockStyle`. Removes unnecessary quotes when disabled.
	 * @default false
	 *
	 * @see https://github.com/porada/prettier-plugin-yaml#options
	 */
	yamlQuoteValues?: boolean;
	/**
	 * Requires `timbicOptions.yaml` to be `true`
	 *
	 * Quote values that match a specific pattern. Non-string values are matched based on their string representation.
	 * Leaves explicitly tagged non-string values unchanged. Takes precedence over `yamlBlockStyle`.
	 *
	 * @see https://github.com/porada/prettier-plugin-yaml#options
	 */
	yamlQuoteValuesMatching?: string;
}

export const yamlDefaultConfig = {
	yamlQuoteKeys: false,
	yamlQuoteValues: false,
} as const satisfies YamlPluginOptions;

export interface YamlTimbicOptions {
	/**
	 * Enable YAML formatting via `prettier-plugin-yaml`.
	 * @default false
	 *
	 * @see https://github.com/porada/prettier-plugin-yaml
	 */
	yaml?: boolean;
}
