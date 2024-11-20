<template>
	<section class="hero">
		<div class="hero__box">
			<span class="hero__title text-secondary">НОВЫЙ ФОРМАТ</span>
			<span class="hero__title text-primary">ДЛЯ ЭКСПОРТА</span>
		</div>
		<p class="hero__text">
			Рекламный бриф, следовательно, спонтанно транслирует тактический медиаплан. Рекламная
			кампания нейтрализует медиамикс
		</p>
		<button class="hero__button text-grey" @click="scrollDown">
			<span>Скролл вниз</span>
			<svg class="hero__icon stroke-grey">
				<use href="~/assets/sprite.svg#down-arrow" />
			</svg>
		</button>
	</section>
</template>

<script setup>
import Lenis from 'lenis';

const scrollDown = () => {
	const lenis = new Lenis();
	lenis.scrollTo();
};
</script>

<style lang="scss" scoped>
@keyframes slide-in-from-left {
	from {
		opacity: 0;
		transform: translateX(50px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-in-from-right {
	from {
		opacity: 0;
		transform: translateX(-50px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-in-from-top {
	from {
		opacity: 0;
		transform: translateY(-50px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes slide-in-from-bottom {
	from {
		opacity: 0;
		transform: translateY(50px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.hero {
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 3vw, 45px);
	padding: 0 8vw;
	@include mix.respond('md') {
		padding: 0;
	}
	&__button {
		display: flex;
		align-items: center;
		gap: 8px;
		align-self: flex-start;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 0.02em;
		animation: slide-in-from-bottom 0.5s backwards 0.4s;
		@include mix.respond('md') {
			margin-top: 69px;
			align-self: center;
		}
	}
	&__text {
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 0.02em;
		max-width: 463px;
		align-self: flex-end;
		line-height: 1.4;
		animation: slide-in-from-top 0.5s backwards 0.3s;
		@include mix.respond('md') {
			text-align: center;
		}
	}
	&__box {
		display: flex;
		flex-direction: column;
		gap: 10px;
		@include mix.respond('md') {
			gap: 20px;
			padding: 0;
		}
	}
	&__title {
		font-size: clamp(40px, 7vw, 100px);
		font-weight: 700;
		animation-duration: 0.7s;
		&:last-of-type {
			animation-name: slide-in-from-right;
		}
		&:first-of-type {
			animation-name: slide-in-from-left;
			text-align: right;
			@include mix.respond('md', min) {
				letter-spacing: -0.04em;
			}
		}
	}
	&__icon {
		width: 12px;
		height: 7px;
		fill: none;
		transition: transform 0.3s;
	}
}
</style>
