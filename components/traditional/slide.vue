<template>
	<div class="item">
		<div class="item__text text-primary">
			{{ words[0] }}
		</div>
		<div class="item__plate"></div>
		<div class="item__text text-primary" v-if="words[1]">
			{{ words[1] }}
		</div>
		<img class="item__img" :src="`${DOMAIN_URL}/${data.image}`" :alt="data.meta_title" />
		<div class="item__action">
			<button class="item__button" @click="changeSlide('prev')">
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
			<NuxtLink class="item__link" :to="`/recipes/${data.title_slug}`">
				<ButtonPrimary label="Узнать больше" />
			</NuxtLink>
			<button class="item__button" @click="changeSlide('next')">
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
	</div>
</template>

<script setup>
const { DOMAIN_URL } = useURL();
const props = defineProps({
	data: Object
});
const emits = defineEmits(['changeSlide']);

const changeSlide = direction => {
	emits('changeSlide', direction);
};

const words = computed(() => props.data.title.split('-'));
</script>

<style lang="scss" scoped>
@use 'sass:map';
@keyframes appear {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes slide-from-top {
	from {
		opacity: 0;
		translate: 0 -50px;
	}
	to {
		opacity: 1;
		translate: 0 0;
	}
}
@keyframes slide-from-bottom {
	from {
		opacity: 0;
		translate: 0 25%;
	}
	to {
		opacity: 1;
		translate: 0 0;
	}
}
@keyframes scale-up {
	from {
		opacity: 0;
		scale: 0.5;
	}
	to {
		opacity: 1;
		scale: 1;
	}
}
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

.item {
	padding-top: 50px;
	padding-inline: min(6vw, 80px);
	position: relative;
	display: grid;
	align-items: flex-start;
	&.active {
		z-index: 10;
	}
	&:not(.active) {
		.item__plate {
			visibility: hidden;
		}
		.item__img {
			opacity: 0;
			scale: 0.5;
		}
		.item__text {
			opacity: 0;
			translate: 0 -25%;
		}
	}
	@include mix.respond('xl') {
		height: calc(100vh - 68.83px);
	}
	@include mix.respond('md') {
		padding-inline: 20px;
	}
	&__link {
		animation: appear 1s backwards 1s;
		button {
			font-family: var.$font-base;
			letter-spacing: 0.02em;
			@include mix.respond('md') {
				padding: 19px 29.5px;
			}
			svg {
				@include mix.respond('md') {
					width: 8px;
					height: 15px;
				}
			}
		}
	}

	& > * {
		grid-area: 1/1/2/2;
		// position: absolute;
	}
	&__img {
		pointer-events: none;
		z-index: 4;
		align-self: flex-end;
		justify-self: center;
		width: 60%;
		transform: translate(0, 4%);
		filter: drop-shadow(41px 53px 100px rgba(0, 0, 0, 0.6));
		// animation: slide-from-top 1s backwards 0.3s;
		animation: rotate 50s infinite linear;
		transition: opacity 0.5s, scale 0.5s;
		@include mix.respond('xl') {
			position: absolute;
			width: 80vh;
			translate: 0 15%;
		}
	}
	//color rgba(255, 168, 0, 1)
	&__plate {
		z-index: 2;
		align-self: flex-end;
		justify-self: center;
		transform: translateY(15%);
		aspect-ratio: 1;
		width: 80%;
		box-shadow: 0px 0px 100px 0px rgba(100, 112, 145, 0.5);
		backdrop-filter: blur(10px);
		border-radius: 50%;
		animation: scale-up 1s backwards;
		position: relative;
		@include mix.respond('xl') {
			position: absolute;
			width: 100vh;
			translate: 0 10%;
		}
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
		animation: appear 1s backwards 1s;
		transition: background 0.2s;
		&:hover {
			background: map.get(var.$colors, 'secondary');
		}
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
		letter-spacing: 0.1em;
		text-align: center;
		line-height: 0.8;
		text-transform: uppercase;
		animation: slide-from-bottom 1s backwards;
		transition: translate 0.5s, opacity 0.5s;
		@for $i from 1 through 3 {
			&:nth-child(#{$i}) {
				animation-delay: 0.1s * $i;
			}
		}
		@include mix.respond('xl') {
			line-height: 1;
		}
		@media only screen and (min-height: 700px) {
			margin-top: 5vh;
		}
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
