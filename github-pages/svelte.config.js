import adapter from "@sveltejs/adapter-static"
import path from "path"
import { vitePreprocess as vite_preprocess } from "@sveltejs/kit/vite"

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({
			assets: "../docs",
			pages: "../docs",
			fallback: null,
			precompress: false,
			strict: true
		}),
		alias: {
			cells: path.resolve("./src/components/cells"),
			organs: path.resolve("./src/components/organs"),
			parts: path.resolve("./src/components/parts"),
			styles: path.resolve("./src/styles"),
			ts: path.resolve("./src/ts")
		},
		paths: {
			// eslint-disable-next-line no-undef
			base: process.env.NODE_ENV === "production" ? "/css-lube" : ""
		}
	},
	preprocess: vite_preprocess()
}

export default config
