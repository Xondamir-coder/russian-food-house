<template>
	<NuxtLink
		class="item"
		:to="`/recipes/${data.title_slug}`"
		@click="recipesStore.selectRecipe(data)">
		<span class="item__type">
			{{ getRandomTitle(data) }}
		</span>
		<div class="item__img-container">
			<img
				width="260"
				height="163"
				class="item__img"
				:src="`${DOMAIN_URL}/${data.image}`"
				:alt="data.title" />
		</div>
		<div class="item__content">
			<span class="item__time">{{ data.cooking_time }} минут</span>
			<p class="item__desc" :title="data.title">
				{{ data.title.length > 62 ? `${data.title.slice(0, 62)}...` : data.title }}
			</p>
		</div>
	</NuxtLink>
</template>

<script setup>
const recipesStore = useRecipesStore();
const { DOMAIN_URL } = useURL();
const getRandomTitle = data => {
	// Keys to extract from
	const keys = ['recipe_meal_type', 'recipe_product_type', 'recipe_diet_type'];

	// Randomly select a key
	const randomKey = keys[Math.floor(Math.random() * keys.length)];

	// Get the object corresponding to the random key
	const values = data[randomKey];

	// Extract the title property
	const title = values.title;

	// Return the title if it exists
	return title || null; // Return null if no title is available
};

defineProps({
	data: Object
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
.item {
	border-radius: 16px;
	background-color: #fff;
	box-shadow: 0px 35px 45px 0px rgba(7, 14, 39, 0.051);
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 18px;
	overflow: hidden;
	transition: box-shadow 0.3s, color 0.3s;
	&.recipe-hover {
		box-shadow: none;
		&:hover {
			color: map.get(var.$colors, 'primary');
			box-shadow: none;
		}
	}
	&:hover {
		box-shadow: 0px 20px 45px 0px rgba(7, 14, 39, 0.3);
	}
	&__content {
		padding-bottom: 24px;
		padding-inline: 16px;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	&__time {
		font-family: var.$font-secondary;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.02em;
		color: rgba(129, 151, 194, 1);
	}
	&__desc {
		font-size: 18px;
		font-weight: 600;
		line-height: 23.4px;
	}
	&__type {
		position: absolute;
		top: 16px;
		left: 16px;
		font-size: 12px;
		font-weight: 500;
		padding: 5px 12px;
		background-color: rgba(244, 244, 245, 1);
		border: 2px solid rgba(212, 212, 216, 1);
		border-radius: 10px;
		color: rgba(0, 111, 238, 1);
		z-index: 2;
	}
	&__img {
		width: 100%;
		aspect-ratio: 260/163;
		object-fit: cover;
		height: 100%;
		&-container {
			width: 100%;
			overflow: hidden;
			display: flex;
		}
	}
}
</style>
