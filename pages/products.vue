<template>
	<main class="section-padding products">
		<Searchform class="products__search" />
		<Breadcrumb :crumbs="breadcrumbs" class="products__breadcrumb" />
		<World no-title class="products__world" />
	</main>
</template>

<script setup>
const breadcrumbs = [
	{ name: 'Products', link: '/products' },
	{ name: 'Category name', link: '/products' },
	{ name: 'All Products', link: '/products' }
];
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
