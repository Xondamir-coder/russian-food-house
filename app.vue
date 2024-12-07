<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
import Lenis from 'lenis';
const appStore = useAppStore();

await appStore.fetchProducts();
await appStore.fetchCategories();
await appStore.fetchServices();
await appStore.fetchNews();

onMounted(() => {
	const lenis = new Lenis();

	// Use requestAnimationFrame to continuously update the scroll
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);
});
</script>

<style lang="scss" scoped></style>
