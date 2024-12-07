<template>
	<section class="grid section-padding">
		<NuxtLink
			v-for="(cat, i) in appStore.categories"
			:key="cat?.uuid"
			:to="`/products?category_id=${cat?.id}&category_name=${cat?.name}`"
			class="grid__item"
			:class="getGridClass(i)">
			<img class="grid__item-img" :src="`https://rfh.spacelabs.uz/${cat?.image}`" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">{{ cat?.name }}</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const appStore = useAppStore();

const animateItems = () => {
	setTimeout(() => {
		$gsap.from('.grid__item', {
			stagger: 0.2,
			opacity: 0,
			scale: 0,
			scrollTrigger: {
				trigger: '.grid',
				start: 'top 80%'
			}
		});
	}, 500);
};
const getGridClass = index => {
	if (index < 2) return ''; // Skip indexes before the pattern starts

	const offset = (index - 2) % 6; // Calculate position within the 6-item pattern

	if (offset === 0 || offset === 2) return 'row-span-2'; // 2nd and 4th positions in the cycle
	if (offset === 1 || offset === 5) return 'column-span-2'; // 3rd and 6th positions in the cycle

	return ''; // No class for other indexes
};

onMounted(() => {
	animateItems();
});
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3vw;
	@include mix.respond('lg') {
		grid-template-columns: repeat(2, 1fr);
	}
	&__item {
		background: #fff;
		border-radius: 20px;
		padding: 2vw;
		display: flex;
		flex-direction: column;
		gap: 13px;
		justify-content: space-between;
		&.row-span-2 {
			grid-row: span 2;
		}
		&.column-span-2 {
			grid-column: span 2;
		}
		&.column-span-2 {
			.grid__item-title {
				max-width: 20ch;
			}
		}
		@include mix.respond('lg') {
			&:nth-of-type(3) {
				grid-column: span 2;
			}
		}
		@include mix.respond('md') {
			grid-column: span 1 !important;
			grid-row: span 1 !important;
			&:nth-of-type(3n) {
				grid-column: span 2 !important;
			}
		}

		&-img {
			max-width: 293px;
			max-height: 195px;
			width: 100%;
			height: auto;
			margin: auto 0;
			align-self: center;
			@include mix.respond('md') {
				width: 180px;
			}
			@include mix.respond('sm') {
				width: 150px;
			}
		}
		&-content {
			display: grid;
			grid-template-columns: 1fr 50px;
			align-items: center;
			gap: 20px;
			@include mix.respond('lg') {
				display: block;
			}
		}
		&-button {
			aspect-ratio: 1;
			border-radius: 50%;
			@include mix.flex-center;
			@include mix.respond('lg') {
				display: none;
			}
		}
		&-title {
			font-weight: 700;
			font-size: 1.4rem;

			@include mix.respond('lg') {
				max-width: 100%;
				font-size: 16px;
			}
		}
	}
}
</style>
