import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueDevTools()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData:
					'@use "@/scss/abstracts/variables.scss" as var; @use "@/scss/abstracts/mixins.scss" as mix;'
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
