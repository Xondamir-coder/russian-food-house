<template>
	<form class="search__form" @submit.prevent="submitQuery">
		<div class="search__block">
			<input
				type="text"
				name="text"
				id="text"
				class="search__input"
				placeholder="Найти продукты"
				required
				v-model="query" />
			<button
				type="button"
				class="search__close"
				@click="clearQuery"
				:class="{ active: query }">
				<svg class="fill-primary icon-close">
					<use href="~/assets/sprite.svg#x" />
				</svg>
			</button>
		</div>
		<button class="search__button bg-primary" type="submit">Поиск</button>
	</form>
</template>

<script setup>
const query = ref('');

const clearQuery = () => (query.value = '');
const submitQuery = () => {
	console.log(query.value);
};
</script>

<style scoped lang="scss">
@use 'sass:map';
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-40px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-from-right {
	from {
		opacity: 0;
		transform: translateX(40px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.search {
	&__input {
		width: 100%;
		padding: 18px 25px;
		font-size: 16px;
		font-weight: 500;
		border-radius: 11px;
		background: #fff;
		border: none;
		outline: none;

		@include mix.respond('md') {
			padding: 10px 16px;
		}
	}
	&__block {
		flex: 1;
		display: flex;
		position: relative;
		animation: slide-from-left 0.5s backwards 0.25s;
	}
	&__close {
		position: absolute;
		right: 6px;
		top: 50%;
		transform: translateY(-50%) scale(0);
		transition: transform 0.3s;
		padding: 10px;
		&.active {
			transform: translateY(-50%) scale(1);
		}
	}
	&__button {
		color: #fff;
		border-radius: 11px;
		padding: 18px 46px;
		font-family: var.$font-secondary;
		font-size: 16px;
		transition: background-color 0.3s, color 0.3s;
		animation: slide-from-right 0.5s backwards 0.25s;

		@include mix.respond('md') {
			padding: 11.5px 20.5px;
		}
		&:hover {
			background-color: #fff;
			color: map.get(var.$colors, 'primary');
		}
	}
	&__form {
		display: flex;
		gap: 20px;
		@include mix.respond('md') {
			padding: 0px 16px;
			gap: 10px;
		}
	}
}
</style>
