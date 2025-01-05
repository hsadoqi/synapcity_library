import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	ignores: [
		"webpack.config.js",
		"**/generated/**/*.js",
		".next/**",
		"cypress-tests/",
	],
});

const eslintConfig = [
	...compat.extends(
		"next",
		"prettier",
		"next/core-web-vitals",
		"next/typescript"
	),
];

export default eslintConfig;
