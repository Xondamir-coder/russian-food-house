<template>
	<Articlewrapper :data="recipesStore.selectedRecipe" type="recipes" />
</template>

<script setup>
const recipesStore = useRecipesStore();
const route = useRoute();

// Take from store otherwise fetch from API
if (!recipesStore.selectedRecipe || recipesStore.selectedRecipe.title_slug !== route.params.title) {
	await recipesStore.fetchOneRecipe(route.params.title);
}
</script>
