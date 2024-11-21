<template>
	<section class="info section-padding">
		<div class="info__left">
			<img width="380" height="414" class="info__img" src="/img/info-1.jpeg" alt="woman" />
			<img width="380" height="414" class="info__img" src="/img/info-2.jpeg" alt="girl" />
		</div>
		<div class="info__right">
			<h3 class="info__title">
				Мы рады поделиться со всем миром многообразием кухни большой страны и её уникальными
				вкусами
			</h3>
			<p class="info__text text-grey">
				Россия - самая большая страна в мире, это страна с благоприятной экологической
				обстановкой, необъятными площадями сельхозугодий и водными ресурсами, богатыми рыбой
				и морепродуктами, что в совокупности позволяет предлагать конечным потребителями
				самую внушительную линейку производимых продуктов.
			</p>
			<ul class="info__list">
				<li class="info__item">
					<div class="info__icon-container">
						<svg class="info__icon">
							<use href="~/assets/sprite.svg#briefcase" />
						</svg>
					</div>
					<p>Наши продукты - это новый вкус</p>
				</li>
				<li class="info__item">
					<div class="info__icon-container">
						<svg class="info__icon">
							<use href="~/assets/sprite.svg#time" />
						</svg>
					</div>
					<p>Профессионалы своего дела</p>
				</li>
				<li class="info__item">
					<div class="info__icon-container">
						<svg class="info__icon">
							<use href="~/assets/sprite.svg#stack" />
						</svg>
					</div>
					<p>Делиться с миром продуктами</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();
onMounted(() => {
	$gsap.from('.info__right>*', {
		opacity: 0,
		y: 40,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.info__right',
			start: 'top 80%'
		}
	});
	$gsap.from('.info__img:first-child', {
		opacity: 0,
		y: -40,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.info__img:first-child',
			start: 'top 80%'
		}
	});
	$gsap.from('.info__img:last-child', {
		opacity: 0,
		y: 40,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.info__img:last-child',
			start: 'top 80%'
		}
	});
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
.info {
	display: flex;
	gap: clamp(16px, 2vw, 30px);
	@include mix.respond('lg') {
		flex-direction: column;
	}

	&__left {
		flex-basis: 60%;
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		@include mix.respond('lg') {
			flex-basis: 300px;
		}
	}
	&__img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 22.83px;
		box-shadow: 0px 13.82px 42.84px 0px rgba(0, 0, 0, 0.2);

		&:first-of-type {
			grid-column: 1 / span 6;
			grid-row: 1 / span 4;
		}
		&:last-of-type {
			grid-column: 5 / span 6;
			grid-row: 2 / span 4;
		}
	}
	&__right {
		flex-basis: 60%;
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 20px);
	}
	&__title {
		font-size: 28px;
		font-weight: 700;
		@include mix.respond('md') {
			font-size: 20px;
			text-align: center;
		}
	}
	&__text {
		font-size: 18px;
		font-weight: 500;
		line-height: 1.4;
		@include mix.respond('md') {
			font-size: 16px;
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 20px);
	}
	&__item {
		display: flex;
		align-items: center;
		gap: clamp(16px, 2vw, 27px);
		font-size: 18px;
		font-weight: 700;
		@include mix.respond('md') {
			font-size: 16px;
		}
	}
	&__icon {
		width: 19px;
		height: 26px;
		fill: #fff;
		&-container {
			width: 50px;
			height: 50px;
			background-color: map.get(var.$colors, 'primary');
			border-radius: 50%;
			display: grid;
			place-items: center;
			box-shadow: 8.33px 8.33px 22.5px 0px rgba(79, 106, 251, 0.3);
		}
	}
}
</style>
