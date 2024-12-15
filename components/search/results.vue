<template>
	<div class="results">
		<div class="results__top">
			<button
				class="results__type"
				:class="{ active: model === 'all' }"
				@click="selectType('all')">
				<svg class="results__icon">
					<use href="~/assets/sprite.svg#all" />
				</svg>
				<span>Все</span>
			</button>
			<button
				class="results__type"
				:class="{ active: model === 'recipes' }"
				@click="selectType('recipes')">
				<svg class="results__icon">
					<use href="~/assets/sprite.svg#recipes" />
				</svg>
				<span>Рецепты</span>
			</button>
			<button
				class="results__type"
				:class="{ active: model === 'products' }"
				@click="selectType('products')">
				<svg class="results__icon">
					<use href="~/assets/sprite.svg#products" />
				</svg>
				<span>Товары</span>
			</button>
			<button
				class="results__type"
				:class="{ active: model === 'chefs' }"
				@click="selectType('chefs')">
				<svg class="results__icon">
					<use href="~/assets/sprite.svg#chefs" />
				</svg>
				<span>Повара</span>
			</button>
		</div>
		<div class="results__content">
			<NuxtLink to="/" class="results__item">
				<div class="results__item-icon">
					<svg class="results__icon">
						<use href="~/assets/sprite.svg#recipes" />
					</svg>
				</div>
				<div class="results__item-content">
					<h4 class="results__item-type">Рецепты</h4>
					<p class="results__item-text">
						Ассортиментная политика предприятия, пренебрегая деталями, определяет
						рекламный
					</p>
				</div>
			</NuxtLink>
			<NuxtLink to="/" class="results__item">
				<div class="results__item-icon">
					<svg class="results__icon">
						<use href="~/assets/sprite.svg#chefs" />
					</svg>
				</div>
				<div class="results__item-content">
					<h4 class="results__item-type">Повара</h4>
					<p class="results__item-text">
						Можно предположить, что медийная связь транслирует креативный выставочный
						стенд.
					</p>
				</div>
			</NuxtLink>
			<NuxtLink to="/" class="results__item">
				<div class="results__item-icon">
					<svg class="results__icon">
						<use href="~/assets/sprite.svg#products" />
					</svg>
				</div>
				<div class="results__item-content">
					<h4 class="results__item-type">Товары</h4>
					<p class="results__item-text">
						Искусство медиапланирования, суммируя приведенные примеры, существенно
						специфицирует инвестиционный продукт
					</p>
				</div>
			</NuxtLink>
		</div>
		<div class="results__bottom">
			<button class="results__button">
				<svg class="results__button-icon">
					<use href="~/assets/sprite.svg#search-arrow" />
				</svg>
			</button>
			<button class="results__button">
				<svg class="results__button-icon">
					<use href="~/assets/sprite.svg#search-arrow" />
				</svg>
			</button>
			<p>Можете наверх или вниз</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	results: Array,
	type: String,
	fetchResults: Function
});
const model = defineModel();
const selectType = newType => {
	model.value = newType;
	props.fetchResults();
};
</script>

<style lang="scss" scoped>
.results {
	background-color: #fff;
	border-radius: 16px;
	position: absolute;
	width: calc(100% - 5vw * 2);
	top: calc(100% + 10px);
	z-index: 10;
	box-shadow: 0px 52px 100px 0px rgba(142, 161, 179, 0.6);
	@include mix.respond('md') {
		width: calc(100% - 3vw * 2);
	}
	& > * {
		padding-inline: clamp(10px, 2.4vw, 24px);
	}
	&__type {
		--active-clr: rgba(102, 109, 128, 1);
		font-size: clamp(12px, 1.4vw, 14px);
		font-weight: 600;
		line-height: 21px;
		letter-spacing: 0.02em;
		color: var(--active-clr);
		display: flex;
		align-items: center;
		gap: 6px;
		padding-bottom: 12px;
		position: relative;
		transition: color 0.3s;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			height: 3px;
			width: 115%;
			left: 50%;
			transform: translateX(-50%) scaleX(0);
			background-color: rgba(3, 77, 145, 1);
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
			transition: transform 0.3s;
		}
		&.active {
			--active-clr: rgb(3, 77, 145);
			&::after {
				transform: translateX(-50%) scaleX(1);
			}
		}
	}
	&__top {
		display: flex;
		gap: 16px;
		padding-top: 12px;
		& > * {
			transition: opacity 0.3s;
		}
		&:has(> *:hover) > *:not(:hover) {
			opacity: 0.5;
		}
	}
	&__button {
		background-color: #fff;
		width: 20px;
		border: 0.5px solid rgba(223, 225, 230, 1);
		aspect-ratio: 1;
		box-shadow: 0px 0.38px 0.77px 0px rgba(13, 13, 18, 0.06);
		border-radius: 4.62px;
		transition: transform 0.2s, border-color 0.2s;

		@include mix.flex-center;
		&:hover {
			transform: translateY(-5px);
			border-color: rgb(3, 77, 145);
			.results__button-icon {
				stroke: rgb(3, 77, 145);
			}
		}
		&:nth-child(2) {
			&:hover {
				transform: translateY(5px);
			}
			.results__button-icon {
				transform: rotate(180deg);
			}
		}
		&-icon {
			width: 6px;
			height: 9px;
			stroke: #a4abb8;
			transition: stroke 0.2s;
		}
	}
	&__bottom {
		font-size: 14px;
		font-weight: 600;
		line-height: 21px;
		letter-spacing: 0.02em;
		color: rgba(102, 109, 128, 1);

		display: flex;
		gap: 4px;
		padding-top: 16.5px;
		padding-bottom: 16.5px;
		p {
			margin-left: 3px;
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 14px;
		border-bottom: 1px solid rgba(223, 225, 230, 1);
		border-top: 1px solid rgba(223, 225, 230, 1);
		padding-top: clamp(16px, 2.2vw, 24px);
		padding-bottom: clamp(16px, 2.2vw, 24px);
		& > * {
			transition: opacity 0.3s;
		}
		&:has(> *:hover) > *:not(:hover) {
			opacity: 0.5;
		}
	}
	&__item {
		--active-clr: rgba(128, 136, 151, 1);
		gap: 12px;
		display: grid;
		grid-template-columns: 32px 1fr;
		align-items: flex-start;
		&-text {
			font-size: 1rem;
			font-weight: 600;
			letter-spacing: 0.02em;
			line-height: 1.3;
		}
		&-type {
			font-size: 0.7rem;
			font-weight: 600;
			line-height: 15px;
			letter-spacing: 0.02em;
			color: rgba(102, 109, 128, 1);
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: 6px;
		}
		&-icon {
			aspect-ratio: 1;
			border-radius: 8px;
			border: 1px solid rgba(223, 225, 230, 1);
			box-shadow: 0px 1px 2px 0px rgba(13, 13, 18, 0.06);
			@include mix.flex-center;
		}
	}
	&__icon {
		width: 16px;
		height: 17px;
		fill: none;
		stroke: var(--active-clr);
		transition: stroke 0.3s;
	}
}
</style>
