<template>
	<section class="buy">
		<div class="buy__item buy__apple--1">
			<img class="buy__img" src="/img/apple.webp" alt="apple" />
			<img class="buy__img--backlight" src="/img/apple.webp" alt="apple" />
		</div>
		<div class="buy__item buy__aubergine">
			<img class="buy__img unscaled" src="/img/aubergine.webp" alt="aubergine" />
			<img class="buy__img--backlight unscaled" src="/img/aubergine.webp" alt="aubergine" />
		</div>
		<div class="buy__item buy__cherry--1">
			<img class="buy__img" src="/img/cherry.webp" alt="cherry" />
			<img class="buy__img--backlight" src="/img/cherry.webp" alt="cherry" />
		</div>
		<div class="buy__item buy__cherry--2">
			<img class="buy__img" src="/img/cherry.webp" alt="cherry" />
			<img class="buy__img--backlight" src="/img/cherry.webp" alt="cherry" />
		</div>
		<div class="buy__item buy__lemon--1">
			<img class="buy__img" src="/img/lemon.webp" alt="lemon" />
			<img class="buy__img--backlight" src="/img/lemon.webp" alt="lemon" />
		</div>
		<div class="buy__item buy__carrot">
			<img class="buy__img" src="/img/carrot.webp" alt="carrot" />
			<img class="buy__img--backlight" src="/img/carrot.webp" alt="carrot" />
		</div>
		<div class="buy__item buy__apple--2">
			<img class="buy__img" src="/img/apple.webp" alt="apple" />
			<img class="buy__img--backlight" src="/img/apple.webp" alt="apple" />
		</div>
		<div class="buy__item buy__lemon--2">
			<img class="buy__img" src="/img/lemon.webp" alt="lemon" />
			<img class="buy__img--backlight" src="/img/lemon.webp" alt="lemon" />
		</div>

		<!-- Center text -->
		<h2 class="buy__title text-primary">
			<span v-for="letter in title" :key="letter">{{ letter }}</span>
		</h2>
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
	$gsap.to('.buy__item', {
		stagger: 0.02,
		y: '-=300',
		scrollTrigger: {
			trigger: '.buy',
			start: 'top bottom',
			end: 'bottom top',
			scrub: 1
		}
	});
});
</script>

<style lang="scss" scoped>
@use 'sass:map';

.buy {
	position: relative;
	min-height: 500px;
	display: grid;
	place-content: center;
	overflow-y: clip;

	@include mix.respond('sm') {
		min-height: 250px;
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 15%;
		background: #f1f8ff76;
		filter: blur(10px);
		z-index: 10;
	}
	&::after {
		align-self: flex-end;
	}
	&__item {
		width: 150px;
		height: 200px;
		background-color: #fff;
		box-shadow: 0px 53px 70px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		position: absolute;

		@include mix.respond('lg') {
			width: 8rem;
			height: 12rem;
		}
		@include mix.respond('sm') {
			width: 75px;
			height: 100px;
		}
	}
	&__aubergine {
		justify-self: center;
		top: 15%;
	}
	&__carrot {
		justify-self: center;
		align-self: flex-end;
		bottom: -40%;
	}
	&__lemon {
		&--1 {
			top: 80%;
			left: 25%;
			z-index: 3;
		}
		&--2 {
			top: 100%;
			right: 0;
		}
	}
	&__cherry {
		&--1 {
			align-self: flex-end;
			left: 3%;
			bottom: -50%;
		}
		&--2 {
			justify-self: flex-end;
			right: 5%;
		}
	}
	&__apple {
		&--1 {
			top: 10%;
			left: 5%;
		}
		&--2 {
			top: 70%;
			right: 25%;
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
	&__img--backlight {
		position: absolute;
		inset: 0;
		filter: blur(15px);
		z-index: -1;
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
