<template>
	<div
		class="popup"
		:class="{ active: mapStore.isHovering }"
		:style="{ left: pointer.x, top: pointer.y }">
		<div class="popup__down"></div>
		<h4 class="popup__title">
			{{ mapStore.regionTranslations[mapStore.currentRegion?.name] }}
		</h4>
		<div class="popup__row">
			<span>Всего товаров:</span>
			<span>{{ mapStore.currentRegion?.goods }}</span>
		</div>
		<div class="popup__row">
			<span>Производителей:</span>
			<span>{{ mapStore.currentRegion?.producers }}</span>
		</div>
	</div>
</template>

<script setup>
const mapStore = useMapStore();
const pointer = ref({
	x: 0,
	y: 0
});

const handlePointer = event => {
	pointer.value.x = `${event.clientX + 10}px`;
	pointer.value.y = `${event.clientY + 10}px`;
};

onMounted(() => {
	window.addEventListener('mousemove', handlePointer);
});

onUnmounted(() => {
	window.removeEventListener('mousemove', handlePointer);
});
</script>

<style lang="scss" scoped>
.popup {
	background-color: #fff;
	padding: 8px;
	transition: transform 0.2s, opacity 0.2s;
	display: flex;
	flex-direction: column;
	gap: 4px;
	border-radius: 5px;
	position: fixed;
	z-index: 10;
	left: 500px;
	top: 300px;
	width: 155px;
	box-shadow: 0px 31px 70px 0px #0f032acc;
	@include mix.respond('md') {
		display: none;
	}
	&__down {
		width: 0px;
		height: 0px;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-top: 7px solid #fff;
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%);
	}
	&__title {
		font-size: 14px;
		font-weight: 700;
		text-align: center;
		color: #034d91;
	}
	&__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 10px;
		font-weight: 400;
		text-align: left;
		color: #22282b;
	}
	&:not(.active) {
		@include mix.respond('md', min) {
			opacity: 0;
			transform: translateY(-20px);
		}
	}
}
</style>
