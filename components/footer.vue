<template>
	<footer class="footer section-padding" v-if="noFooter">
		<div class="footer__left">
			<NuxtLink to="/">
				<svg class="footer__logo icon-logo">
					<use href="~/assets/sprite.svg#logo" />
				</svg>
			</NuxtLink>
			<p>©2024. All right reserved</p>
			<ul class="footer__social">
				<li>
					<a class="footer__social-item" href="#" target="_blank">
						<svg class="fill-primary footer__icon">
							<use href="~/assets/sprite.svg#instagram" />
						</svg>
					</a>
				</li>
				<li>
					<a class="footer__social-item" href="#" target="_blank">
						<svg class="fill-primary footer__icon">
							<use href="~/assets/sprite.svg#telegram" />
						</svg>
					</a>
				</li>
				<li>
					<a class="footer__social-item" href="#" target="_blank">
						<svg class="fill-primary footer__icon">
							<use href="~/assets/sprite.svg#tiktok" />
						</svg>
					</a>
				</li>
				<li>
					<a class="footer__social-item" href="#" target="_blank">
						<svg class="fill-primary footer__icon">
							<use href="~/assets/sprite.svg#youtube" />
						</svg>
					</a>
				</li>
			</ul>
		</div>
		<div class="footer__right">
			<nav class="footer__nav">
				<ul class="footer__links">
					<li class="footer__link" v-for="link in links.slice(0, 4)" :key="link.to">
						<NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
					</li>
				</ul>
			</nav>
			<nav class="footer__nav">
				<ul class="footer__links">
					<li class="footer__link" v-for="link in links.slice(4)" :key="link.to">
						<NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
					</li>
				</ul>
			</nav>
			<div class="footer__details">
				<a class="footer__a" href="tel:+998 90 900 90 09">+998 90 900 90 09</a>
				<a class="footer__a" href="mailto:hello@russianfoodhouse.uz">
					hello@russianfoodhouse.uz
				</a>
			</div>
		</div>
		<div class="footer__bottom">
			<ul class="footer__social">
				<li>
					<a class="footer__social-item" href="#" target="_blank">
						<svg class="fill-primary footer__icon">
							<use href="~/assets/sprite.svg#instagram" />
						</svg>
					</a>
				</li>
				<li>
					<a class="footer__social-item" href="#" target="_blank">
						<svg class="fill-primary footer__icon">
							<use href="~/assets/sprite.svg#telegram" />
						</svg>
					</a>
				</li>
				<li>
					<a class="footer__social-item" href="#" target="_blank">
						<svg class="fill-primary footer__icon">
							<use href="~/assets/sprite.svg#tiktok" />
						</svg>
					</a>
				</li>
				<li>
					<a class="footer__social-item" href="#" target="_blank">
						<svg class="fill-primary footer__icon">
							<use href="~/assets/sprite.svg#youtube" />
						</svg>
					</a>
				</li>
			</ul>
			<p>©2024. All right reserved</p>
		</div>
	</footer>
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
		text: 'Услуги'
	},
	{
		to: '/contacts',
		text: 'Контакты'
	},
	{
		to: '/recipes',
		text: 'Рецепты'
	},
	{
		to: '/faq',
		text: 'FAQ'
	},
	{
		to: '/events',
		text: 'Мероприятие'
	}
];
const route = useRoute();
const noFooter = computed(
	() => route.path !== '/recipes/traditional' && !route.path.includes('chefs')
);
</script>

<style scoped lang="scss">
@use 'sass:map';
.footer {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding-bottom: 3rem;
	padding-top: 3rem;
	background-color: #fff;
	@include mix.respond('xl') {
		grid-template-columns: max-content 1fr;
		gap: 2rem;
	}
	@include mix.respond('md') {
		grid-template-columns: auto;
		padding-bottom: 30px;
		padding-top: 30px;
	}
	&__bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		color: rgba(71, 92, 101, 1);
		font-size: 16px;
		@include mix.respond('md', min) {
			display: none;
		}
	}
	&__details {
		display: flex;
		flex-direction: column;
		gap: 16px;
		@include mix.respond('sm') {
			grid-column: span 2;
		}
	}
	&__right {
		font-size: 18px;
		letter-spacing: 0.02em;
		color: map.get(var.$colors, 'primary');
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		@include mix.respond('sm') {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	&__links {
		display: flex;
		gap: 16px;
		flex-direction: column;
	}
	&__link {
		font-weight: 600;
		transition: color 0.3s, letter-spacing 0.3s;
		&:hover {
			color: map.get(var.$colors, 'secondary');
			letter-spacing: 0.1em;
		}
	}
	&__left {
		display: flex;
		flex-direction: column;
		gap: 20px;
		color: rgba(71, 92, 101, 1);
		p,
		ul {
			@include mix.respond('md') {
				display: none;
			}
		}
	}
	&__social {
		display: flex;
		gap: 27px;
		margin-top: 2rem;
		@include mix.respond('md') {
			margin-top: 0;
		}
		li:hover .footer__icon {
			fill: map.get(var.$colors, 'secondary');
			transform: scale(1.1);
		}
	}
	&__icon {
		width: 24px;
		height: 22px;
		transition: fill 0.3s, transform 0.3s;
	}
	&__a {
		align-self: flex-start;
		font-weight: 500;
		transition: color 0.3s;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -4px;
			background: red;
			width: 100%;
			height: 2px;
			transform: scaleX(0);
			transform-origin: right;
			transition: transform 0.6s;
		}

		&:hover::after {
			transform: scaleX(1);
			transform-origin: left;
		}
		&:hover {
			color: map.get(var.$colors, 'secondary');
		}
	}
	&__logo {
		width: 262px;
		@include mix.respond('md') {
			width: 190.63px;
		}
	}
}
</style>
