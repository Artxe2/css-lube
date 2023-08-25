import { defineConfig as define_config } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

export default define_config({
	plugins: [sveltekit()]
})
