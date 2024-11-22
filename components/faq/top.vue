<template>
	<section class="top">
		<h1 class="top__big">Pellentesque eleifend enim molestie</h1>
		<p class="top__small text-grey">
			Fermentum sollicitudin ad nisi dignissim senectus. Potenti ut pulvinar odio id quisque
			faucibus urna neque nec.
		</p>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes slide-in-from-bottom {
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.top {
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: 600px;
	align-self: center;
	&__big {
		font-size: clamp(30px, 4vw, 52px);
		font-weight: 700;
		text-align: center;
		animation: slide-in-from-bottom 0.7s;
	}
	&__small {
		animation: slide-in-from-bottom 0.7s 0.1s backwards;
		line-height: 1.4;
		font-size: 20px;
		font-weight: 500;
		letter-spacing: 0.03em;
		text-align: center;
		@include mix.respond('md') {
			font-size: 16px;
		}
	}
}
</style>
