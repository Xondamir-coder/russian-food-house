<template>
	<main class="product section-padding">
		<Breadcrumb :crumbs="breadcrumbs" />
		<ProductDetails />
		<ProductQuery />
	</main>
</template>

<script setup>
const route = useRoute();
const store = useAppStore();

const breadcrumbs = computed(() => [
	{ name: 'Продукты', link: '/products' },
	{ name: store.selectedCategory, link: '/products' },
	{ name: store.selectedProduct?.title, link: '/products' },
	{ name: 'Все продукты', link: '/products' }
]);

useHead({
	title: computed(() => `${store.selectedProduct?.title}  | Russian Food House`),
	meta: [
		{
			content: computed(() => store.selectedProduct?.desc),
			name: 'description'
		}
	]
});
</script>

<style lang="scss" scoped>
.product {
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 2vw, 30px);
	margin-top: clamp(16px, 1.5vw, 20px);
	margin-bottom: 31px;
	@include mix.respond('md') {
		margin-bottom: 40px;
	}
}
</style>
