<template>
	<section class="products section-padding">
		<h2 class="section-title">Продукт месяц</h2>
		<ul class="products__list">
			<li class="products__item" v-for="product in products" :key="product.title">
				<NuxtImg
					:width="product.img.width"
					:height="product.img.height"
					class="products__item-img"
					:src="product.img.src"
					:alt="product.title" />
				<div class="products__item-content">
					<h3 class="products__item-title text-black">{{ product.title }}</h3>
					<p class="products__item-desc text-grey">
						{{ product.desc }}
					</p>
				</div>
			</li>
		</ul>
		<button class="products__button bg-primary" @click="showMoreProducts">
			Больше товаров
		</button>
	</section>
</template>

<script setup>
import product1Img from '/img/product-1.webp';
import product2Img from '/img/product-2.webp';
import product3Img from '/img/product-3.webp';

const { $gsap, $ScrollTrigger } = useNuxtApp();
const initialProduct = [
	{
		img: {
			src: product1Img,
			width: 85,
			height: 119
		},
		title: 'Purus taciti id natoque',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	},
	{
		img: {
			src: product2Img,
			width: 204,
			height: 151
		},
		title: 'Convallis varius sed ',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	},
	{
		img: {
			src: product3Img,
			width: 120,
			height: 139
		},
		title: 'Convallis varius sed ',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	},
	{
		img: {
			src: product1Img,
			width: 85,
			height: 119
		},
		title: 'Purus taciti id natoque',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	},
	{
		img: {
			src: product2Img,
			width: 204,
			height: 151
		},
		title: 'Convallis varius sed ',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	},
	{
		img: {
			src: product3Img,
			width: 120,
			height: 139
		},
		title: 'Convallis varius sed ',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	},
	{
		img: {
			src: product1Img,
			width: 85,
			height: 119
		},
		title: 'Purus taciti id natoque',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	},
	{
		img: {
			src: product2Img,
			width: 204,
			height: 151
		},
		title: 'Convallis varius sed ',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	},
	{
		img: {
			src: product3Img,
			width: 120,
			height: 139
		},
		title: 'Convallis varius sed ',
		desc: 'Curae interdum volutpat blandit; felis tellus ligula. Tellus hendrerit'
	}
];
const sliceLength = ref(0);
const products = computed(() => initialProduct.slice(0, sliceLength.value));
const numberOfProductsToShow = 3;
const showMoreProducts = () => {
	sliceLength.value += numberOfProductsToShow;
};

onMounted(() => {
	window.innerWidth > 768 ? (sliceLength.value = initialProduct.length) : (sliceLength.value = 5);
});
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
	&__button {
		color: #fff;
		font-weight: 600;
		font-size: 18px;
		border-radius: 11px;
		letter-spacing: -0.02em;
		padding: 18px 45px;
		align-self: center;
		@include mix.respond('md', min) {
			display: none;
		}
	}
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
