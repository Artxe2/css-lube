import adapter from "@sveltejs/adapter-static"
import path from "path"
import { vitePreprocess } from "@sveltejs/kit/vite"

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
			js: path.resolve("./src/js")
		},
		paths: {
			// eslint-disable-next-line no-undef
			base: process.env.NODE_ENV === "production" ? "/css-lube" : ""
		}
	},
	preprocess: vitePreprocess()
}

export default config
