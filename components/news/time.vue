<template>
	<div class="time">
		<svg>
			<use href="~/assets/sprite.svg#clock" />
		</svg>
		<span>{{ time }}</span>
	</div>
</template>
<script setup>
const time = computed(() =>
	new Date(props.date).toLocaleTimeString('ru-RU', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	})
);
const props = defineProps({
	date: String
});
</script>

<style scoped lang="scss">
.time {
	color: rgba(144, 157, 162, 1);
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 16px;
	font-weight: 600;
	line-height: 22.4px;

	svg {
		width: 20px;
		height: 20px;
	}
}
</style>
