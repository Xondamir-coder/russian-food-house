<template>
	<main class="section-padding products">
		<Searchform class="products__search" />
		<Breadcrumb :crumbs="breadcrumbs" class="products__breadcrumb" />
		<World no-title class="products__world" />
		<ProductsGrid />
	</main>
</template>

<script setup>
const store = useAppStore();
const breadcrumbs = computed(() => [
	{ name: 'Продукты', link: '/products' },
	{ name: store.selectedCategory, link: '/products' },
	{ name: 'Все продукты', link: '/products' }
]);

useHead({
	title: 'Продукты | Russian Food House',
	meta: [
		{
			name: 'description',
			content:
				'Найдите лучшие российские продукты в Russian Food House. Широкий ассортимент: сладости, закуски, напитки и многое другое. Качество, которому можно доверять!'
		}
	]
});
</script>

<style lang="scss" scoped>
.products {
	padding-top: 20px;
	padding-bottom: max(7vw, 27px);
	display: flex;
	flex-direction: column;
	gap: 20px;
	&__breadcrumb {
		@include mix.respond('md') {
			order: -1;
		}
	}
	&__search {
		padding: 0;
	}
	&__world {
		padding: 0;
		margin-top: 0;
	}
}
</style>
