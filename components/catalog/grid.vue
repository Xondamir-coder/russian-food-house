<template>
	<section class="grid section-padding">
		<NuxtLink
			to="/products"
			@click="store.selectCategory('Алкогольные напитки')"
			class="grid__item">
			<NuxtImg
				class="grid__item-img"
				src="/img/shopping.png"
				format="webp"
				width="293"
				height="195" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">Алкогольные напитки</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
		<NuxtLink
			to="/products"
			@click="store.selectCategory('Безалкогольные напитки, соки')"
			class="grid__item">
			<NuxtImg
				class="grid__item-img"
				src="/img/shopping.png"
				format="webp"
				width="293"
				height="195" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">Безалкогольные напитки, соки</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
		<NuxtLink
			to="/products"
			@click="store.selectCategory(`${longAssWord} продукция`)"
			class="grid__item row-span-2">
			<NuxtImg
				class="grid__item-img"
				src="/img/shopping.png"
				format="webp"
				width="293"
				height="195" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">{{ longAssWord }} продукция</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
		<NuxtLink
			to="/products"
			@click="store.selectCategory('Биологически активные добавки к пище')"
			class="grid__item column-span-2">
			<NuxtImg
				class="grid__item-img"
				src="/img/shopping.png"
				format="webp"
				width="293"
				height="195" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">Биологически активные добавки к пище</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
		<NuxtLink
			to="/products"
			@click="store.selectCategory('Овощная консервация')"
			class="grid__item row-span-2">
			<NuxtImg
				class="grid__item-img"
				src="/img/shopping.png"
				format="webp"
				width="293"
				height="195" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">Овощная консервация</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
		<NuxtLink
			to="/products"
			@click="store.selectCategory('Варенье / Джем / Мёд')"
			class="grid__item">
			<NuxtImg
				class="grid__item-img"
				src="/img/shopping.png"
				format="webp"
				width="293"
				height="195" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">Варенье / Джем / Мёд</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
		<NuxtLink
			to="/products"
			@click="store.selectCategory('Кондитерские изделия')"
			class="grid__item">
			<NuxtImg
				class="grid__item-img"
				src="/img/shopping.png"
				format="webp"
				width="293"
				height="195" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">Кондитерские изделия</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
		<NuxtLink
			to="/products"
			@click="store.selectCategory(`${longAssWord} продукция`)"
			class="grid__item column-span-2">
			<NuxtImg
				class="grid__item-img"
				src="/img/shopping.png"
				format="webp"
				width="293"
				height="195" />
			<div class="grid__item-content">
				<h2 class="grid__item-title">{{ longAssWord }} продукция</h2>
				<button class="grid__item-button bg-primary">
					<svg class="icon-play">
						<use href="~/assets/sprite.svg#play" />
					</svg>
				</button>
			</div>
		</NuxtLink>
	</section>
</template>

<script setup>
const longAssWord = ref('Сельскохозяйственная');
const { $gsap } = useNuxtApp();
const store = useAppStore();

onMounted(() => {
	$gsap.from('.grid__item', {
		stagger: 0.2,
		opacity: 0,
		scale: 0,
		scrollTrigger: {
			trigger: '.grid',
			start: 'top 80%'
		}
	});
	if (window.innerWidth < 768) {
		longAssWord.value = 'Сельхоз ';
	}
});
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3vw;
	@include mix.respond('lg') {
		grid-template-columns: repeat(2, 1fr);
	}
	&__item {
		background: #fff;
		border-radius: 20px;
		padding: 2vw;
		display: flex;
		flex-direction: column;
		gap: 13px;
		justify-content: space-between;
		&.row-span-2 {
			grid-row: span 2;
		}
		&.column-span-2 {
			grid-column: span 2;
		}
		&.column-span-2 {
			.grid__item-title {
				max-width: 20ch;
			}
		}
		@include mix.respond('lg') {
			&:nth-of-type(3) {
				grid-column: span 2;
			}
		}
		@include mix.respond('md') {
			grid-column: span 1 !important;
			grid-row: span 1 !important;
			&:nth-of-type(3n) {
				grid-column: span 2 !important;
			}
		}

		&-img {
			max-width: 293px;
			max-height: 195px;
			width: 100%;
			height: auto;
			margin: auto 0;
			align-self: center;
			@include mix.respond('md') {
				width: 180px;
			}
			@include mix.respond('sm') {
				width: 150px;
			}
		}
		&-content {
			display: grid;
			grid-template-columns: 1fr 50px;
			align-items: center;
			gap: 20px;
			@include mix.respond('lg') {
				display: block;
			}
		}
		&-button {
			aspect-ratio: 1;
			border-radius: 50%;
			@include mix.flex-center;
			@include mix.respond('lg') {
				display: none;
			}
		}
		&-title {
			font-weight: 700;
			font-size: 1.4rem;

			@include mix.respond('lg') {
				max-width: 100%;
				font-size: 16px;
			}
		}
	}
}
</style>
