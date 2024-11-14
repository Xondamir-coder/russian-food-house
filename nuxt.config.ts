// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	css: ['~/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
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
					Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
				}
			}
		],
		'@nuxt/image'
	],
	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			meta: [
				{
					name: 'description',
					content:
						'Russian Food House — уютное место, где можно насладиться традиционной русской кухней. Блюда, приготовленные с душой и по классическим рецептам, подарят вам истинный вкус России'
				}
			],
			title: 'Russian Food House'
		}
	},
	devtools: { enabled: true }
});
