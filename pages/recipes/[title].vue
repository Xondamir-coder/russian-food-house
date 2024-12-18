<template>
	<Articlewrapper :data="recipesStore.selectedRecipe" type="recipes">
		<template #bottom>
			<div class="items__wrapper">
				<h2 class="sectiont-title text-primary">More posts</h2>
				<div class="items">
					<RecipesItem
						v-for="data in similarData"
						:key="data.uuid"
						:data="data"
						class="recipe-hover" />
				</div>
			</div>
		</template>
	</Articlewrapper>
</template>

<script setup>
const recipesStore = useRecipesStore();
const route = useRoute();
const { RECIPES_URL } = useURL();

const similarData = ref([]);

// Take from store otherwise fetch from API
if (!recipesStore.selectedRecipe || recipesStore.selectedRecipe.title_slug !== route.params.title) {
	await recipesStore.fetchOneRecipe(route.params.title);
}

const { data } = await useFetch(`${RECIPES_URL}/${route.params.title}/similars`);
similarData.value = data.value;
</script>

<style scoped lang="scss">
.items {
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 260px;
	overflow-x: auto;
	column-gap: clamp(16px, 2vw, 24px);
	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
}
</style>
