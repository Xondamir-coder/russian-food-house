<template>
	<div class="sidebar">
		<div class="sidebar__row">
			<h3 class="sidebar__title">Meal Type</h3>
			<ul class="sidebar__list">
				<li :title="type" class="sidebar__type" v-for="(type, i) in mealTypes" :key="type">
					<input class="sidebar__input" type="radio" name="type" :id="`${type}-${i}`" />
					<label :for="`${type}-${i}`">{{ type }}</label>
				</li>
			</ul>
		</div>
		<div class="sidebar__row">
			<h3 class="sidebar__title">Product Type</h3>
			<ul class="sidebar__list">
				<li
					:title="type"
					class="sidebar__type"
					v-for="(type, i) in productTypes"
					:key="type">
					<input class="sidebar__input" type="radio" name="type" :id="`${type}-${i}`" />
					<label :for="`${type}-${i}`">{{ type }}</label>
				</li>
			</ul>
		</div>
		<div class="sidebar__row">
			<h3 class="sidebar__title">Diet Type</h3>
			<ul class="sidebar__list">
				<li :title="type" class="sidebar__type" v-for="(type, i) in dietTypes" :key="type">
					<input class="sidebar__input" type="radio" name="type" :id="`${type}-${i}`" />
					<label :for="`${type}-${i}`">{{ type }}</label>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const mealTypes = ['Breakfast', 'Lunch', 'Breakfast', 'Lunch', 'Appetizer'];
const productTypes = ['Granola', 'Cereal', 'Oatmeal', 'Breakfast'];
const dietTypes = ['Vegan', 'Paleo', 'Gluten-free', 'Dairy-free'];
</script>

<style lang="scss" scoped>
@use 'sass:map';
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-20px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.sidebar {
	flex-basis: 27%;
	background-color: #fff;
	border-radius: 16px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	box-shadow: 0px 35px 45px 0px rgba(7, 14, 39, 0.05);

	@include mix.respond('md') {
		position: fixed;
		z-index: 105;
		width: 100%;
		max-height: 646px;
		overflow-y: auto;
		bottom: 0;
		left: 0;
		pointer-events: none;
		transform: translateY(100%);
		transition: transform 0.3s;
		&.active {
			transform: translateY(0);
			pointer-events: all;
		}
	}
	&__input {
		background-image: url(~/assets/check.svg);
		background-size: 60%;
		background-repeat: no-repeat;
		background-position: center;
		appearance: none;
		aspect-ratio: 1;
		height: 24px;
		border: 2px solid rgb(212, 212, 216);
		border-radius: 8.4px;
		transition: background-color 0.2s, border-color 0.2s;
		&:checked {
			background-color: map.get(var.$colors, 'primary');
			border-color: transparent;
		}
	}
	&__title {
		font-size: 18px;
		font-weight: 500;
		color: rgba(113, 113, 122, 1);
		animation: slide-from-left 0.3s backwards;
		@for $i from 1 through 3 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.2s;
			}
		}
	}
	&__row {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	&__list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-left: 8px;
	}
	&__type {
		display: flex;
		align-items: center;
		animation-name: slide-from-left;
		animation-duration: 0.3s;
		animation-fill-mode: backwards;
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.1s;
			}
		}
		label {
			font-size: 18px;
			font-weight: 500;
			line-height: 28px;
			color: #000;
			padding-left: 8px;
		}
		& > * {
			cursor: pointer;
		}
	}
}
</style>
