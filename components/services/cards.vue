<template>
	<section class="cards" id="services-cards">
		<div class="cards__item" v-for="card in data" :key="card.title">
			<img width="760" height="406" class="cards__img" :src="card.img" :alt="card.title" />
			<div class="cards__content">
				<div class="cards__details">
					<h3 class="cards__title">{{ card.title }}</h3>
					<p class="cards__text">{{ card.text }}</p>
				</div>
				<ButtonPrimary class="cards__button" label="Узнать больше" />
			</div>
		</div>
	</section>
</template>

<script setup>
import card1 from '/img/card-1.jpg';
import card2 from '/img/card-2.jpg';
const data = [
	{
		img: card1,
		title: 'Подача заявки на размещение в павильоне на цифровой платформе «Мой экспорт» (ИС «Одно окно»)',
		text: 'Российский экспортный центр (РЭЦ) реализует программу по созданию (управлению и содержанию) постоянно действующих демонстрационно-дегустационных павильонов российских продуктов питания в иностранных государствах.'
	},
	{
		img: card2,
		title: 'Подача заявки на получение сертификата соответствия «Сделано в России»',
		text: 'Размещение продукции компании в павильоне позволит представить продукцию потенциальным покупателям за рубежом, наладить b2b-контакты и повысить узнаваемость компании среди иностранных покупателей. '
	}
];

const { $gsap } = useNuxtApp();

onMounted(() => {
	$gsap.utils.toArray('.cards__item').forEach((item, i) => {
		$gsap.from(item.firstElementChild, {
			x: i == 0 ? -200 : 200,
			opacity: 0,
			scrollTrigger: {
				trigger: item,
				start: 'top 80%'
			}
		});
		$gsap.from(item.lastElementChild, {
			y: 200,
			opacity: 0,
			scrollTrigger: {
				trigger: item,
				start: 'top 80%'
			}
		});
	});
});
</script>

<style lang="scss" scoped>
.cards {
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 30px 0;
	@include mix.respond('md') {
		padding: 0;
	}
	&__button {
		font-family: var.$font-base;
		align-self: stretch;
		font-size: 20px;
		letter-spacing: 0.02em;
		font-weight: 700;
	}
	&__title {
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 0.03em;
		line-height: 1.4;
	}
	&__text {
		font-size: 16px;
		font-weight: 500;
		line-height: 22.4px;
		color: rgba(113, 125, 129, 1);
	}
	&__details {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	&__content {
		background: #fff;
		border-radius: 20px;
		padding: 26px 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 33px;
	}
	&__img {
		width: 100%;
		border-radius: 20px;
		object-fit: cover;
		@include mix.respond('lg', min) {
			grid-column: span 2;
		}
		@include mix.respond('xl') {
			grid-column: auto;
		}
	}
	&__item {
		display: grid;
		gap: 16px;
		@include mix.respond('lg', min) {
			gap: 24px;
			grid-template-columns: repeat(3, 1fr);
			&:nth-of-type(even) {
				.cards__img {
					order: 1;
				}
			}
		}
		@include mix.respond('xl') {
			gap: 24px;
			grid-template-columns: repeat(2, 1fr);
		}
		@include mix.respond('md') {
			grid-template-columns: auto;
			&:nth-of-type(even) {
				.cards__img {
					order: 0;
				}
			}
		}
	}
}
</style>
