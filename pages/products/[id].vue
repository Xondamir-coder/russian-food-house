<template>
	<main class="product section-padding">
		<Breadcrumb :crumbs="breadcrumbs" />
		<ProductDetails />
		<ProductQuery />
	</main>
</template>

<script setup>
const route = useRoute();
const appStore = useAppStore();

const breadcrumbs = computed(() => [
	{ name: 'Продукты', link: '/products' },
	{ name: appStore.selectedCategory?.name, link: '/products' },
	{ name: appStore.selectedProduct?.title, link: '/products' },
	{ name: 'Все продукты', link: '/products' }
]);

if (!appStore.selectedProduct || appStore.selectedProduct.uuid !== route.params.id)
	appStore.fetchOneProduct(route.params.id);

useHead({
	title: computed(() => `${appStore.selectedProduct?.title}  | Russian Food House`),
	meta: [
		{
			content: computed(() => appStore.selectedProduct?.meta_description),
			name: 'description'
		},
		{
			content: computed(() => appStore.selectedProduct?.meta_keywords),
			name: 'keywords'
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
