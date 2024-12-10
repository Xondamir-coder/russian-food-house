<template>
	<section class="findout">
		<h2 class="section-title section-padding">Что хотите узнать ?</h2>
		<div class="findout__list">
			<NuxtLink
				class="findout__item section-padding"
				v-for="(item, i) in items"
				:key="i"
				:to="item.to">
				<div class="findout__item-left">
					<span class="section-title findout__item-num text-primary">{{
						(i + 1).toString().padStart(2, '0')
					}}</span>
					<div class="findout__item-container">
						<img class="findout__item-img" :src="item.img" :alt="item.title" />
					</div>
				</div>
				<div class="findout__item-right">
					<div class="findout__item-content">
						<h3 class="findout__item-title">
							{{ item.title }}
						</h3>
						<p class="findout__item-text">
							{{ item.text }}
						</p>
					</div>
					<button class="findout__item-link">
						<svg class="findout__icon">
							<use href="~/assets/sprite.svg#up-right-arrow" />
						</svg>
					</button>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<script setup>
import chef from '/img/chef.png';
import traditional from '/img/recipes-traditional.png';
import modern from '/img/recipes-modern.png';
const items = [
	{
		img: chef,
		title: 'Featured Chefs',
		text: 'Баланс спроса и предложения уравновешивает формирование имиджа',
		to: '/recipes/chefs'
	},
	{
		img: traditional,
		title: 'Traditional Russian Recipes',
		text: 'Баланс спроса и предложения уравновешивает формирование имиджа',
		to: '/recipes/traditional'
	},
	{
		img: modern,
		title: 'Modern Russian Cuisine',
		text: 'Баланс спроса и предложения уравновешивает формирование имиджа',
		to: '/recipes/modern'
	}
];
const { $gsap } = useNuxtApp();

onMounted(() => {
	const animationY = 50;
	$gsap.utils.toArray('.findout__item').forEach((item, i) => {
		$gsap.from(item.firstElementChild, {
			opacity: 0,
			y: i % 2 == 0 ? animationY : -animationY,
			scrollTrigger: {
				trigger: item,
				start: '10% 80%'
			}
		});
		$gsap.from(item.lastElementChild, {
			opacity: 0,
			y: i % 2 == 0 ? -animationY : animationY,
			scrollTrigger: {
				trigger: item,
				start: '10% 80%'
			}
		});
	});
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
.findout {
	display: flex;
	flex-direction: column;
	gap: 10px;
	&__item {
		padding-top: clamp(10px, 4vw, 40px);
		padding-bottom: clamp(10px, 4vw, 40px);
		transition: box-shadow 0.3s, background-color 0.3s;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10vw;
		align-items: center;

		@include mix.respond('lg') {
			gap: 0;
			overflow: hidden;
		}
		@include mix.respond('md') {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		&:not(:first-of-type) {
			padding-bottom: clamp(10px, 5vw, 60px);
			.findout__item-img {
				transform: translate(25%, 35%);
				filter: drop-shadow(31px 43px 40px rgba(0, 0, 0, 0.5));
				@include mix.respond('md') {
					transform: translate(15%, 35%);
					filter: drop-shadow(31px 23px 40px rgba(0, 0, 0, 0.4));
				}
			}
		}
		&:first-of-type {
			.findout__item-container {
				overflow-y: clip;
			}
			.findout__item-img {
				transform: scale(1.2) translateY(25px);
			}
		}
		&-left {
			display: grid;
			align-items: center;
			gap: 9vw;
			grid-template-columns: max-content 0.7fr;
			@include mix.respond('md') {
				display: flex;
				align-items: flex-start;
				gap: 0;
			}
		}
		&-right {
			display: grid;
			grid-template-columns: 1fr max-content;
			align-items: center;
			gap: 7vw;
			@include mix.respond('md') {
				align-items: flex-end;
			}
		}

		&:hover {
			box-shadow: 0px 52px 100px 0px #8ea1b399;
			background-color: #dfebf5;
			.findout__item-title {
				color: map.get(var.$colors, 'primary');
			}
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: clamp(6px, 2vw, 22px);
		}
		&-link {
			width: clamp(60px, 55vw, 69px);
			aspect-ratio: 1;
			background-color: map.get(var.$colors, 'secondary');
			border-radius: 50%;
			@include mix.flex-center;
		}
		&-title {
			font-size: clamp(26px, 2.5vw, 36px);
			font-weight: 700;
			letter-spacing: 0.03em;
			transition: color 0.3s;
		}
		&-text {
			font-size: clamp(14px, 1.5vw, 18px);
			font-weight: 500;
			letter-spacing: 0.02em;
			color: #62777f;
			line-height: 1.4;
		}
		&-num {
			font-weight: 700;
			letter-spacing: 0.03em;
		}
		&-container {
			background-color: #fff;
			border-radius: 16px;
			aspect-ratio: 200/238;
			@include mix.respond('md') {
				width: 253px;
				margin: 0 auto;
			}
		}
		&-img {
			width: 100%;
			height: auto;
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
	}
	&__icon {
		width: 23px;
		height: 23px;
		fill: none;
	}
	.section-title {
		text-align: left;
	}
}
</style>
