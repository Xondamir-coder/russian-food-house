<template>
	<section class="buy">
		<!-- top part -->
		<div class="buy__top">
			<div class="buy__item">
				<NuxtImg
					sizes="sm:100px md:200px xl:300px"
					width="300"
					height="300"
					class="buy__img"
					src="/img/apple.webp"
					alt="apple" />
				<NuxtImg
					sizes="sm:100px md:200px xl:300px"
					width="300"
					height="300"
					class="buy__img--backlight"
					src="/img/apple.webp"
					alt="apple" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:100px md:250px xl:438px"
					width="438"
					height="600"
					class="unscaled buy__img"
					src="/img/aubergine.webp"
					alt="aubergine" />
				<NuxtImg
					sizes="sm:100px md:250px xl:438px"
					width="438"
					height="600"
					class="unscaled buy__img--backlight"
					src="/img/aubergine.webp"
					alt="aubergine" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:500px"
					width="500"
					height="500"
					class="buy__img"
					src="/img/cherry.webp"
					alt="cherry" />
				<NuxtImg
					sizes="sm:200px md:300px xl:500px"
					width="500"
					height="500"
					class="buy__img--backlight"
					src="/img/cherry.webp"
					alt="cherry" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:100px md:200px xl:300px"
					width="300"
					height="300"
					class="buy__img"
					src="/img/apple.webp"
					alt="apple" />
				<NuxtImg
					sizes="sm:100px md:200px xl:300px"
					width="300"
					height="300"
					class="buy__img--backlight"
					src="/img/apple.webp"
					alt="apple" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:100px md:250px xl:438px"
					width="438"
					height="600"
					class="unscaled buy__img"
					src="/img/aubergine.webp"
					alt="aubergine" />
				<NuxtImg
					sizes="sm:100px md:250px xl:438px"
					width="438"
					height="600"
					class="unscaled buy__img--backlight"
					src="/img/aubergine.webp"
					alt="aubergine" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:500px"
					width="500"
					height="500"
					class="buy__img"
					src="/img/cherry.webp"
					alt="cherry" />
				<NuxtImg
					sizes="sm:200px md:300px xl:500px"
					width="500"
					height="500"
					class="buy__img--backlight"
					src="/img/cherry.webp"
					alt="cherry" />
			</div>
		</div>

		<!-- Center text -->
		<h2 class="buy__title text-primary">
			<span v-for="letter in title" :key="letter">{{ letter }}</span>
		</h2>

		<div class="buy__bottom">
			<!-- bottom part -->
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:500px"
					width="500"
					height="500"
					class="buy__img"
					src="/img/cherry.webp"
					alt="cherry" />
				<NuxtImg
					sizes="sm:200px md:300px xl:500px"
					width="500"
					height="500"
					class="buy__img--backlight"
					src="/img/cherry.webp"
					alt="cherry" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img"
					src="/img/lemon.webp"
					alt="lemon" />
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img--backlight"
					src="/img/lemon.webp"
					alt="lemon" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img"
					src="/img/carrot.webp"
					alt="carrot" />
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img--backlight"
					src="/img/carrot.webp"
					alt="carrot" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:100px md:200px xl:300px"
					width="300"
					height="300"
					class="buy__img"
					src="/img/apple.webp"
					alt="apple" />
				<NuxtImg
					sizes="sm:100px md:200px xl:300px"
					width="300"
					height="300"
					class="buy__img--backlight"
					src="/img/apple.webp"
					alt="apple" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:500px"
					width="500"
					height="500"
					class="buy__img"
					src="/img/cherry.webp"
					alt="cherry" />
				<NuxtImg
					sizes="sm:200px md:300px xl:500px"
					width="500"
					height="500"
					class="buy__img--backlight"
					src="/img/cherry.webp"
					alt="cherry" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img"
					src="/img/lemon.webp"
					alt="lemon" />
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img--backlight"
					src="/img/lemon.webp"
					alt="lemon" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img"
					src="/img/carrot.webp"
					alt="carrot" />
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img--backlight"
					src="/img/carrot.webp"
					alt="carrot" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:100px md:200px xl:300px"
					width="300"
					height="300"
					class="buy__img"
					src="/img/apple.webp"
					alt="apple" />
				<NuxtImg
					sizes="sm:100px md:200px xl:300px"
					width="300"
					height="300"
					class="buy__img--backlight"
					src="/img/apple.webp"
					alt="apple" />
			</div>
			<div class="buy__item">
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img"
					src="/img/lemon.webp"
					alt="lemon" />
				<NuxtImg
					sizes="sm:200px md:300px xl:400px"
					width="400"
					height="400"
					class="buy__img--backlight"
					src="/img/lemon.webp"
					alt="lemon" />
			</div>
		</div>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const title = 'Время покупать'.split('');

onMounted(() => {
	$gsap.from('.buy__title span', {
		opacity: 0,
		stagger: 0.06,
		scrollTrigger: {
			trigger: '.buy',
			start: 'top 80%'
		}
	});
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
@keyframes slide-top {
	0% {
		transform: translate(-50%, 0);
	}
	100% {
		transform: translate(-25%, -25%);
	}
}
@keyframes slide-bottom {
	0% {
		transform: translate(-41.5%, 10%);
	}
	100% {
		transform: translate(0, 0);
	}
}

.buy {
	position: relative;
	min-height: 500px;
	display: grid;
	place-content: center;
	overflow: hidden;

	@include mix.respond('sm') {
		min-height: 250px;
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 30%;
		background: #f1f8ff76;
		filter: blur(10px);
		z-index: 10;
	}
	&::after {
		align-self: flex-end;
	}
	&__top,
	&__bottom {
		width: 200%;
		position: absolute;
		display: flex;
		transform: translateX(-50%) translateY(-25%);
		padding: 0 10%;
		& .buy__item:nth-child(even) {
			transform: translateY(-25%);
		}
	}
	&__top {
		justify-content: space-between;
		animation: slide-top 20s infinite linear alternate;
	}
	&__bottom {
		animation: slide-bottom 25s infinite linear alternate-reverse;
		align-self: flex-end;
		gap: 10vw;
		transform: translateX(-41.5%);
		@include mix.respond('lg') {
			gap: 60px;
			width: max-content;
		}
		& .buy__item:nth-child(even) {
			transform: translateY(-20%);
		}
		& .buy__item:nth-child(odd) {
			transform: translateY(50%);
		}
		& .buy__item:nth-child(8) {
			.buy__img,
			.buy__img--backlight {
				transform: scale(1.3) translateY(-20%);
			}
		}
		& .buy__item:nth-child(5) {
			.buy__img,
			.buy__img--backlight {
				transform: scale(1.3) translateY(0);
			}
		}
		& .buy__item:nth-child(6) {
			transform: translateY(-5%);
			.buy__img,
			.buy__img--backlight {
				transform: scale(1.3) translateY(-10%);
			}
		}
	}
	&__item {
		width: 150px;
		height: 200px;
		background-color: #fff;
		box-shadow: 0px 53px 70px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		position: relative;

		@include mix.respond('lg') {
			width: 8rem;
			height: 12rem;
		}
		@include mix.respond('sm') {
			width: 75px;
			height: 100px;
		}
	}

	&__img,
	&__img--backlight {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transform: scale(1);

		&:not(.unscaled) {
			transform: scale(1.3);
		}
	}
	&__img {
		&--backlight {
			position: absolute;
			inset: 0;
			filter: blur(15px);
			z-index: -1;
		}
	}
	&__title {
		z-index: 1;
		font-size: clamp(42px, 9vw, 136px);
		font-weight: 800;
		letter-spacing: -0.02em;
		text-align: center;
	}
}
</style>
