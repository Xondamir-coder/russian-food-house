// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	css: ['~/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "~/assets/scss/abstracts/_variables.scss" as var; @use "~/assets/scss/abstracts/_mixins.scss" as mix;'
				}
			}
		}
	},
	modules: [
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Inter: true
				}
			}
		]
	],
	devtools: { enabled: true }
});
