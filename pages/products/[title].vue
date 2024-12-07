<template>
	<main class="product section-padding">
		<Breadcrumb :crumbs="breadcrumbs" />
		<ProductDetails />
		<ProductQuery />
	</main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const appStore = useAppStore();

const breadcrumbs = computed(() => [
	{ name: 'Продукты', link: '/products' },
	{ name: appStore.selectedProduct?.category.name, link: '/products' },
	{ name: appStore.selectedProduct?.title, link: '/products' }
]);

if (!appStore.selectedProduct || appStore.selectedProduct.title_slug !== route.params.title) {
	await appStore.fetchOneProduct(route.params.title);
}

if (!appStore.selectedProduct.title_slug) {
	router.push('/not-found');
}

useHead({
	title: computed(() => `${appStore.selectedProduct?.meta_title}  | Russian Food House`),
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
