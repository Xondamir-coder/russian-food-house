<template>
	<div class="sidebar">
		<div
			class="sidebar__row"
			v-for="(subCategory, title) in recipesStore.subCategories"
			:key="title">
			<h3 class="sidebar__title">{{ translateTitleToRus(title) }}</h3>
			<ul class="sidebar__list">
				<li
					:title="type"
					class="sidebar__type"
					v-for="(type, i) in subCategory"
					:key="type.uuid">
					<input
						class="sidebar__input"
						type="radio"
						:id="`${type.uuid}-${i}`"
						:name="title.toLowerCase()"
						@change="getRecipes(type.uuid, title)" />
					<label :for="`${type.uuid}-${i}`">{{ type.title }}</label>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const recipesStore = useRecipesStore();
const toPythonCase = str => str.replace(/([A-Z])/g, '_$1').toLowerCase();

// To prepare keys of subCategories for future use
const keys = computed(() => Object.keys(recipesStore.subCategories));
recipesStore.selectSubCategories(
	Object.fromEntries(keys.value.map(key => [`recipe_${toPythonCase(key)}_uuid`, '']))
);

const getRecipes = (uuid, title) => {
	recipesStore.selectedSubCategories[`recipe_${toPythonCase(title)}_uuid`] = uuid;
	recipesStore.fetchRecipes(recipesStore.selectedSubCategories);
};
const translateTitleToRus = word => {
	switch (word) {
		case 'productType':
			return 'Тип продукта';
		case 'mealType':
			return 'Тип блюда';
		case 'dietType':
			return 'Тип диеты';
	}
};
</script>

<style lang="scss" scoped>
@use 'sass:map';
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-20px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.sidebar {
	flex-basis: 27%;
	background-color: #fff;
	border-radius: 16px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	box-shadow: 0px 35px 45px 0px rgba(7, 14, 39, 0.05);

	@include mix.respond('md') {
		position: fixed;
		z-index: 105;
		width: 100%;
		max-height: 646px;
		overflow-y: auto;
		bottom: 0;
		left: 0;
		pointer-events: none;
		transform: translateY(100%);
		transition: transform 0.3s;
		&.active {
			transform: translateY(0);
			pointer-events: all;
		}
	}
	&__input {
		background-image: url(~/assets/check.svg);
		background-size: 60%;
		background-repeat: no-repeat;
		background-position: center;
		appearance: none;
		aspect-ratio: 1;
		height: 24px;
		border: 2px solid rgb(212, 212, 216);
		border-radius: 8.4px;
		transition: background-color 0.2s, border-color 0.2s;
		&:checked {
			background-color: map.get(var.$colors, 'primary');
			border-color: transparent;
		}
	}
	&__title {
		font-size: 18px;
		font-weight: 500;
		color: rgba(113, 113, 122, 1);
		animation: slide-from-left 0.3s backwards;
		@for $i from 1 through 3 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.2s;
			}
		}
	}
	&__row {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	&__list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-left: 8px;
	}
	&__type {
		display: flex;
		align-items: center;
		animation-name: slide-from-left;
		animation-duration: 0.3s;
		animation-fill-mode: backwards;
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.1s;
			}
		}
		label {
			font-size: 18px;
			font-weight: 500;
			line-height: 28px;
			color: #000;
			padding-left: 8px;
		}
		& > * {
			cursor: pointer;
		}
	}
}
</style>
