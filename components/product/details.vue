<template>
	<section class="details">
		<div class="details__container">
			<img class="details__img" :src="product?.img" :alt="product?.title" />
		</div>
		<div class="details__content">
			<h1 class="details__content-title">
				{{ product?.title }}
			</h1>
			<p class="details__content-desc text-grey">
				{{ product?.desc }}
			</p>
			<ul class="details__list">
				<li class="details__item">
					<span class="details__item-key">Павильоны представления товара:</span>
					<span class="details__item-val">{{ product?.place }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Место/регион производства:</span>
					<span class="details__item-val">{{ product?.region }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Товарная группа:</span>
					<span class="details__item-val">{{ product?.group }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Страны импорта:</span>
					<span class="details__item-val">{{ product?.importCountries }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Фасовка:</span>
					<span class="details__item-val">{{ product?.packaging }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Объем, вес:</span>
					<span class="details__item-val">{{ product?.weight }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Производитель:</span>
					<span class="details__item-val">{{ product?.producer }}</span>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
const store = useAppStore();
const product = computed(() => store.selectedProduct);
</script>

<style lang="scss" scoped>
.details {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: clamp(20px, 2vw, 30px);

	&__list {
		display: flex;
		flex-direction: column;
	}
	&__item {
		padding: 12px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 8px;
		font-size: clamp(12px, 1.2vw, 16px);
		line-height: 1.4;
		@include mix.respond('md') {
			padding: 8px;
		}
		&:nth-of-type(even) {
			background-color: rgba(221, 232, 255, 1);
		}
		&-key {
			font-weight: 600;
			color: rgba(133, 149, 156, 1);
		}
		&-val {
			text-align: right;
			font-weight: 700;
			color: rgba(20, 30, 34, 1);
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 30px);
		align-self: center;
		&-title {
			font-size: clamp(28px, 3vw, 42px);
			font-weight: 700;
			letter-spacing: 0.03em;
		}
		&-desc {
			letter-spacing: 0.02em;
			font-size: 14px;
			line-height: 19.6px;
		}
	}
	&__img {
		width: 80%;
		height: 80%;
		object-fit: contain;
	}
	&__container {
		background-color: #fff;
		border-radius: 20px;
		display: grid;
		place-items: center;
	}
}
</style>
