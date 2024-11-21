<template>
	<section class="hero">
		<div class="hero__container">
			<img class="hero__img" src="/img/about-hero.jpeg" alt="about hero" />
			<h1 class="hero__title">
				Лучшие Российские <br />
				товары на Вашем столе
			</h1>
			<img class="hero__img" src="/img/about-hero-building.png" alt="about hero" />
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes slide-in-from-top {
	from {
		opacity: 0;
		transform: translateY(-25px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes slide-in-from-bottom {
	from {
		opacity: 0;
		transform: translateY(25px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes appear {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.hero {
	&__title {
		font-size: clamp(28px, 7vw, 82px);
		font-weight: 800;
		letter-spacing: 0.06em;
		text-align: center;
		color: #fff;
		line-height: 1.2;
		padding-top: 80px;
		animation: slide-in-from-top 0.6s;
		@include mix.respond('md') {
			padding-top: 100px;
			letter-spacing: 0;
		}
	}
	&__container {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__img {
		pointer-events: none;
		width: 100%;
		height: 836px;
		object-fit: cover;
		&:last-of-type {
			animation: appear 0.6s;
		}
		@include mix.respond('md') {
			height: 560px;
		}
	}
}
</style>
