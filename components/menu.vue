<template>
	<div class="menu bg-secondary" :class="{ active: isMenuOpen }">
		<nav class="menu__nav">
			<ul class="menu__list">
				<li class="menu__item" v-for="link in links" :key="link.to">
					<button @click="emitToggleMenu" class="menu__button">
						<NuxtLink :to="link.to" class="link" active-class="link--active">{{
							link.text
						}}</NuxtLink>
					</button>
				</li>
			</ul>
		</nav>
		<div class="menu__bottom">
			<ul class="menu__socials">
				<li class="menu__socials-item">
					<a href="#">
						<svg class="menu__socials-icon">
							<use href="~/assets/sprite.svg#instagram" />
						</svg>
					</a>
				</li>
				<li class="menu__socials-item">
					<a href="#">
						<svg class="menu__socials-icon">
							<use href="~/assets/sprite.svg#telegram" />
						</svg>
					</a>
				</li>
				<li class="menu__socials-item">
					<a href="#">
						<svg class="menu__socials-icon">
							<use href="~/assets/sprite.svg#tiktok" />
						</svg>
					</a>
				</li>
				<li class="menu__socials-item">
					<a href="#">
						<svg class="menu__socials-icon">
							<use href="~/assets/sprite.svg#youtube" />
						</svg>
					</a>
				</li>
			</ul>
			<p>©2024. All right reserved</p>
		</div>
	</div>
</template>
<script setup>
const emits = defineEmits(['toggle-menu']);
const emitToggleMenu = () => {
	emits('toggle-menu');
};
defineProps({
	isMenuOpen: Boolean,
	links: Array
});
</script>

<style scoped lang="scss">
.menu {
	padding-top: 70px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transform: translateX(-100%);
	position: fixed;
	inset: 0;
	z-index: 50;
	transition: transform 0.5s;
	transition-delay: 1s;
	&.active {
		transform: translateX(0);
		transition-delay: 0s;
		.menu__socials-item {
			transform: scale(1);
			@for $i from 1 through 4 {
				transition-delay: 0.7s;
			}
		}
		.menu__bottom p {
			transition-delay: 0.9s;
			transform: translateY(0);
			opacity: 1;
		}
		.menu__item {
			transform: translateX(0);
			opacity: 1;
		}
	}
	&__nav {
		margin: auto 0;
	}
	&__bottom {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 25px;
		font-size: 20px;
		font-weight: 500;
		line-height: 22.4px;
		letter-spacing: 0.02em;
		text-align: center;
		color: rgba(249, 253, 255, 0.5);
		padding-bottom: 30px;
		p {
			transition: transform 0.5s, opacity 0.5s;
			transform: translateY(20px);
			opacity: 0;
		}
		& > * {
			max-width: 240px;
		}
	}
	&__socials {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-item {
			transform: scale(0);
			transition: transform 0.3s;
			@for $i from 1 through 4 {
				&:nth-child(#{$i}) {
					transition-delay: #{$i * 0.1}s;
				}
			}
		}
		&-icon {
			width: 30px;
			height: 30px;
			fill: #fff;
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	&__item {
		font-size: 24px;
		font-weight: 600;
		line-height: 33.6px;
		letter-spacing: 0.02em;
		text-align: center;
		color: rgba(255, 255, 255, 1);
		transition-property: opacity, transform;
		transition-duration: 0.5s;
		position: relative;
		&:has(.link.link--active)::after {
			scale: 1;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: -12px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #fff;
			height: 2px;
			width: 80%;
			scale: 0;
			transition: scale 0.5s;
		}
		@for $i from 1 through 6 {
			&:nth-child(#{$i}) {
				transition-delay: #{$i * 0.1}s;
				opacity: 0;
				@if ($i % 2 == 0) {
					transform: translateX(-50px);
				} @else {
					transform: translateX(50px);
				}
			}
		}
	}
}
</style>
