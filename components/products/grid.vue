<template>
	<section class="grid">
		<div class="grid__top">
			<h2 class="grid__title text-primary">Все продукты</h2>
			<button class="grid__button" @click="toggleShowSidebar">
				<span>Сортировка</span>
				<svg class="icon-arrow">
					<use href="~/assets/sprite.svg#down-arrow" />
				</svg>
			</button>
		</div>
		<div class="grid__content">
			<div
				class="grid__sidebar-wrapper"
				:class="{ active: showSidebar }"
				@click.self="toggleShowSidebar">
				<div class="grid__sidebar">
					<div class="grid__select">
						<span>Выбрать регион</span>
						<button class="grid__button">
							<span>Сортировка</span>
							<svg class="icon-arrow">
								<use href="~/assets/sprite.svg#down-arrow" />
							</svg>
						</button>
					</div>
					<div class="grid__select">
						<span>Выбрать производителя</span>
						<button class="grid__button">
							<span>Сортировка</span>
							<svg class="icon-arrow">
								<use href="~/assets/sprite.svg#down-arrow" />
							</svg>
						</button>
					</div>
					<ul class="grid__options">
						<li
							class="grid__option"
							v-for="option in store.categories"
							:key="option"
							:class="{ active: option == store.selectedCategory }">
							<input
								type="checkbox"
								name="option"
								:id="option"
								:checked="option == store.selectedCategory" />
							<label :for="option">
								{{ option }}
							</label>
						</li>
					</ul>
					<ButtonPrimary
						class="grid__sidebar-button"
						label="Показать товаров"
						@click="toggleShowSidebar" />
				</div>
			</div>
			<div class="grid__list">
				<NuxtLink
					:to="`/products/${item.id}`"
					class="grid__item"
					v-for="item in visibleProducts"
					:key="item.id">
					<span class="grid__item-type" :class="getClassType(item.type)">
						{{ item.type }}
					</span>
					<img class="grid__item-img" :src="item.img" :alt="item.title" />
					<div class="grid__item-content">
						<h3 class="grid__item-title">
							{{ item.title }}
						</h3>
						<p class="grid__item-desc text-grey">
							{{ item.desc }}
						</p>
					</div>
				</NuxtLink>
			</div>
		</div>
		<ButtonPrimary label="Показать еще" @click="loadMoreProducts" />
	</section>
</template>

<script setup>
const store = useAppStore();

const types = {
	Новинки: 'new',
	Популярные: 'popular',
	'Хит продаж': 'hit'
};
const getClassType = rusType => `grid__item-type--${types[rusType]}`;
const showSidebar = ref(false);

const additionalProductsCount = 3;
const visibleProductsCount = ref(store.products.length - 6);
const visibleProducts = computed(() => store.products.slice(0, visibleProductsCount.value));
const loadMoreProducts = () => {
	visibleProductsCount.value += additionalProductsCount;
};
const toggleShowSidebar = () => (showSidebar.value = !showSidebar.value);
</script>

<style lang="scss" scoped>
@use 'sass:map';
@keyframes scale-appear {
	from {
		opacity: 0;
		transform: scale(0);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
.grid {
	display: flex;
	flex-direction: column;
	gap: 20px;
	@include mix.respond('md') {
		margin-top: 20px;
	}
	&__item {
		background-color: #fff;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		gap: 60px;
		position: relative;
		padding: 20px;
		transition: box-shadow 0.3s, color 0.3s;
		animation: scale-appear 0.3s;
		&:hover {
			box-shadow: 0px 52px 100px 0px rgba(142, 161, 179, 0.6);
			color: rgba(0, 120, 230, 1);
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
		&-title {
			font-size: 18px;
			@include mix.respond('sm') {
				font-size: 22px;
			}
		}
		&-desc {
			font-family: var.$font-secondary;
			font-size: 13px;
			font-weight: 500;
			@include mix.respond('sm') {
				font-size: 18px;
				line-height: 1.5;
				letter-spacing: 0.02em;
			}
		}
		&-img {
			height: 163px;
			width: 100%;
			object-fit: contain;
			transform: translateY(16px);
		}
		&-type {
			z-index: 2;
			position: absolute;
			font-family: var.$font-secondary;
			font-size: 14px;
			font-weight: 400;
			color: #fff;
			border-radius: 8px;
			padding: 8px 12px;
			top: 20px;
			left: 20px;
			&--popular {
				background-color: rgba(120, 40, 200, 1);
			}
			&--new {
				background-color: rgba(0, 111, 238, 1);
			}
			&--hit {
				background-color: rgba(245, 165, 36, 1);
				color: #000;
			}
		}
	}
	&__sidebar {
		border-radius: 20px;
		padding: 20px;
		background: #fff;
		display: flex;
		flex-direction: column;
		gap: 20px;
		@include mix.respond('md') {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			transform: translateY(50%);
			transition: transform 0.3s;
		}
		&-button {
			position: absolute;
			bottom: 30px;
			@include mix.respond('md', min) {
				display: none;
			}
		}
		&-wrapper {
			flex-basis: 30%;
			@include mix.respond('md') {
				position: fixed;
				top: 0;
				left: 0;
				z-index: 200;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				display: grid;
				align-items: flex-end;
				transition: opacity 0.3s;
				opacity: 0;
				pointer-events: none;
				&.active {
					pointer-events: all;
					opacity: 1;
					.grid__sidebar {
						transform: translateY(0);
					}
				}
			}
		}
	}
	&__list {
		flex: 1;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: max(1.5vw, 16px);
	}
	&__content {
		display: flex;
		gap: max(1.5vw, 16px);
	}
	&__select {
		display: flex;
		flex-direction: column;
		gap: 14px;
		& > span {
			font-size: 16px;
			font-weight: 600;
			letter-spacing: 0.02em;
			color: map.get(var.$colors, 'primary');
		}
	}
	&__button {
		background-color: #fff;
		border: 2px solid rgba(228, 228, 231, 1);
		box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
		border-radius: 16px;
		padding: 14px 16px;
		font-family: var.$font-secondary;
		font-size: 1rem;
		display: flex;
		justify-content: space-between;
		gap: 3rem;
		align-items: center;
		font-weight: 400;
		@include mix.respond('sm') {
			padding: 12px 14px;
			font-size: 14px;
			gap: 30px;
		}
	}
	&__title {
		font-family: var.$font-base;
		color: map.get(var.$colors, 'primary');
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1;
		font-size: clamp(26px, 4vw, 52px);
	}
	&__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__options {
		display: flex;
		flex-direction: column;
		max-height: 415px;
		overflow-y: auto;

		@include mix.respond('sm') {
			max-height: 50vh;
		}

		&::-webkit-scrollbar {
			width: 6px; /* Width of the scrollbar */
		}

		&::-webkit-scrollbar-track {
			background: rgba(237, 242, 247, 1);
			border-radius: 5px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: map.get(var.$colors, 'primary'); /* Color of the scrollbar thumb */
			border-radius: 5px; /* Rounded edges */
		}
	}
	&__option {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 6px 8px;
		font-size: 18px;
		font-family: var.$font-secondary;

		input {
			background-image: url('~/assets/check.svg');
			background-size: 80%;
			background-repeat: no-repeat;
			background-position: center;
			appearance: none;
			width: 24px;
			height: 24px;
			border: 2px solid rgba(212, 212, 216, 1);
			border-radius: 8.4px;
			transition: background-color 0.2s, border-color 0.2s;
			&:checked {
				background-color: map.get(var.$colors, 'primary');
				border-color: transparent;
			}
		}
		& > * {
			cursor: pointer;
		}
	}
}
</style>
