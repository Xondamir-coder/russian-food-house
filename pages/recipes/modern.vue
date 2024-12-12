<template>
	<main
		class="modern section-padding"
		:class="{ 'sidebar--active': isSidebarOpen }"
		@click.self="isSidebarOpen = false">
		<Searchform v-model="query" />
		<Breadcrumb :crumbs="breadcrumbs" />
		<section class="modern__container">
			<div class="modern__top">
				<h2 class="section-title">Рецепты</h2>
				<button class="modern__button text-primary" @click="isSidebarOpen = !isSidebarOpen">
					<svg class="icon-filter">
						<use href="~/assets/sprite.svg#filter" />
					</svg>
					<span>Фильтрация</span>
				</button>
			</div>
			<RecipesSidebar :class="{ active: isSidebarOpen }" />
			<RecipesList />
		</section>
	</main>
</template>

<script setup>
const query = ref('');
const isSidebarOpen = ref(false);

const breadcrumbs = computed(() => [
	{
		name: 'Рецепты',
		link: '/recipes'
	},
	{
		name: 'Modern Russian Cuisine',
		link: '/recipes/modern'
	}
]);

useHead({
	title: 'Modern Russian Cuisine | Russian Food House',
	meta: [
		{
			name: 'description',
			content: 'Современные рецепты приготовления блюд из Российских продуктов'
		}
	]
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-right {
	from {
		opacity: 0;
		transform: translateX(30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.modern {
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-top: clamp(16px, 2vw, 20px);
	padding-bottom: clamp(25px, 3vw, 30px);
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		background-color: rgba(0, 0, 0, 0.5);
		inset: 0;
		position: fixed;
		z-index: 103;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s;
	}
	&.sidebar--active::after {
		opacity: 1;
		pointer-events: all;
	}
	&__button {
		background-color: #fff;
		padding: 10px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 14px;
		font-weight: 600;
		line-height: 19.6px;
		letter-spacing: 0.02em;
	}
	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		& > * {
			animation: 0.5s backwards;
		}
		& > *:first-child {
			animation-name: slide-from-left;
		}
		& > *:last-child {
			animation-name: slide-from-right;
		}
		@include mix.respond('md', min) {
			display: none;
		}
	}
	&__container {
		display: flex;
		gap: 24px;
		align-items: flex-start;
		@include mix.respond('md') {
			align-items: stretch;
			flex-direction: column;
		}
	}
}
</style>
