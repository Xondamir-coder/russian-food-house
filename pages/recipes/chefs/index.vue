<template>
	<main class="chefs">
		<div class="chefs__row" v-for="(row, rowIndex) in chunkedChefs" :key="rowIndex">
			<NuxtLink
				class="chefs__link"
				v-for="(chef, i) in row"
				:key="i"
				:to="`/recipes/chefs/${chef.name}?uuid=${chef.uuid}`"
				@click="recipesStore.selectChef(chef)">
				<RecipesChef :data="chef" />
			</NuxtLink>
		</div>
	</main>
</template>
<script setup>
const recipesStore = useRecipesStore();
await recipesStore.fetchChefs();

// Utility function to chunk the chefs array into groups of 5
const chunk = (arr, size) => {
	const chunks = [];
	for (let i = 0; i < arr.length; i += size) {
		chunks.push(arr.slice(i, i + size));
	}
	return chunks;
};

// Reactive chunked data for rows
const chunkedChefs = computed(() => chunk(recipesStore.chefs, 5));
</script>

<style lang="scss" scoped>
@keyframes animate-left {
	from {
		transform: translateX(50%);
	}
	to {
		transform: translateX(-75%);
	}
}
@keyframes animate-right {
	from {
		transform: translateX(-50%);
	}
	to {
		transform: translateX(75%);
	}
}
.chefs {
	display: flex;
	flex-direction: column;
	gap: 30px;
	overflow: hidden;
	position: relative;
	max-height: 900px;
	&::after {
		content: '';
		position: absolute;
		height: 12%;
		width: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(355.21deg, rgba(241, 248, 255, 0) 30%, #f1f8ff 72.18%);
		pointer-events: none;
	}
	&__link {
		display: flex;
	}
	&__row {
		display: grid;
		grid-template-columns: repeat(5, 400px);
		gap: 30px;
		rotate: -8deg;
		translate: 0 -40%;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		&:has(> *:hover) {
			animation-play-state: paused;
		}
		@include mix.respond('md') {
			grid-template-columns: repeat(5, 300px);
		}
		&:nth-of-type(odd) {
			animation-name: animate-left;
			animation-duration: 60s;
		}
		&:nth-of-type(even) {
			animation-name: animate-right;
			animation-duration: 50s;
		}
	}
}
</style>
