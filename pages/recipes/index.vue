<template>
	<main class="recipes">
		<RecipesHero />
		<RecipesFindout />
	</main>
</template>

<script setup>
const recipesStore = useRecipesStore();
await recipesStore.fetchCategories();

useHead({
	title: 'Рецепты | Russian Food House',
	meta: [
		{
			name: 'description',
			content: 'Советы и рецепты приготовления блюд из Российских продуктов'
		}
	]
});
</script>

<style lang="scss" scoped>
.recipes {
	display: flex;
	flex-direction: column;
	gap: 30px;
}
</style>
