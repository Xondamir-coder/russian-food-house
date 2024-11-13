<template>
	<header class="header section-padding">
		<input type="checkbox" class="header__checkbox" id="menu-toggle" />
		<NuxtLink to="/" class="header__logo">
			<svg class="icon-logo">
				<use href="@/assets/sprite.svg#logo"></use>
			</svg>
		</NuxtLink>
		<nav class="header__nav">
			<ul class="header__list">
				<li class="header__item text-dark-blue" v-for="link in links" :key="link.to">
					<NuxtLink active-class="header__item--active" :to="link.to">{{
						link.text
					}}</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
	<label for="menu-toggle" class="header__burger bg-secondary">
		<svg class="icon-menu">
			<use href="@/assets/sprite.svg#menu"></use>
		</svg>
	</label>
	<div class="header__menu bg-secondary">
		<nav class="header__menu-nav">
			<ul class="header__menu-list">
				<li class="header__menu-item" v-for="link in links" :key="link.to">
					<NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup>
const links = [
	{
		to: '/catalog',
		text: 'Каталог'
	},
	{
		to: '/about',
		text: 'О проекте'
	},
	{
		to: '/news',
		text: 'Новости'
	},
	{
		to: '/services',
		text: 'Сервисы'
	},
	{
		to: '/contacts',
		text: 'Контакты'
	},
	{
		to: '/recipes',
		text: 'Рецепты'
	}
];
</script>

<style lang="scss" scoped>
@use 'sass:map';
.header {
	position: sticky;
	top: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	background-color: map.get(var.$colors, 'white');

	@include mix.respond('md') {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	&:has(.header__checkbox:checked) ~ .header__menu {
		transform: translateX(0);
		transition-delay: 0s;
	}
	&:has(.header__checkbox:checked) ~ .header__menu .header__menu-item {
		transform: translateX(0);
		opacity: 1;
	}
	&__menu {
		transform: translateX(-100%);
		position: fixed;
		inset: 0;
		display: grid;
		z-index: 101;
		place-content: center;
		transition: transform 0.5s;
		transition-delay: 1s;
		&-list {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
		&-item {
			color: #fff;
			text-align: center;
			font-size: 30px;
			font-family: var.$font-secondary;
			font-weight: 500;
			letter-spacing: 0.02em;
			transition-property: opacity, transform;
			transition-duration: 0.5s;
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
	&__burger {
		@include mix.slide-appear-x(20px, slide-x-right, 0.5s);
		top: 10px;
		right: 10px;
		position: fixed;
		cursor: pointer;
		width: 48px;
		height: 48px;
		display: grid;
		place-content: center;
		border-radius: 50%;
		z-index: 102;
		@include mix.respond('md', min) {
			display: none;
		}
	}
	&__logo {
		transition: opacity 0.3s;
		@include mix.slide-appear-x(-20px, slide-x-left, 0.5s);
	}
	&__checkbox {
		display: none;
		&:checked ~ .header__logo {
			opacity: 0;
		}
	}
	&__nav {
		align-self: stretch;
		margin-right: 5vw;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		padding: 1.2rem 0;
		position: relative;
		@include mix.respond('md') {
			display: none;
		}
		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			background: linear-gradient(
				to right,
				rgba(180, 200, 220, 0),
				rgba(180, 200, 220, 1),
				rgba(180, 200, 220, 0)
			);
			width: 100%;
			height: 1px;
		}
	}
	&__list {
		display: flex;
		align-items: center;
		gap: 2.7vw;
		font-family: var.$font-secondary;
	}
	&__item {
		font-weight: 600;
		letter-spacing: 0.02em;
		transition: color 0.3s;
		position: relative;
		@for $i from 1 through 6 {
			&:nth-child(#{$i}) {
				@if ($i % 2 == 0) {
					@include mix.slide-appear-y(10px, slide-y-down, 0.5s, backwards);
				} @else {
					@include mix.slide-appear-y(-10px, slide-y-up, 0.5s, backwards);
				}
				animation-delay: #{$i * 0.1}s;
			}
		}
		&:has(a.header__item--active)::after {
			transform: scaleX(1.5);
		}
		&:has(a.header__item--active) {
			color: map.get(var.$colors, 'primary');
		}
		&::after {
			content: '';
			left: 0;
			bottom: -100%;
			display: block;
			width: 100%;
			height: 3px;
			background-color: map.get(var.$colors, 'primary');
			position: absolute;
			transform: scaleX(0);
			transition: transform 0.3s;
			z-index: 2;
		}
		&:hover::after {
			transform: scaleX(1.5);
		}
	}
}
</style>
