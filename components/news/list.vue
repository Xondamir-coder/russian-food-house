<template>
	<section class="container" ref="containerRef">
		<h2 class="container__title text-primary">Новости</h2>
		<div class="list" ref="listRef">
			<NuxtLink
				:to="item.type === 'Мероприятия' ? `/events/${item.id}` : `/news/${item.id}`"
				class="list__item"
				v-for="item in appStore.news"
				:key="item.id"
				:style="getRandomStyle()">
				<div class="list__item-top">
					<NewsLabel class="list__item-label" :text="item.type" />
					<NuxtImg class="list__item-img" :src="item.image" />
				</div>
				<h4 class="list__item-title">
					{{ item.meta_title }}
				</h4>
				<div class="list__item-content">
					<NewsDate :date="item.updatedAt" />
					<NewsTime :date="item.updatedAt" />
				</div>
			</NuxtLink>
		</div>
		<ButtonPrimary class="container__button" label="Показать еще" />
	</section>
</template>

<script setup>
const appStore = useAppStore();
const { $gsap } = useNuxtApp();

const containerRef = ref();
const listRef = ref();

onMounted(() => {
	$gsap.from(containerRef.value.firstElementChild, {
		opacity: 0,
		y: 15,
		scrollTrigger: {
			trigger: containerRef.value,
			start: 'top 80%'
		}
	});
	$gsap.utils.toArray(listRef.value.children).forEach((item, i) => {
		$gsap.from(item, {
			opacity: 0,
			y: 15,
			scrollTrigger: {
				trigger: item,
				start: 'top 85%'
			}
		});
	});
});

const colorCombosMap = [
	{
		bg: '#F5A524FF',
		color: '#000000FF'
	},
	{
		bg: '#7828C833',
		color: '#7828C8FF'
	},
	{
		bg: '#006FEE33',
		color: '#006FEEFF'
	},
	{
		bg: '#17C96433',
		color: '#17C964FF'
	},
	{
		bg: '#D4D4D866',
		color: '#000000FF'
	},
	{
		bg: '#17C964FF',
		color: '#000000FF'
	},
	{
		bg: '#006FEEFF',
		color: '#FFFFFFFF'
	},
	{
		bg: '#7828C8FF',
		color: '#FFFFFFFF'
	},
	{
		bg: '#F31260FF',
		color: '#FFFFFFFF'
	}
];

const getRandomStyle = () => {
	const randColor = getRandomColor();
	return `--bg: ${randColor.backgroundColor}; --color: ${randColor.color};`;
};
const getRandomColor = (() => {
	const recentColors = []; // Store the last 4 selected indices
	const maxRecent = 4;

	return () => {
		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * colorCombosMap.length);
		} while (recentColors.includes(randomIndex));

		// Add the new index and remove the oldest if necessary
		recentColors.push(randomIndex);
		if (recentColors.length > maxRecent) {
			recentColors.shift();
		}

		return {
			backgroundColor: colorCombosMap[randomIndex].bg,
			color: colorCombosMap[randomIndex].color
		};
	};
})();
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2vw, 24px);
	&__button {
		@include mix.respond('md') {
			align-self: stretch;
		}
	}
	&__title {
		font-size: clamp(32px, 3vw, 42px);
		font-weight: 700;
	}
}
.list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	column-gap: 40px;
	row-gap: 24px;
	@include mix.respond('md') {
		row-gap: 16px;
	}
	&__item {
		display: flex;
		flex-direction: column;
		gap: 16px;
		background: #fff;
		padding: clamp(10px, 2vw, 24px);
		border-radius: 20px;
		transition: box-shadow 0.4s;
		&:hover {
			box-shadow: 0px 52px 100px 0px rgba(142, 161, 179, 0.6);
		}
		@include mix.respond('md') {
			gap: 29px;
		}
		&-title {
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 0.02em;
		}
		&-top {
			position: relative;
			border-radius: 10px;
			overflow: hidden;
			&::before {
				content: '';
				position: absolute;
				inset: 0;
				z-index: 1;
				background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
			}
		}
		&-img {
			height: 100%;
			width: 100%;
			aspect-ratio: 312/178;
			object-fit: cover;
			object-position: center;
		}
		&-label {
			position: absolute;
			left: 14px;
			top: 14px;
			z-index: 2;
		}
		&-content {
			margin-top: 26px;
			display: flex;
			justify-content: space-between;
			@include mix.respond('md') {
				margin-top: 0;
			}
		}
	}
}
</style>
