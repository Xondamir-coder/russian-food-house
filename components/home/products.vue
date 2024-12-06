<template>
	<section class="products section-padding">
		<h2 class="section-title">Продукт месяц</h2>
		<ul class="products__list">
			<li class="products__item" v-for="product in products" :key="product.uuid">
				<NuxtImg
					class="products__item-img"
					:src="`https://rfh.spacelabs.uz/${JSON.parse(product.images)[0]}`"
					:alt="product.title" />
				<div class="products__item-content">
					<h3 class="products__item-title text-black">{{ product.title }}</h3>
					<p class="products__item-desc text-grey">
						{{ product.content }}
					</p>
				</div>
			</li>
		</ul>
		<ButtonPrimary class="none-min-md" label="Больше товаров" @click="showMoreProducts" />
	</section>
</template>

<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();
const { PRODUCTS_URL } = useURL();
const { data } = await useFetch(`${PRODUCTS_URL}/?lead="month"&take=9`);
const products = ref(data.value.data);

const showMoreProducts = () => {
	alert('implement show more products');
};

watch(products, () => {
	setTimeout(() => {
		$ScrollTrigger.refresh();
		$gsap.utils.toArray('.products__item').forEach(item => {
			$gsap.from(item.firstElementChild, {
				y: -20,
				stagger: 0.2,
				opacity: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top 80%'
				}
			});
			$gsap.from(item.lastElementChild.children, {
				delay: 0.2,
				y: -20,
				stagger: 0.2,
				opacity: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top 80%'
				}
			});
		});
	}, 50);
});
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
		}
		&-desc {
			font-size: 18px;
			font-weight: 500;
			letter-spacing: -0.02em;
		}
		&:hover {
			box-shadow: 0px 52px 100px 0px rgba(142, 161, 179, 0.6);
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: 1.3rem;
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
