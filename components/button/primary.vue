<template>
	<button class="button bg-primary">{{ label }}</button>
</template>

<script setup>
defineProps({
	label: String
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
	&:hover {
		background-color: #fff;
		color: map.get(var.$colors, 'primary');
		box-shadow: 0 5px 70px 0px rgba(142, 161, 179, 0.8);
	}
}
</style>
