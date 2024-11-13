<template>
	<section class="pick">
		<h2 class="pick__title text-primary">Почему Вам надо выбрать нас</h2>
		<!-- <div class="pick__item">
				<img class="pick__img" src="~/assets/img/grape.webp" alt="grape" />
			</div>
			<div class="pick__item">
				<img class="pick__img" src="~/assets/img/strawberry.webp" alt="strawberry" />
			</div>
			<div class="pick__item">
				<img class="pick__img" src="~/assets/img/cherry.webp" alt="cherry" />
			</div> -->
		<div class="pick__item">
			<img class="pick__img" src="~/assets/img/grape.webp" alt="grape" />
		</div>
		<div class="pick__item">
			<img class="pick__img" src="~/assets/img/strawberry.webp" alt="strawberry" />
		</div>
		<div class="pick__item">
			<img class="pick__img" src="~/assets/img/cherry.webp" alt="cherry" />
		</div>
		<div class="pick__item">
			<img class="pick__img" src="~/assets/img/apple.webp" alt="apple" />
		</div>
		<div class="pick__item">
			<img class="pick__img" src="~/assets/img/carrot.webp" alt="carrot" />
		</div>
	</section>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
	gsap.from('.pick__item', {
		opacity: 0,
		stagger: 0.15,
		scale: 0,
		scrollTrigger: {
			trigger: '.pick',
			start: 'top 80%',
			toggleActions: 'play none none reverse'
		}
	});
	gsap.from('.pick__title', {
		opacity: 0,
		y: 40,
		scrollTrigger: {
			trigger: '.pick',
			start: 'top 30%',
			toggleActions: 'play none none reverse'
		}
	});
});
</script>

<style lang="scss" scoped>
.pick {
	display: grid;
	align-items: flex-end;
	justify-content: center;
	min-height: max(40vw, 350px);
	position: relative;
	&__img {
		width: 85%;
		height: 85%;
		object-fit: contain;
	}
	&__item {
		position: absolute;
		box-shadow: 37px 42px 100px 0px rgba(0, 0, 0, 0.2);
		background-color: #fff;
		border-radius: 50%;
		display: grid;
		place-items: center;
		aspect-ratio: 1;
		width: clamp(225px, 20vw, 300px);
		&:first-of-type {
			left: 0;
			@include mix.respond('lg') {
				left: -20%;
			}
			@include mix.respond('sm') {
				left: -300px;
			}
		}
		&:nth-of-type(even) {
			top: 10%;
			transform: scale(0.9);
		}
		&:nth-of-type(2) {
			left: 15%;
			@include mix.respond('lg') {
				left: 2%;
			}
			@include mix.respond('sm') {
				left: -160px;
			}
		}
		&:nth-of-type(3) {
			justify-self: center;
			align-self: flex-start;
		}
		&:nth-of-type(4) {
			right: 15%;
			@include mix.respond('lg') {
				right: 2%;
			}
			@include mix.respond('sm') {
				right: -160px;
			}
		}
		&:last-of-type {
			right: 0;
			@include mix.respond('lg') {
				right: -20%;
			}
			@include mix.respond('sm') {
				right: -300px;
			}
		}
		&:first-of-type,
		&:last-of-type {
			transform: scale(0.7);
		}
	}
	&__title {
		margin-bottom: 8vw;
		text-align: center;
		font-size: clamp(38px, 5vw, 72px);
		font-weight: 800;
		line-height: 1;
		letter-spacing: -0.03em;
		max-width: 15ch;
	}
}
</style>
