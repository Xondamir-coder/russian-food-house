<template>
	<section class="advantages">
		<h2 class="section-title advantages__title">Преимущества проекта</h2>
		<ul class="advantages__list">
			<li class="advantages__item" v-for="item in sponsors" :key="item">
				<img class="advantages__img" width="200" height="40" :src="item" alt="Sponsor" />
			</li>
		</ul>
	</section>
</template>

<script setup>
import carrefour from '/img/carrefour.png';
import baraka from '/img/baraka.png';
import nestle from '/img/nestle.png';
import korzinka from '/img/korzinka.png';
import magnum from '/img/magnum.png';
import havas from '/img/havas.png';
import makro from '/img/makro.png';
import bi1 from '/img/bi1.png';
const sponsors = [carrefour, baraka, nestle, korzinka, magnum, havas, makro, bi1];

const { $gsap } = useNuxtApp();

onMounted(() => {
	$gsap.from('.advantages__item', {
		stagger: 0.1,
		scale: 0,
		scrollTrigger: {
			trigger: '.advantages',
			start: 'top 80%'
		}
	});
});
</script>

<style lang="scss" scoped>
@use 'sass:map';

.advantages {
	display: flex;
	flex-direction: column;
	padding-top: 30px;
	gap: 33px;
	@include mix.respond('md') {
		gap: 16px;
		padding-top: 16px;
	}
	&__item {
		padding: 19px 0;
		background-color: #fff;
		box-shadow: 0px 10px 45px 0px rgba(7, 14, 39, 0.05);
		border-radius: 16px;
		display: grid;
		place-items: center;
		scroll-snap-align: start;
		&:nth-of-type(2),
		&:nth-of-type(3),
		&:nth-of-type(4),
		&:nth-of-type(5) {
			img {
				width: 60%;
				height: auto;
			}
		}
		&:nth-of-type(1),
		&:nth-of-type(8) {
			img {
				width: 20%;
				height: auto;
				transform: scale(1.8);
			}
		}
		&:nth-of-type(6) {
			img {
				width: 20%;
				height: auto;
			}
		}
	}
	&__img {
		object-fit: contain;
		// width: 80%;
		// height: auto;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-auto-rows: 1fr;
		column-gap: 20px;
		row-gap: 33px;
		@include mix.respond('sm') {
			grid-auto-flow: column;
			grid-template-columns: initial;
			grid-auto-columns: 280px;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
		}
	}
	&__title {
		color: map.get(var.$colors, 'black');
		text-align: left;
		letter-spacing: 0.03em;
		font-weight: 700;
		font-size: clamp(28px, 4vw, 52px);
	}
}
</style>
