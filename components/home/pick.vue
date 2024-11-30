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
	end: 'bottom top',
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
			start: 'top 80%',
			trigger: '.pick'
		}
	});

	// Animate the first item to the position of the second item
	const items = $gsap.utils.toArray('.pick__item');
	const positions = [];
	items.forEach(item => {
		const left = getComputedStyle(item).getPropertyValue('--left');
		const right = getComputedStyle(item).getPropertyValue('--right');
		const top = getComputedStyle(item).getPropertyValue('--top');
		positions.push({ left, right, top });
	});

	// First item
	$gsap
		.timeline({
			scrollTrigger: customScrollTrigger
		})
		.to('.pick__item:first-of-type', {
			top: positions[1].top,
			left: positions[1].left,
			scale: 0.9
		})
		.to('.pick__item:first-of-type', {
			xPercent: -50,
			top: positions[2].top,
			left: positions[2].left,
			scale: 1
		})
		.to('.pick__item:first-of-type', {
			xPercent: 0,
			left: 'initial',
			top: positions[3].top,
			right: positions[3].right,
			scale: 0.9
		})
		.to('.pick__item:first-of-type', {
			xPercent: 0,
			top: positions[4].top,
			right: positions[4].right,
			scale: 0.7
		});

	// Second item
	$gsap
		.timeline({
			scrollTrigger: customScrollTrigger
		})
		.to('.pick__item:nth-of-type(2)', {
			xPercent: -50,
			top: positions[2].top,
			left: positions[2].left,
			scale: 1
		})
		.to('.pick__item:nth-of-type(2)', {
			xPercent: 0,
			left: 'initial',
			top: positions[3].top,
			right: positions[3].right,
			scale: 0.9
		})
		.to('.pick__item:nth-of-type(2)', {
			top: positions[4].top,
			right: positions[4].right,
			scale: 0.7
		})
		.to('.pick__item:nth-of-type(2)', {
			top: 600,
			right: positions[4].right - 150,
			scale: 0.7,
			opacity: 0
		});

	// Third item
	$gsap
		.timeline({
			scrollTrigger: customScrollTrigger
		})
		.to('.pick__item:nth-of-type(3)', {
			left: 'initial',
			xPercent: 0,
			top: positions[3].top,
			right: positions[3].right,
			scale: 0.9
		})
		.to('.pick__item:nth-of-type(3)', {
			top: positions[4].top,
			right: positions[4].right,
			scale: 0.7
		})
		.to('.pick__item:nth-of-type(3)', {
			top: 600,
			right: positions[4].right - 150,
			scale: 0.7
		})
		.to('.pick__item:nth-of-type(3)', {
			top: 800,
			right: positions[4].right - 350,
			opacity: 0
		});

	// Fourth item
	$gsap
		.timeline({
			scrollTrigger: customScrollTrigger
		})
		.to('.pick__item:nth-of-type(4)', {
			left: 'initial',
			top: positions[4].top,
			right: positions[4].right,
			scale: 0.7
		})
		.to('.pick__item:nth-of-type(4)', {
			top: 600,
			right: positions[4].right - 150,
			scale: 0.7
		})
		.to('.pick__item:nth-of-type(4)', {
			top: 800,
			right: positions[4].right - 350,
			scale: 0.7
		})
		.to('.pick__item:nth-of-type(4)', {
			top: 1000,
			right: positions[4].right - 550,
			scale: 0.7
		});

	// Fifth item
	$gsap
		.timeline({
			scrollTrigger: customScrollTrigger
		})
		.to('.pick__item:nth-of-type(5)', {
			left: 'initial',
			top: 600,
			right: positions[4].right - 150
		})
		.to('.pick__item:nth-of-type(5)', {
			top: 800,
			right: positions[4].right - 350
		})
		.to('.pick__item:nth-of-type(5)', {
			top: 1000,
			right: positions[4].right - 550
		})
		.to('.pick__item:nth-of-type(5)', {
			top: 1200,
			right: positions[4].right - 750
		});
});
</script>

<style lang="scss" scoped>
.img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.pick {
	display: grid;
	align-items: flex-end;
	justify-content: center;
	min-height: clamp(350px, 40vw, 600px);
	position: relative;

	&__img {
		width: 85%;
		height: 85%;
		object-fit: contain;
	}
	&__item {
		--left: auto;
		--right: auto;
		--top: auto;
		position: absolute;
		box-shadow: 37px 42px 100px 0px rgba(0, 0, 0, 0.2);
		background-color: #fff;
		border-radius: 50%;
		display: grid;
		place-items: center;
		aspect-ratio: 1;
		width: clamp(225px, 20vw, 300px);
		left: var(--left);
		right: var(--right);
		top: var(--top);
		&:first-of-type {
			--left: 0;
			@include mix.respond('lg') {
				--left: -20%;
			}
			@include mix.respond('sm') {
				--left: -300px;
			}
		}
		&:nth-of-type(even) {
			--top: 10%;
			transform: scale(0.9);
		}
		&:nth-of-type(2) {
			--left: 15%;
			@include mix.respond('lg') {
				--left: 2%;
			}
			@include mix.respond('sm') {
				--left: -160px;
			}
		}
		&:nth-of-type(3) {
			translate: -50% 0;
			--left: 50%;
			--top: 0;
		}
		&:nth-of-type(4) {
			--right: 15%;
			@include mix.respond('lg') {
				--right: 2%;
			}
			@include mix.respond('sm') {
				--right: -160px;
			}
		}
		&:last-of-type {
			--right: 0;
			@include mix.respond('lg') {
				--right: -20%;
			}
			@include mix.respond('sm') {
				--right: -300px;
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
