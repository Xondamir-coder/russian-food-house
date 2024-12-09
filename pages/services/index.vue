<template>
	<main class="services section-padding">
		<ServicesHero />
		<ServicesCards />
		<ServicesAdvantages />
	</main>
</template>

<script setup>
const appStore = useAppStore();
await appStore.fetchServices();
useHead({
	title: 'Сервисы | Russian Food House',
	meta: [
		{
			name: 'description',
			content:
				'Russian Food House - это комплексный сервис для экспорта продовольственных товаров из России. Мы предлагаем своим клиентам полный спектр услуг, начиная от регистрации и сертификации продукции, заканчивая доставкой до склада покупателя.'
		}
	]
});
</script>

<style lang="scss" scoped>
.services {
	padding-top: 60px;
	padding-bottom: clamp(16px, 2vw, 30px);
	display: flex;
	flex-direction: column;
	gap: 30px;
	overflow: hidden;
}
</style>
