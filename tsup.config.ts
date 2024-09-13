import { type Options, defineConfig } from "tsup";

const commonOptions = {
	clean: true, // clean up dist folder,
	dts: true, // generate d.ts
	minify: "terser", // minify with terser
	sourcemap: true, // Generate source maps
	tsconfig: "tsconfig.json",
} satisfies Options;

export default defineConfig([
	{
		...commonOptions,
		entry: ["src/index.ts"],
		format: ["esm"],
		name: "ESM",
		outDir: "./dist/esm",
		platform: "browser",
		splitting: true,
		target: "esnext",
		treeshake: true,
	},

	// Remove if you don't need to support cjs
	{
		...commonOptions,
		entry: ["src/index.ts"],
		format: ["cjs"],
		name: "CJS",
		outDir: "./dist/cjs",
		platform: "node",
	},
]);
