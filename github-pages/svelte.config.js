import adapter from "@sveltejs/adapter-static"
import path from "path"

/** @type {import("@sveltejs/kit").Config} */
const config = {
	compilerOptions: { runes: true },
	kit: {
		adapter: adapter(
			{
				assets: "../docs",
				pages: "../docs",
				fallback: null,
				precompress: false,
				strict: true
			}
		),
		alias: {
			cells: path.resolve("./src/components/cells"),
			organs: path.resolve("./src/components/organs"),
			parts: path.resolve("./src/components/parts"),
			styles: path.resolve("./src/styles"),
			js: path.resolve("./src/js")
		},
		paths: {
			base: process.env.NODE_ENV === "production" ? "/css-lube" : ""
		}
	}
}

export default config