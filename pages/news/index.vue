<template>
	<main class="news section-padding">
		<NewsHero />
		<NewsList />
	</main>
</template>

<script setup>
useHead({
	title: 'Новости | Russian Food House',
	meta: [
		{
			name: 'description',
			content:
				'Russian Food House - новости о российской кухне. Полезные советы, рецепты, совместные события и многое другое.'
		}
	]
});
</script>

<style lang="scss" scoped>
.news {
	padding-top: max(2vw, 16px);
	padding-bottom: max(2vw, 16px);
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 4vw, 60px);
}
</style>
