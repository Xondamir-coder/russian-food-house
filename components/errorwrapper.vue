<template>
	<main class="error section-padding">
		<svg class="error__face">
			<use href="~/assets/sprite.svg#logo-face" />
		</svg>
		<div class="error__box">
			<Map class="error__map" />
			<div class="error__content">
				<h1 class="error__title text-primary">
					<span class="error__title-big">
						{{ code }}
					</span>
					<br />
					<span class="error__title-small">
						{{ message }}
					</span>
				</h1>
				<p class="error__text">
					{{ text }}
				</p>
			</div>
		</div>
		<NuxtLink to="/" class="error__link">
			<ButtonPrimary label="Вернуться" />
		</NuxtLink>
	</main>
</template>

<script setup>
defineProps({
	code: Number,
	message: String,
	text: String
});
</script>

<style lang="scss" scoped>
@keyframes slide-in-from-top {
	from {
		opacity: 0;
		translate: 0 -25px;
	}
	to {
		opacity: 1;
		translate: 0 0;
	}
}
.error {
	padding-top: 5vw;
	padding-bottom: 5vw;
	display: flex;
	flex-direction: column;
	gap: max(3vw, 30px);
	position: relative;
	& > * {
		animation: slide-in-from-top 0.5s backwards;
		@for $i from 1 through 3 {
			&:nth-child(#{$i}) {
				animation-delay: #{$i * 0.15}s;
			}
		}
	}
	&__link {
		align-self: center;
		width: 254px;
		button {
			width: 100%;
		}
	}
	&__content {
		& > * {
			animation: slide-in-from-top 0.5s backwards;
			@for $i from 1 through 3 {
				&:nth-child(#{$i}) {
					animation-delay: #{$i * 0.3}s;
				}
			}
		}
		@include mix.respond('md') {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
	&__box {
		display: grid;
		align-items: center;
		justify-items: center;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__text {
		font-family: var.$font-secondary;
		font-size: 24px;
		font-weight: 400;
		line-height: 33.6px;
		color: #000;
		text-align: center;
	}
	&__title {
		font-weight: 900;
		letter-spacing: -0.02em;

		&-big {
			margin-left: 5vw;
			font-size: 136px;
			line-height: 1;
			@include mix.respond('md') {
				margin-left: 0;
			}
		}
		&-small {
			font-size: clamp(48px, 9vw, 136px);
		}
	}
	&__face {
		z-index: 3;
		align-self: center;
		aspect-ratio: 121/150;
		width: 162px;
		@include mix.respond('lg', min) {
			transform: translateY(-50px);
			position: absolute;
		}
	}
	&__map {
		pointer-events: none;
	}
}
</style>
