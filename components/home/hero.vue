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
			<ul class="hero__cards">
				<li class="hero__card" v-for="card in cards">
					<div class="hero__card-container">
						<NuxtImg
							:width="card.img.width"
							:height="card.img.height"
							sizes="xs:200px sm:400px lg:600px xl:800px"
							:alt="card.name"
							class="hero__card-img hero__card-img--backlight"
							:src="card.img.src" />
						<NuxtImg
							:width="card.img.width"
							:height="card.img.height"
							sizes="xs:200px sm:400px lg:600px xl:800px"
							:alt="card.name"
							class="hero__card-img"
							:src="card.img.src" />
					</div>
					<div class="hero__card-content">
						<h3 class="hero__card-title">{{ card.name }}</h3>
						<p class="hero__card-desc">
							{{ card.desc }}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import tomatoImg from '/img/tomato.webp';
import pomegranateImg from '/img/pomegranate.webp';
import grapeImg from '/img/grape.webp';
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
		img: { src: tomatoImg, width: 450, height: 466 },
		name: 'Помидоры',
		desc: 'Название сорта'
	},
	{
		img: { src: grapeImg, width: 1000, height: 778 },
		name: 'Виноград',
		desc: 'Название сорта'
	},
	{
		img: { src: pomegranateImg, width: 768, height: 768 },
		name: 'Гранат',
		desc: 'Название сорта'
	}
];
</script>

<style lang="scss" scoped>
@keyframes card-appear-1 {
	from {
		opacity: 0;
		scale: 0.4;
		translate: -30% 0%;
	}
	to {
		opacity: 1;
		scale: 1;
		translate: 0 0;
	}
}
@keyframes card-appear-2 {
	from {
		opacity: 0;
		scale: 0.4;
		translate: 50% 0%;
	}
	to {
		opacity: 1;
		scale: 1;
		translate: 0 0;
	}
}
@keyframes card-appear-3 {
	from {
		opacity: 0;
		scale: 0.4;
		translate: -20% 30%;
	}
	to {
		opacity: 1;
		scale: 1;
		translate: 0 0;
	}
}
@keyframes hero-img-big {
	from {
		opacity: 0;
		transform: scale(1.3) translate(calc(5% + 80px), 5%);
	}
	to {
		opacity: 1;
		transform: scale(1.6) translate(5%, 5%);
	}
}
@keyframes hero-img-small {
	from {
		opacity: 0;
		transform: scale(1) translate(calc(5% + 80px), 10%);
	}
	to {
		opacity: 1;
		transform: scale(1.4) translate(5%, 10%);
	}
}
@keyframes slide-in-from-left {
	from {
		opacity: 0;
		transform: translateX(-80px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
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
	@include mix.respond('md') {
		grid-template-columns: auto;
		margin-top: 16px;
		gap: 50px;
		margin-bottom: 40px;
	}
	&__img {
		pointer-events: none;
		width: 100%;
		height: auto;
		z-index: 2;
		transform: scale(1.6) translate(5%, 5%);
		animation: hero-img-big 0.7s;

		@include mix.respond('sm') {
			margin-top: -10%;
			transform: scale(1.4) translate(5%, 10%);
			animation: hero-img-small 0.7s;
		}
	}
	&__cards {
		display: grid;
		justify-content: center;

		&:hover {
			.hero__card {
				&:nth-child(1) {
					transform: skew(-15deg) translate(80%, 50%);
				}
				&:nth-child(2) {
					transform: skew(-15deg) translate(0%, 28%);
				}
				&:nth-child(3) {
					transform: skew(-15deg) translate(-25%, -20%);
				}
			}
		}
		& > * {
			grid-area: 1/1/-1/-1;
			width: 70%;
			height: 80%;

			@include mix.respond('md') {
				width: 85%;
				height: 95%;
			}
		}
	}
	&__card {
		font-family: var.$font-secondary;
		display: flex;
		gap: 6px;
		flex-direction: column;
		box-shadow: 52px 53px 100px 0px rgba(48, 17, 17, 0.2);
		border-radius: 20px;
		background: #fff;
		padding: max(2vw, 15px);
		transform: skew(-15deg);
		justify-content: flex-end;
		transition: transform 0.3s;
		animation: card-appear 1s backwards;

		&:nth-child(1) {
			animation: card-appear-1 1s backwards 0.2s;
			transform: skew(-15deg) translate(60%, 40%);
			.hero__card-img {
				transform: skew(15deg) scale(1.35) translate(-15%, -15%);
				&--backlight {
					transform: skew(15deg) scale(1.5) translate(-15%, -15%);
				}
			}
		}
		&:nth-child(2) {
			animation: card-appear-2 1s backwards 0.1s;
			transform: skew(-15deg) translate(20%, 20%);
			.hero__card-img {
				transform: skew(15deg) scale(1.6) translate(0, -15%);
				&--backlight {
					transform: skew(15deg) scale(1.8) translate(0, -15%);
				}
			}
		}
		&:nth-child(3) {
			animation: card-appear-3 1s backwards;

			transform: skew(-15deg) translate(-20%, -10%);
			.hero__card-img {
				transform: skew(15deg) scale(1.7) translate(0, -7%);
				&--backlight {
				}
			}
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: 7px;
		}
		&-title {
			color: rgba(34, 40, 43, 1);
			font-size: 1.4rem;
			letter-spacing: 0.03em;
			font-weight: 700;
			@include mix.respond('sm') {
				font-size: 15.5px;
			}
		}
		&-desc {
			letter-spacing: 0.04em;
			color: rgba(144, 157, 162, 1);
			font-size: 0.8rem;
			font-weight: 500;
			@include mix.respond('sm') {
				font-size: 9px;
			}
		}
		&-container {
			user-select: none;
			display: grid;
			pointer-events: none;
			& > * {
				grid-area: 1/1/2/2;
			}
		}
		&-img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			&--backlight {
				filter: blur(20px);
			}
		}
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
		animation-name: slide-in-from-bottom-20;
		animation-delay: 0.4s;
		animation-fill-mode: backwards;
		animation-duration: 0.5s;

		&:last-of-type {
			animation-name: slide-in-from-top-20;
			animation-duration: 0.6s;
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
		animation: slide-in-from-left 0.7s backwards;
		font-size: clamp(26px, 3.8vw, 60px);
		font-weight: 700;
		line-height: 1;
	}
	&__text {
		animation: slide-in-from-left 0.7s 0.2s backwards;
		font-size: clamp(16px, 1.5vw, 21px);
	}
}
</style>
