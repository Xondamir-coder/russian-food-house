<template>
	<main class="home">
		<HomeHero />
		<HomeWorld />
		<HomeBuy />
		<HomeProducts />
		<HomePick />
		<HomeProducers />
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	gap: 60px;
	overflow: hidden;
	margin-bottom: 60px;
	@include mix.respond('md') {
		margin-bottom: 80px;
		gap: 40px;
	}
}
</style>
