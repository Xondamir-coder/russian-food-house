<template>
	<div class="success">
		<svg class="success__icon">
			<use href="~/assets/sprite.svg#success" />
		</svg>
		<h3 class="success__title">
			Ваш запрос был <br />
			успешно отправлен
		</h3>
		<p class="success__text">
			Ценовая стратегия деятельно искажает ролевой пул лояльных изданий
		</p>
	</div>
</template>

<style scoped lang="scss">
.success {
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	&__icon {
		width: 118px;
		aspect-ratio: 1;
	}
	&__title {
		font-size: 24px;
		font-weight: 700;
		line-height: 28.8px;
		text-align: center;
	}
	&__text {
		font-size: 18px;
		font-weight: 500;
		line-height: 25.2px;
		letter-spacing: 0.02em;
		text-align: center;
	}
}
</style>
