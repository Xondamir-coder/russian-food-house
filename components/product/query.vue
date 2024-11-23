<template>
	<section class="container">
		<h2 class="container__title section-title">
			Получить <br />
			консультацию
		</h2>
		<ProductForm />
	</section>
</template>

<script setup>
onMounted(() => {
	const { $gsap } = useNuxtApp();

	$gsap.from('.product .container>*:first-child', {
		opacity: 0,
		x: -100,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.product .container>*',
			start: 'top 80%'
		}
	});
	$gsap.from('.product .container>*:last-child', {
		opacity: 0,
		x: 100,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.product .container>*',
			start: 'top 80%'
		}
	});
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
.container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: clamp(20px, 2vw, 30px);
	&__title {
		font-weight: 700;
		letter-spacing: 0;
		color: map.get(var.$colors, 'black');
		text-align: left;
		font-size: clamp(28px, 4vw, 52px);
		@include mix.respond('md') {
			br {
				display: none;
			}
		}
	}
}
</style>
