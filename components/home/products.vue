<template>
	<section class="products section-padding">
		<h2 class="section-title">Продукт месяц</h2>
		<div class="products__list">
			<NuxtLink
				class="products__item"
				v-for="product in monthProducts"
				:key="product.uuid"
				:to="`/products/${product.title_slug}`"
				@click="appStore.selectProduct(product)">
				<NuxtImg
					class="products__item-img"
					:src="`https://rfh.spacelabs.uz/${JSON.parse(product.images)[0]}`"
					:alt="product.title" />
				<div class="products__item-content">
					<h3 class="products__item-title text-black" :title="product.title">
						{{
							product.title.split(' ').length > 3
								? `${product.title.split(' ').slice(0, 3).join(' ')} ...`
								: product.title
						}}
					</h3>
					<p class="products__item-desc text-grey" :title="product.content">
						{{
							product.content.split(' ').length > 6
								? `${product.content.split(' ').slice(0, 6).join(' ')} ...`
								: product.content
						}}
					</p>
				</div>
			</NuxtLink>
		</div>
		<ButtonPrimary class="none-min-md" label="Больше товаров" @click="loadMore" />
	</section>
</template>

<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();
const { PRODUCTS_URL } = useURL();

const appStore = useAppStore();

const currentPage = ref(1);
const itemsToLoad = 6;
const monthProducts = ref([]);

const fetchMonthProducts = async () => {
	const { PRODUCTS_URL } = useURL();
	const query = {
		lead: 'month'
	};
	const { data } = await useFetch(PRODUCTS_URL, { query });
	monthProducts.value = data.value.data;
};
const loadMore = async () => {
	const query = {
		page: ++currentPage.value,
		take: itemsToLoad,
		lead: 'month'
	};
	const { data } = await useFetch(PRODUCTS_URL, { query });
	monthProducts.value = data.value.data;
};
// watch(monthProducts, () => {
// 	setTimeout(() => {
// 		$ScrollTrigger.refresh();
// 		$gsap.utils.toArray('.products__item').forEach(item => {
// 			$gsap.from(item.firstElementChild, {
// 				y: -20,
// 				stagger: 0.2,
// 				opacity: 0,
// 				scrollTrigger: {
// 					trigger: item,
// 					start: 'top 80%'
// 				}
// 			});
// 			$gsap.from(item.lastElementChild.children, {
// 				delay: 0.2,
// 				y: -20,
// 				stagger: 0.2,
// 				opacity: 0,
// 				scrollTrigger: {
// 					trigger: item,
// 					start: 'top 80%'
// 				}
// 			});
// 		});
// 	}, 50);
// });
</script>

<style lang="scss" scoped>
.products {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	font-family: var.$font-secondary;
	&__item {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		border-radius: 20px;
		background-color: #fff;
		transition: box-shadow 0.3s;
		padding: 1.7rem;
		&-title {
			font-size: 24px;
			letter-spacing: -0.03em;
			font-weight: 600;
			line-height: 1.3;
		}
		&-desc {
			font-size: 18px;
			font-weight: 500;
			letter-spacing: -0.02em;
			line-height: 1.4;
		}
		&:hover {
			box-shadow: 0px 52px 100px 0px rgba(142, 161, 179, 0.6);
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: 15px;
		}
		img {
			align-self: center;
			height: 10rem;
			object-fit: contain;
		}
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 2.2rem;
		@include mix.respond('md') {
			gap: 16px;
		}
	}
}
</style>
