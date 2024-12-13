<template>
	<main class="traditional">
		<div class="traditional__text text-primary">
			{{ words[0] }}
		</div>
		<div class="traditional__plate"></div>
		<div class="traditional__text text-primary">
			{{ words[1] }}
		</div>
		<img class="traditional__img" src="/img/recipes-traditional.png" alt="food banner" />
		<div class="traditional__action">
			<button class="traditional__button">
				<svg
					width="12"
					height="20"
					viewBox="0 0 12 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8.63901 1.09324L4.35901 5.37324L1.73234 7.98657C0.625677 9.09324 0.625677 10.8932 1.73234 11.9999L8.63901 18.9066C9.54568 19.8132 11.0923 19.1599 11.0923 17.8932V10.4132V2.10658C11.0923 0.826575 9.54568 0.186576 8.63901 1.09324Z"
						fill="white" />
				</svg>
			</button>
			<NuxtLink class="traditional__link" to="/recipes/traditional-recipe">
				<ButtonPrimary class="" label="Узнать больше" />
			</NuxtLink>
			<button class="traditional__button">
				<svg
					width="12"
					height="20"
					viewBox="0 0 12 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10.2662 7.98657L7.63958 5.3599L3.35958 1.0799C2.45292 0.186569 0.90625 0.826569 0.90625 2.10657V10.4132V17.8932C0.90625 19.1732 2.45292 19.8132 3.35958 18.9066L10.2662 11.9999C11.3729 10.9066 11.3729 9.09324 10.2662 7.98657Z"
						fill="white" />
				</svg>
			</button>
		</div>
	</main>
</template>

<script setup>
const words = 'Любим-вкусно'.split('-');
</script>

<style lang="scss" scoped>
@use 'sass:map';
.traditional {
	padding-top: 50px;
	padding-inline: min(6vw, 80px);
	position: relative;
	min-width: 100%;
	display: grid;
	align-items: flex-start;
	overflow: hidden;
	max-height: 100vh;
	@include mix.respond('md') {
		padding-inline: 20px;
	}
	&__link {
		button {
			font-family: var.$font-base;
			letter-spacing: 0.02em;
			@include mix.respond('md') {
				padding: 19px 29.5px;
			}
		}
	}
	svg {
		@include mix.respond('md') {
			width: 8px;
			height: 15px;
		}
	}
	& > * {
		grid-area: 1/1/2/2;
		// position: absolute;
	}
	&__img {
		z-index: 4;
		align-self: flex-end;
		justify-self: center;
		width: 60%;
		transform: translate(0, 4%);
	}
	&__plate {
		z-index: 2;
		align-self: flex-end;
		justify-self: center;
		transform: translateY(15%);
		aspect-ratio: 1;
		width: 80%;
		background: rgba(255, 255, 255, 0.4);
		box-shadow: 0px 0px 100px 0px rgba(100, 112, 145, 0.5);
		backdrop-filter: blur(10px);
		border-radius: 50%;
	}
	&__action {
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 5;
		align-self: center;
		transform: translateY(-180%);
		@include mix.respond('md') {
			transform: translateY(-40%);
			align-self: flex-end;
		}
	}
	&__button {
		@include mix.flex-center;
		background: map.get(var.$colors, 'primary');
		width: clamp(60px, 8vw, 92px);
		aspect-ratio: 1;
		border-radius: 50%;
		transform: translateY(150px);
		@include mix.respond('md') {
			transform: translateY(0);
		}
	}
	&__arrow {
		width: 20px;
		height: 20px;
		fill: #fff;
	}
	&__text {
		font-family: 'Bebas Neue Cyrillic', sans-serif;
		font-size: clamp(80px, 17vw, 260px);
		font-weight: 400;
		letter-spacing: 0.2em;
		text-align: center;
		line-height: 0.8;
		text-transform: uppercase;
		&:first-child {
			z-index: 1;
			// left: 50%;
			// transform: translateX(-50%);
		}
		&:nth-child(3) {
			z-index: 3;

			// left: 50%;
			// top: 300px;
			transform: translateY(100%);
		}
	}
}
</style>
