<template>
	<main class="services section-padding">
		<ServicesHero />
		<ServicesCards />
		<ServicesAdvantages />
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
.services {
	padding-top: 60px;
	padding-bottom: clamp(16px, 2vw, 30px);
	display: flex;
	flex-direction: column;
	gap: 30px;
	overflow: hidden;
}
</style>
