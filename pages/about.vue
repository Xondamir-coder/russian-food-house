<template>
	<main class="about">
		<AboutHero />
		<AboutTexts />
		<AboutInfo />
		<AboutSponsors />
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
	& > *:not(.hero) {
		padding-top: min(4vw, 60px);
		padding-bottom: min(4vw, 60px);
		@include mix.respond('md') {
			padding-top: 16px;
			padding-bottom: 16px;
		}
	}
}
</style>
