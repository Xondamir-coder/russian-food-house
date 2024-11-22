<template>
	<main class="faq section-padding">
		<FaqTop />
		<section class="faq__content">
			<FaqNav :active-accordion="activeAccordion" @change-accordion="changeAccordion" />
			<FaqAccordion :active-accordion="activeAccordion" />
		</section>
	</main>
</template>

<script setup>
const activeAccordion = ref('main');

const changeAccordion = name => {
	activeAccordion.value = name;
};
</script>

<style lang="scss" scoped>
.faq {
	display: flex;
	flex-direction: column;
	padding-top: clamp(16px, 2vw, 30px);
	padding-bottom: clamp(20px, 2vw, 30px);
	gap: clamp(20px, 3vw, 40px);
	&__content {
		display: flex;
		gap: min(40px, 3vw);
		align-items: flex-start;
		@include mix.respond('md') {
			gap: 20px;
			flex-direction: column;
			align-items: stretch;
		}
	}
}
</style>
