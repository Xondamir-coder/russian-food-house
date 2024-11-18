<template>
	<main class="catalog">
		<CatalogHero />
		<CatalogGrid />
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
.catalog {
	display: flex;
	flex-direction: column;
	margin-bottom: max(6vw, 40px);
	gap: 6vw;
}
</style>
