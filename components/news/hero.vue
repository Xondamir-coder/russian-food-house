<template>
	<section class="hero">
		<NuxtLink
			:style="useRandomColorStyle()"
			v-for="(news, i) in last4News"
			:key="news?.uuid"
			:class="i === 0 ? 'hero__big' : 'hero__small'"
			:to="`/news/${news?.title_slug}`">
			<img
				class="hero__img"
				format="webp"
				fit="cover"
				:src="`https://rfh.spacelabs.uz/${news?.image}`"
				alt="news hero banner" />
			<div class="hero__content">
				<NewsLabel text="Популярные" />
				<h2 class="hero__title">{{ news?.title }}</h2>
				<p class="hero__text" v-if="i === 0">{{ news?.body.split('.')[0].slice(3) }}.</p>
				<ButtonPrimary v-if="i === 0" class="hero__button" label="Читать дальше" />
			</div>
		</NuxtLink>
	</section>
</template>

<script setup>
const appStore = useAppStore();
const last4News = computed(() => appStore.news?.slice(-4));
</script>

<style lang="scss" scoped>
@use 'sass:map';
@keyframes slide-from-bottom {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes slide-from-right {
	from {
		opacity: 0;
		transform: translateX(30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.hero {
	border-radius: 20px;
	background-color: #fff;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: 1fr;
	@include mix.respond('sm') {
		grid-auto-rows: auto;
		grid-template-columns: 1fr;
	}
	&__content {
		display: flex;
		gap: clamp(10px, 1vw, 16px);
		flex-direction: column;
		align-items: flex-start;
	}
	&__button {
		align-self: flex-start;
		@include mix.respond('md') {
			align-self: stretch;
		}
	}
	&__text {
		color: map.get(var.$colors, 'grey');
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 0.02em;
		line-height: 1.6;
		@include mix.respond('md') {
			font-size: 16px;
		}
	}

	&__img {
		width: 100%;
		object-fit: cover;
		border-radius: 16px;
		max-height: 307px;
		@include mix.respond('md') {
			max-height: 200px;
		}
	}
	&__label {
		font-family: var.$font-secondary;
		font-size: 14px;
		padding: 4px 8px;
		border-radius: 8px;
		background-color: var(--bg);
		color: var(--color);
		@include mix.respond('md') {
			font-size: 12px;
		}
	}
	&__subtitle {
		font-size: clamp(16px, 1.5vw, 24px);
		font-weight: 700;
		line-height: 1.4;
	}
	&__small {
		border-left: 1px solid rgba(230, 233, 234, 1);
		border-bottom: 1px solid rgba(230, 233, 234, 1);
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: clamp(14px, 1.5vw, 20px);
		transition: color 0.3s;
		.hero__title {
			font-size: clamp(16px, 3vw, 24px);
			line-height: 1.2;
			font-weight: 700;
		}
		@for $i from 1 through 4 {
			&:nth-of-type(#{$i}) {
				animation-fill-mode: backwards;
				animation-duration: 0.5s;
				animation-delay: #{$i * 0.1}s;
				@if ($i % 2 == 0) {
					animation-name: slide-from-left;
				} @else {
					animation-name: slide-from-right;
				}
			}
		}
		&:last-of-type {
			border-bottom-right-radius: 20px;
		}
		@include mix.respond('md') {
			&:last-of-type {
				border-bottom-left-radius: 20px;
			}
			border-right: 1px solid rgba(230, 233, 234, 1);
			grid-template-columns: 74px 1fr;
		}
		&:hover {
			color: var(--bg);
		}
		.hero__img {
			height: auto;
			aspect-ratio: 1;
		}
	}
	&__button {
		font-family: var.$font-base;
		letter-spacing: 0;
	}
	&__big {
		display: flex;
		transition: color 0.3s;
		flex-direction: column;
		gap: clamp(14px, 2vw, 30px);
		grid-row: span 3;
		animation: slide-from-bottom 0.5s backwards;
		.hero__title {
			font-size: clamp(26px, 3vw, 40px);
			line-height: 1.2;
			font-weight: 700;
		}
		@include mix.respond('sm') {
			border: 1px solid rgba(230, 233, 234, 1);
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;
		}
		&:hover {
			color: var(--bg);
		}
		&:hover .hero__button {
			background-color: #fff;
			color: rgb(3, 77, 145);
			box-shadow: 0 5px 70px 0px rgba(142, 161, 179, 0.8);
		}
	}
	&__big,
	&__small {
		padding: clamp(14px, 2vw, 30px);
	}
}
</style>
