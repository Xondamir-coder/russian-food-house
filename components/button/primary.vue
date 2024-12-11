<template>
	<button class="button bg-primary">
		<span>{{ label }}</span>
		<svg class="button__icon" v-if="useIcon">
			<use href="~/assets/sprite.svg#right-arrow" />
		</svg>
	</button>
</template>

<script setup>
defineProps({
	label: String,
	useIcon: Boolean
});
</script>

<style scoped lang="scss">
@use 'sass:map';
.button {
	color: #fff;
	font-family: var.$font-secondary;
	font-weight: 600;
	font-size: 18px;
	border-radius: 11px;
	letter-spacing: -0.02em;
	padding: 18px 45px;
	align-self: center;
	transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;

	&__icon {
		width: 8px;
		height: 12px;
		fill: #fff;
		transition: fill 0.3s;
	}
	&:hover {
		background-color: #fff;
		color: map.get(var.$colors, 'primary');
		box-shadow: 0 5px 70px 0px rgba(142, 161, 179, 0.8);
		.button__icon {
			fill: map.get(var.$colors, 'primary');
		}
	}
}
</style>
