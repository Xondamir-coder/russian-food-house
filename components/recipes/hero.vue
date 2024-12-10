<template>
	<section class="hero" id="recipes">
		<div class="hero__content">
			<h1 class="hero__title text-secondary">
				Чем натуральнее
				<br />
				тем вкуснее
			</h1>
			<img id="recipes-img" class="hero__img" src="/img/recipes-hero.webp" alt="hero" />
		</div>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();
onMounted(() => {
	$gsap.to('#recipes-img', {
		y: 135,
		scrollTrigger: {
			trigger: '#recipes',
			start: 'top top',
			end: '+=300',
			scrub: 1
		}
	});
});
</script>

<style lang="scss" scoped>
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
		transform: translateY(-20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.hero {
	background-image: url('/img/recipes-bg.avif');
	background-size: cover;
	background-position: center;
	min-height: 100vh;
	position: relative;
	padding-top: clamp(126px, 10vw, 207px);
	display: flex;
	justify-content: center;
	align-items: flex-end;
	overflow: hidden;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;

	@include mix.respond('md') {
		padding-top: 0;
		min-height: 70vh;
	}
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 30%;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
		@include mix.respond('md') {
			height: 50%;
		}
	}
	&__content {
		display: grid;
		justify-items: center;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__img {
		width: min(100%, 700px);
		height: auto;
		filter: drop-shadow(0 0 10px #00000099);
		transform: translateY(10px);
		animation: appear 0.6s;
	}
	&__title {
		font-size: clamp(36px, 5vw, 69px);
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;
		animation: slide-from-top 0.6s both;
	}
}
</style>
