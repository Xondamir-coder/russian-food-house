<template>
	<section class="section-padding sponsors">
		<ul class="sponsors__list">
			<!-- 1st row -->
			<li class="sponsors__item">
				<svg class="sponsors__icon">
					<use href="~/assets/sprite.svg#adobe" />
				</svg>
			</li>
			<li class="sponsors__item">
				<svg class="sponsors__icon">
					<use href="~/assets/sprite.svg#rakuten" />
				</svg>
			</li>
			<li class="sponsors__item">
				<svg class="sponsors__icon">
					<use href="~/assets/sprite.svg#google" />
				</svg>
			</li>
			<li class="sponsors__item">
				<svg class="sponsors__icon">
					<use href="~/assets/sprite.svg#zendesk" />
				</svg>
			</li>

			<!-- 2nd row -->
			<li class="sponsors__item">
				<svg class="sponsors__icon">
					<use href="~/assets/sprite.svg#rakuten" />
				</svg>
			</li>
			<li class="sponsors__item">
				<svg class="sponsors__icon">
					<use href="~/assets/sprite.svg#google" />
				</svg>
			</li>
			<li class="sponsors__item">
				<svg class="sponsors__icon">
					<use href="~/assets/sprite.svg#zendesk" />
				</svg>
			</li>
			<li class="sponsors__item">
				<svg class="sponsors__icon">
					<use href="~/assets/sprite.svg#adobe" />
				</svg>
			</li>
		</ul>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
	$gsap.from('.sponsors__item', {
		opacity: 0,
		scale: 0.5,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.sponsors',
			start: 'top 80%'
		}
	});
});
</script>

<style lang="scss" scoped>
.sponsors {
	&__list {
		background-color: #fff;
		border-radius: 20px;
		padding: 27px 20px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		@include mix.respond('sm') {
			grid-template-columns: initial;
			grid-auto-flow: column;
			grid-auto-columns: 150px;
			gap: 30px;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
		}
	}
	&__item {
		border-right: 1.5px solid rgba(230, 233, 234, 1);
		border-bottom: 1.5px solid rgba(230, 233, 234, 1);
		@include mix.flex-center;
		&:nth-of-type(4n) {
			border-right: none;
		}
		@for $i from 5 through 8 {
			&:nth-of-type(#{$i}) {
				border-bottom: none;
			}
		}
		@include mix.respond('sm') {
			border: none;
			scroll-snap-align: center;
		}
	}
	&__icon {
		width: 50%;
		height: 50%;
		@include mix.respond('md') {
			width: 80%;
			height: 80%;
		}
		@include mix.respond('sm') {
			aspect-ratio: 115 / 40;
			width: 100%;
			height: 100%;
		}
	}
}
</style>
