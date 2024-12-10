<template>
	<header
		ref="headerRef"
		class="header section-padding"
		:data-where="route.path"
		:class="{ 'header--white': isWhite, 'header--menu': isMenuOpen }">
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
		<button class="header__burger bg-secondary" @click="toggleMenu">
			<svg class="icon-menu">
				<use href="@/assets/sprite.svg#menu"></use>
			</svg>
			<svg class="header__close">
				<use href="@/assets/sprite.svg#menu-x"></use>
			</svg>
		</button>
	</header>
	<Menu :links="links" :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
</template>

<script setup>
const { $gsap } = useNuxtApp();
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
const route = useRoute();
const isMenuOpen = ref(false);
const headerRef = ref();
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
const isWhite = computed(() => route.path === '/about' || route.path === '/recipes');

onUpdated(() => {
	if (headerRef.value.classList.contains('header--white')) {
		$gsap.to(headerRef.value, {
			backdropFilter: 'blur(10px)',
			scrollTrigger: {
				start: '+=300',
				toggleActions: 'play none none reverse'
			}
		});
	}
});

onMounted(() => {
	if (headerRef.value.classList.contains('header--white')) {
		$gsap.to(headerRef.value, {
			backdropFilter: 'blur(10px)',
			scrollTrigger: {
				start: '+=300',
				toggleActions: 'play none none reverse'
			}
		});
	}
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
@keyframes slide-in-from-left {
	from {
		opacity: 0;
		transform: translateX(-20px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes slide-in-from-right {
	from {
		opacity: 0;
		transform: translateX(20px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

.header {
	position: sticky;
	top: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	background-color: map.get(var.$colors, 'white');
	transition: background-color 0.3s;

	@include mix.respond('md') {
		padding-top: 10px;
		padding-bottom: 10px;
		justify-content: space-between;
	}
	&--menu {
		background-color: map.get(var.$colors, 'secondary');
		.icon-logo {
			--main-color: #fff;
			--secondary-color: #fff;
		}
		.icon-menu {
			transform: scale(0);
		}

		.header__close {
			transform: scale(1);
		}
		.header__burger {
			background-color: rgba(255, 255, 255, 0.2) !important;
		}
	}
	&--white {
		width: 100%;
		position: fixed;
		background-color: transparent;
		.header__item {
			color: rgba(255, 255, 255, 0.7);
			&::after {
				background-color: #fff;
			}
			&--active {
				color: #fff;
			}
		}
		.header__burger {
			background-color: #fff;
			.icon-menu {
				fill: map.get(var.$colors, 'secondary');
			}
		}
		.header__logo .icon-logo {
			--main-color: #fff;
			--secondary-color: #fff;
		}
		.header__nav::after {
			background: linear-gradient(
				to right,
				rgba(180, 200, 220, 0),
				#fff,
				rgba(180, 200, 220, 0)
			);
		}
	}
	&__close {
		width: 28px;
		height: 28px;
		transform: scale(0);
		fill: #fff;
	}
	&__burger {
		animation: slide-in-from-right 0.5s;
		cursor: pointer;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		z-index: 102;
		transition: background-color 0.3s;
		@include mix.grid-center;
		& > * {
			position: absolute;
			transition: transform 0.3s;
		}
		@include mix.respond('md', min) {
			display: none;
		}
	}
	&__logo {
		transition: opacity 0.3s;
		animation: slide-in-from-left 0.5s;
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
					animation: slide-in-from-top-10 0.5s backwards;
				} @else {
					animation: slide-in-from-bottom-10 0.5s backwards;
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
