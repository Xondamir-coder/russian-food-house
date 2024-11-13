<template>
	<section class="hero__wrapper section-padding">
		<div class="hero bg-secondary">
			<svg class="hero__sprinkles">
				<use href="~/assets/sprite.svg#sprinkles" />
			</svg>
			<div class="hero__content">
				<h1 class="hero__title">Лучшие российские товары на Вашем столе</h1>
				<p class="hero__text">
					GoodFoodRussia предлагает Вам ознакомиться с продукцией ведущих российских
					производителей для долгосрочного партнерства.
				</p>
				<ul class="hero__items">
					<li class="hero__item" v-for="item in items" :key="item.name">
						<span class="hero__item-amount">
							{{ item.amount }}
						</span>
						<span class="hero__item-name">
							{{ item.name }}
						</span>
					</li>
				</ul>
			</div>
			<img class="hero__img" src="~/assets/img/hero.webp" alt="hero " />
			<!-- <ul class="hero__cards">
				<li class="hero__card" v-for="card in cards">
					<img class="hero__card-img" :src="card.img" />
					<div class="hero__card-content">
						<h3 class="hero__card-title">{{ card.name }}</h3>
						<p class="hero__card-desc">
							{{ card.desc }}
						</p>
					</div>
				</li>
			</ul> -->
		</div>
	</section>
</template>

<script setup>
import tomatoImg from '~/assets/img/tomato.webp';
import pomegranateImg from '~/assets/img/pomegranate.webp';
import grapeImg from '~/assets/img/grape.webp';
const items = [
	{
		amount: 3110,
		name: 'Товаров'
	},
	{
		amount: 3110,
		name: 'Производителей'
	}
];
const cards = [
	{
		img: pomegranateImg,
		name: 'Гранат',
		desc: 'Название сорта'
	},
	{
		img: grapeImg,
		name: 'Виноград',
		desc: 'Название сорта'
	},
	{
		img: tomatoImg,
		name: 'Помидоры',
		desc: 'Название сорта'
	}
];
</script>

<style lang="scss" scoped>
@keyframes heroimg {
	from {
		opacity: 0;
		transform: scale(1.3) translate(calc(5% + 80px), 5%);
	}
	to {
		opacity: 1;
		transform: scale(1.6) translate(5%, 5%);
	}
}
@keyframes appear {
	from {
		opacity: 0;
	}
	to {
		opacity: 0.5;
	}
}
.hero {
	margin-top: 2rem;
	border-radius: 1.6rem;
	position: relative;
	display: grid;
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	@include mix.respond('sm') {
		grid-template-columns: auto;
		margin-top: 16px;
	}
	&__img {
		pointer-events: none;
		width: 100%;
		height: auto;
		z-index: 2;
		transform: scale(1.6) translate(5%, 5%);
		animation: heroimg 0.7s;

		@include mix.respond('sm') {
			margin-top: -10%;
			transform: scale(1.4) translate(5%, 10%);
		}
	}
	&__card {
		position: absolute;
		perspective: 1000px;

		&:first-child {
			.hero__card-content {
				transform: rotateX(10deg) rotateY(10deg) rotateZ(10deg) translate3D(0, 0, 0);
			}
		}
		&:nth-child(2) {
			opacity: 0;
		}
		&:nth-child(3) {
			opacity: 0;
		}
		&-content {
			padding: 1.1rem;
			background: #fff;
			width: 259px;
			height: 400px;
			border-radius: 1.2rem;
			font-family: var.$font-secondary;
			box-shadow: 52px 53px 100px 0px rgba(48, 17, 17, 0.2);
			display: flex;
			justify-content: flex-end;
			flex-direction: column;
			gap: 10px;
		}
		&-title {
			color: rgba(34, 40, 43, 1);
			font-size: 1.4rem;
			letter-spacing: 0.03em;
			font-weight: 600;
		}
		&-desc {
			letter-spacing: 0.04em;
			color: rgba(144, 157, 162, 1);
			font-size: 0.8rem;
		}

		img {
			z-index: 2;
			position: absolute;
			width: 120%;
			height: 120%;
			object-fit: contain;
		}
	}
	&__cards {
		position: relative;
		display: flex;
		justify-content: flex-end;
		display: none;
	}
	&__items {
		margin-top: 4rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: min(3vw, 30px);
		@include mix.respond('md') {
			margin-top: 0;
		}
	}
	&__item {
		@include mix.slide-appear-y(20px, slide-y-up-hero, 0.5s, backwards);
		animation-delay: 0.4s;
		&:last-of-type {
			@include mix.slide-appear-y(-20px, slide-y-down-hero, 0.5s, backwards);
			animation-delay: 0.6s;
		}
		background: radial-gradient(
				45.6% 376.6% at 45.79% 55.53%,
				rgba(243, 245, 246, 0.06) 0%,
				rgba(243, 245, 246, 0.6) 100%
			)
			/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
		backdrop-filter: blur(30px);
		font-family: var.$font-secondary;
		border-radius: 15px;
		padding: 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@include mix.respond('md') {
			padding: 10px;
			flex-direction: column;
			align-items: flex-start;
			gap: 5px;
		}

		&-amount {
			font-size: 2.1rem;
			font-weight: 600;
			letter-spacing: -0.03em;
		}
		&-name {
			letter-spacing: -0.03em;
		}
	}
	&__sprinkles {
		animation: appear 0.5s 0.3s both;
		fill: rgba(240, 132, 121, 1);
		width: 100%;
		height: 100%;
		object-fit: contain;
		position: absolute;
		opacity: 0.5;
		place-self: center;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		@include mix.respond('md') {
			display: none;
		}
	}
	&__content {
		padding: 2.5rem;
		color: #fff;
		z-index: 2;
		display: flex;
		flex-direction: column;
		gap: min(4vw, 30px);
		@include mix.respond('md') {
			padding: 16px;
		}
	}
	&__title {
		@include mix.slide-appear-x(-80px, slide-appear-x-hero, 0.7s);
		font-size: clamp(26px, 3.8vw, 60px);
		font-weight: 700;
		line-height: 1;
	}
	&__text {
		animation: slide-appear-x-hero 0.7s backwards;
		animation-delay: 0.2s;
		font-size: clamp(16px, 1.5vw, 21px);
	}
}
</style>
