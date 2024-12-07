<template>
	<main class="catalog">
		<CatalogHero />
		<CatalogGrid />
	</main>
</template>

<script setup>
const appStore = useAppStore();
await appStore.fetchCategories();
useHead({
	title: 'Каталог | Russian Food House',
	meta: [
		{
			name: 'description',
			content:
				'Откройте каталог Russian Food House: широкий выбор традиционных российских продуктов. От сладостей до премиальных закусок — всё для вашего вкуса. Покупайте сейчас!"'
		}
	]
});
</script>

<style lang="scss" scoped>
.catalog {
	display: flex;
	flex-direction: column;
	margin-bottom: max(6vw, 40px);
	gap: 6vw;
}
</style>
