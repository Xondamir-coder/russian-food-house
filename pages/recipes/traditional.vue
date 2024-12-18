<template>
	<main class="wrapper" id="traditional">
		<TraditionalSlide
			v-for="(recipe, i) in recipesStore.recipes"
			:key="recipe.uuid"
			:data="recipe"
			:class="{ active: i === currentSlide }"
			@changeSlide="changeSlide" />
	</main>
</template>

<script setup>
const route = useRoute();
const recipesStore = useRecipesStore();
await recipesStore.fetchRecipes({
	take: 18,
	recipe_categories_uuid: route.query.uuid
});

const currentSlide = ref(0);
const changeSlide = direction => {
	if (direction === 'next') {
		currentSlide.value = (currentSlide.value + 1) % recipesStore.recipes.length;
	} else {
		currentSlide.value =
			(currentSlide.value - 1 + recipesStore.recipes.length) % recipesStore.recipes.length;
	}
};

useHead({
	title: 'Традиционные рецепты | Russian Food House',
	meta: [
		{
			name: 'description',
			content: 'Традиционные рецепты приготовления блюд из Российских продуктов'
		}
	]
});
</script>

<style lang="scss" scoped>
.wrapper {
	display: grid;
	max-height: calc(100vh - 61.5px);
	min-width: 100%;
	overflow: hidden;
	& > * {
		grid-area: 1/1/2/2;
	}
}
</style>
