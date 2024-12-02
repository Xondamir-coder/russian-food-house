<template>
	<main class="about">
		<AboutHero />
		<AboutTexts />
		<AboutInfo />
		<AboutSponsors />
	</main>
</template>

<script setup>
useHead({
	title: 'О нас | Russian Food House',
	meta: [
		{
			name: 'description',
			content:
				'Russian Food House - это интернет-магазин, который	предлагает широкий ассортимент русских продуктов по доступным ценам. Мы работаем напрямую с российскими производителями, чтобы обеспечить качество и свежесть наших продуктов.'
		}
	]
});
</script>

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
