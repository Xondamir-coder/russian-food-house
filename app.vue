<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
import Lenis from 'lenis';
useHead({
	title: 'Russian Food House'
});

onMounted(() => {
	// Initialize Lenis
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
