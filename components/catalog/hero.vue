<template>
	<section class="hero">
		<div class="hero__content">
			<h1 class="hero__title">Лучшие российские товары на Вашем столе</h1>
			<form class="hero__form">
				<input
					type="search"
					name="search"
					id="search"
					class="hero__search"
					placeholder="Найти продукты" />
				<button class="hero__button">Поиск</button>
			</form>
		</div>
		<ul class="hero__list">
			<li class="hero__item"></li>
		</ul>
	</section>
</template>

<script setup>
const items = [''];
</script>

<style lang="scss" scoped>
.hero {
	display: ge;
}
</style>
