import { fileURLToPath } from 'node:url';
import path from 'node:path';

import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define plugins and parsers
const plugins = {
	'@typescript-eslint': tseslint,
	astro: eslintPluginAstro,
	prettier: prettier,
};

const languageOptionsTs = {
	parser: tsParser,
	ecmaVersion: 'latest',
	sourceType: 'module',
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		tsconfigRootDir: __dirname,
	},
};

const languageOptionsAstro = {
	parser: 'astro-eslint-parser',
	parserOptions: {
		parser: tsParser,
		extraFileExtensions: ['.astro'],
	},
};

// Define common rules for recommended TypeScript configurations
const commonTsRules = {
	...tseslint.configs.recommended.rules,
	...tseslint.configs['recommended-type-checked'].rules,
	...tseslint.configs['stylistic-type-checked'].rules,
};

const commonAstroRules = {
	...eslintPluginAstro.configs.recommended.rules,
};

// ESLint config
export default [
	{
		// Global ignore patterns
		ignores: ['**/.*', '**/*.d.ts', '.pnp.*', '.github/', 'dist/'],
	},
	{
		// TypeScript configuration for JavaScript/TypeScript files
		files: ['**/*.js', '**/*.ts', '**/*.tsx'],
		languageOptions: languageOptionsTs,
		plugins,
		rules: {
			...commonTsRules,
			...prettierConfig.rules,

			// Prettier rules
			'prettier/prettier': 'error',
			// Custom TypeScript rules
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/no-shadow': 'error',
			'no-console': 'off',

			// Disabled TypeScript rules for project preference
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/array-type': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/class-literal-property-style': 'off',
			'@typescript-eslint/consistent-indexed-object-style': 'off',
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/dot-notation': 'off',
			'@typescript-eslint/no-base-to-string': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-redundant-type-constituents': 'off',
			'@typescript-eslint/no-this-alias': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/only-throw-error': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unnecessary-type-assertion': 'off',
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'@typescript-eslint/prefer-optional-chain': 'off',
			'@typescript-eslint/prefer-promise-reject-errors': 'off',
			'@typescript-eslint/prefer-string-starts-ends-with': 'off',
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/restrict-plus-operands': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/sort-type-constituents': 'off',
			'@typescript-eslint/unbound-method': 'off',
			'@typescript-eslint/no-explicit-any': 'off',

			// Disabled rules from preset configs
			'@typescript-eslint/await-thenable': 'off',
			'prefer-const': 'off',
		},
	},
	{
		// Astro-specific configuration for .astro files
		files: ['*.astro'],
		languageOptions: languageOptionsAstro,
		plugins: {
			astro: eslintPluginAstro,
		},
		rules: {
			...commonAstroRules,

			// Astro-specific customizations
			'astro/no-set-html-directive': 'error',
			'astro/no-unused-css-selector': 'error',
		},
	},
];
