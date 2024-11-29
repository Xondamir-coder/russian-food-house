<template>
	<section class="pick">
		<h2 class="pick__title text-primary">Почему Вам надо выбрать нас</h2>
		<div class="pick__item" v-for="(item, index) in items" :key="index">
			<NuxtImg
				class="pick__img"
				:src="item.src"
				:sizes="item.sizes"
				:width="item.width"
				:height="item.height"
				:alt="item.alt" />
		</div>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

const motionPathProps = {
	curviness: 1.5,
	autoRotate: false
};

const customScrollTrigger = {
	trigger: '.pick',
	start: 'top 30%',
	end: 'center center',
	markers: true,
	scrub: 1
};

const items = [
	{
		src: '/img/grape.webp',
		sizes: 'sm:500px md:700px xl:1000px',
		width: 1000,
		height: 778,
		alt: 'grape'
	},
	{
		src: '/img/strawberry.webp',
		sizes: 'sm:300px md:500px xl:600px',
		width: 591,
		height: 591,
		alt: 'strawberry'
	},
	{
		src: '/img/cherry.webp',
		sizes: 'sm:350px md:600px xl:800px',
		width: 768,
		height: 768,
		alt: 'cherry'
	},
	{
		src: '/img/apple.webp',
		sizes: 'sm:600px md:900px xl:1500px',
		width: 1476,
		height: 1476,
		alt: 'apple'
	},
	{
		src: '/img/carrot.webp',
		sizes: 'sm:300px md:500px xl:700px',
		width: 689,
		height: 524,
		alt: 'carrot'
	}
];

onMounted(() => {
	// Animate the title
	$gsap.from('.pick__title', {
		opacity: 0,
		y: 40,
		scrollTrigger: {
			...customScrollTrigger
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
		transform: scale(0.7);
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
