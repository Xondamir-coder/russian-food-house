<template>
	<div class="date">
		<svg class="icon-calendar" v-if="iconExist">
			<use href="~/assets/sprite.svg#calendar" />
		</svg>
		<span>{{ date }}</span>
	</div>
</template>
<script setup>
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const date = computed(() => {
	const date = new Date(props.date);
	return `${date.getDate()} ${capitalize(date.toLocaleString('ru-RU', { month: 'short' })).slice(
		0,
		3
	)} ${date.getFullYear()}`;
});
const props = defineProps({
	date: String,
	iconExist: {
		type: Boolean,
		default: true
	}
});
</script>

<style scoped lang="scss">
.date {
	color: rgba(144, 157, 162, 1);
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 16px;
	font-weight: 600;
	line-height: 22.4px;
}
</style>
