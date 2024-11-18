<template>
	<section class="hero">
		<div class="hero__content">
			<h1 class="hero__title">Лучшие российские товары на Вашем столе</h1>
			<Searchform class="hero__search" />
		</div>
		<svg class="hero__sprinkles">
			<use href="~/assets/sprite.svg#sprinkles" />
		</svg>
		<ul class="hero__list">
			<li
				class="hero__item"
				v-for="item in items"
				:key="item"
				:class="`hero__item--${item.slice(5).split('.')[0]}`">
				<img
					width="150"
					height="200"
					:src="item"
					alt="fruit"
					class="hero__item-img hero__item-img--backlight" />
				<img width="150" height="200" :src="item" alt="fruit" class="hero__item-img" />
			</li>
		</ul>
	</section>
</template>

<script setup>
import apple from '/img/apple.webp';
import aubergine from '/img/aubergine.webp';
import cherry from '/img/cherry.webp';
import lemon from '/img/lemon.webp';
import carrot from '/img/carrot.webp';
const items = [apple, aubergine, cherry, lemon, aubergine, carrot, apple, cherry, lemon];

const { $gsap } = useNuxtApp();

onMounted(() => {
	$gsap.utils.toArray('.hero__item').forEach(el =>
		$gsap.from(el, {
			scale: 0.5,
			opacity: 0,
			filter: 'blur(10px)',
			scrollTrigger: {
				trigger: el,
				start: 'top 70%'
			}
		})
	);
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use 'sass:list';
@keyframes slide-from-top {
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.hero {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: clamp(20px, 5vw, 100px);
	overflow-x: clip;
	@include mix.respond('md') {
		align-items: stretch;
	}
	&__search {
		padding: 0 6vw;
	}
	&__title {
		font-size: clamp(30px, 5vw, 72px);
		font-weight: 600;
		text-align: center;
		animation: slide-from-top 0.3s;
		@include mix.respond('md') {
			align-self: center;
			font-weight: 700;
			max-width: 17ch;
		}
	}
	&__sprinkles {
		z-index: -1;
		fill: rgb(231, 239, 247);
		position: absolute;
		width: 100%;
		height: 100%;
	}
	&__content {
		max-width: 900px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
	&__list {
		padding: max(5vw, 50px);
		padding-bottom: 100px;
		gap: max(3vw, 16px);
		display: grid;
		grid-auto-flow: column;
		@include mix.respond('md') {
			align-self: center;
		}
	}
	&__item {
		$translations: (
			1: 100px,
			2: 80px,
			3: 60px,
			4: 40px,
			5: 0,
			6: 40px,
			7: 60px,
			8: 80px,
			9: 100px
		);
		background-color: #fff;
		box-shadow: 0px 53px 70px 0px rgba(0, 0, 0, 0.1);
		border-radius: 14px;
		display: grid;
		// Loop through the map to apply translations

		@for $i from 1 through list.length($translations) {
			&:nth-child(#{$i}) {
				transform: translateY(map.get($translations, $i));
			}
		}
		@include mix.respond('md') {
			border-radius: 5px;
		}

		&:not(.hero__item--aubergine) {
			.hero__item-img {
				translate: 0 -10%;
				scale: 1.3;
			}
		}
		&--aubergine {
			.hero__item-img {
				translate: 0 -20%;
			}
		}
		&-img {
			grid-area: 1/1/2/2;
			object-fit: contain;
			z-index: 1;
			@include mix.respond('md') {
				width: 75px;
				height: auto;
			}
			&--backlight {
				filter: blur(20px);
			}
		}
	}
}
</style>
