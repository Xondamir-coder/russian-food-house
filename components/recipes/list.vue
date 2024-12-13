<template>
	<div class="wrapper">
		<div class="list" id="modern-recipes-list">
			<RecipesItem
				v-for="recipe in recipesStore.recipes"
				:key="recipe.uuid"
				:data="recipe"
				@click="recipesStore.selectRecipe(recipe)" />
		</div>
		<ButtonPrimary class="wrapper__button" label="Показать еще" @click="loadMore" />
	</div>
</template>

<script setup>
const { $gsap } = useNuxtApp();

const recipesStore = useRecipesStore();
const itemsToLoad = 6;
const loadMore = () => {
	const query = {
		page: ++recipesStore.recipePage,
		take: itemsToLoad,
		...recipesStore.selectedSubCategories
	};
	recipesStore.fetchRecipes(query);
};

onMounted(() => {
	setTimeout(() => {
		$gsap.utils.toArray('#modern-recipes-list .item').forEach((item, i) => {
			$gsap.from(item, {
				opacity: 0,
				x: i % 2 === 0 ? -20 : 20,
				scrollTrigger: {
					trigger: item,
					start: '20% bottom'
				}
			});
		});
	}, 100);
});
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2vw, 24px);
	flex-grow: 1;
}
.list {
	display: grid;
	gap: clamp(16px, 2vw, 24px);
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
