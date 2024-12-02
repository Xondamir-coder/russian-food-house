<template>
	<span class="label">
		{{ text }}
	</span>
</template>

<script setup>
defineProps({
	text: String
});
</script>

<style scoped lang="scss">
.label {
	font-family: var.$font-secondary;
	font-size: 14px;
	padding: 4px 8px;
	border-radius: 8px;
	background-color: var(--bg);
	color: var(--color);
	@include mix.respond('md') {
		font-size: 12px;
	}
}
</style>
