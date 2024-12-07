<template>
	<section class="details">
		<div class="details__container">
			<img
				width="485"
				height="449"
				class="details__img"
				:src="`https://rfh.spacelabs.uz/${JSON.parse(product?.images)[0]}`"
				:alt="product?.title" />
		</div>
		<div class="details__content">
			<h1 class="details__content-title">
				{{ product?.title }}
			</h1>
			<p class="details__content-desc text-grey">
				{{ product?.body }}
			</p>
			<ul class="details__list">
				<li class="details__item">
					<span class="details__item-key">Павильоны представления товара:</span>
					<span class="details__item-val">{{ product?.packing }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Место/регион производства:</span>
					<span class="details__item-val">{{ product?.country_made_in.name }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Товарная группа:</span>
					<span class="details__item-val">{{ product?.category.name }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Страны импорта:</span>
					<span class="details__item-val">{{ product?.country_import.name }}</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Фасовка:</span>
					<span class="details__item-val">штук</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Объем, вес:</span>
					<span class="details__item-val">{{ product?.weight }} грамм</span>
				</li>
				<li class="details__item">
					<span class="details__item-key">Производитель:</span>
					<span class="details__item-val">{{ product?.manufacturer.name }}</span>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
const appStore = useAppStore();
const product = computed(() => appStore.selectedProduct);
</script>

<style lang="scss" scoped>
@keyframes slide-in-from-left {
	from {
		opacity: 0;
		transform: translateX(-50px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-in-from-right {
	from {
		opacity: 0;
		transform: translateX(50px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-in-from-bottom {
	from {
		opacity: 0;
		transform: translateY(50px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
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
		animation: slide-in-from-bottom 0.8s backwards;
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation-delay: #{$i * 0.1}s;
			}
		}
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
			animation: slide-in-from-right 0.4s 0.2s backwards;
		}
		&-desc {
			animation: slide-in-from-right 0.4s backwards 0.3s;
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
		animation: slide-in-from-left 1s;
	}
}
</style>
