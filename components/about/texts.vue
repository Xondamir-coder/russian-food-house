<template>
	<section class="texts section-padding">
		<h2 class="texts__big">
			Проект нацелен на продвижение на зарубежных рынках продуктов питания
		</h2>
		<p class="texts__small text-grey">
			производимых российскими производителями на территории Российской Федерации.
		</p>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
	$gsap.from('.texts__big', {
		opacity: 0,
		y: -20,
		scrollTrigger: {
			trigger: '.texts__big',
			start: 'top 80%'
		}
	});
	$gsap.from('.texts__small', {
		opacity: 0,
		y: 20,
		scrollTrigger: {
			trigger: '.texts__small',
			start: 'top 80%'
		}
	});
});
</script>

<style lang="scss" scoped>
.texts {
	display: flex;
	flex-direction: column;
	gap: 30px;
	@include mix.respond('md') {
		gap: 16px;
	}
	&__small {
		font-family: var.$font-secondary;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: -0.02em;
		text-align: center;
		@include mix.respond('md') {
			font-size: 16px;
		}
	}
	&__big {
		align-self: center;
		font-size: clamp(24px, 4vw, 52px);
		font-weight: 700;
		text-align: center;
		max-width: 32ch;
	}
}
</style>
