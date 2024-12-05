<template>
	<section class="world section-padding">
		<h2 class="world__title section-title" v-if="noTitle">
			Наши павильоны <br />
			в мире
		</h2>
		<Map />
		<Mappopup />
		<div class="world__wrapper">
			<button class="world__select" @click="toggleShowOptions">
				<span>{{ mapStore.currentRegion?.name_ru }}</span>
				<svg class="icon-arrow">
					<use href="@/assets/sprite.svg#down-arrow" />
				</svg>
			</button>
			<ul class="world__options" :class="{ active: showOptions }">
				<li class="world__option" v-for="region in mapStore.regions" :key="region.name">
					<button
						class="world__button"
						:class="{
							active: region.name === mapStore.currentRegion?.name
						}"
						@click="selectRegion(region.name)">
						{{ region.name_ru }}
					</button>
				</li>
			</ul>
		</div>
		<div class="world__details">
			<div class="world__data text-black">
				<span>Всего товаров:</span>
				<strong>
					<span>{{ mapStore.currentRegion?.goods }}</span>
				</strong>
			</div>
			<div class="world__data text-black">
				<span>Производителей:</span>
				<strong>
					<span>{{ mapStore.currentRegion?.producers }}</span>
				</strong>
			</div>
		</div>
	</section>
</template>

<script setup>
const mapStore = useMapStore();
const { $gsap } = useNuxtApp();
const { REGIONS_URL } = useURL();
const { data } = await useFetch(REGIONS_URL);

mapStore.regions = data.value;
mapStore.currentRegion = mapStore.regions[0];

defineProps({
	noTitle: Boolean
});

const showOptions = ref(false);

const selectRegion = regionName => {
	mapStore.setCurrentRegion(regionName);
	toggleShowOptions();
};
const toggleShowOptions = () => (showOptions.value = !showOptions.value);

onMounted(() => {
	$gsap.from('.world__title', {
		y: 20,
		opacity: 0,
		scrollTrigger: {
			trigger: '.world',
			start: 'top 80%'
		}
	});
	$gsap.from('.map>*', {
		scale: 0,
		transformOrigin: 'center',
		scrollTrigger: {
			trigger: '.map',
			start: 'top 80%'
		}
	});
});
</script>

<style lang="scss" scoped>
.world {
	display: flex;
	gap: 20px;
	flex-direction: column;
	@include mix.respond('md') {
		margin-top: 30px;
	}
	@include mix.respond('xsm', min) {
		br {
			display: none;
		}
	}
	&__details {
		display: flex;
		flex-direction: column;
		gap: 12px;

		@include mix.respond('sm', min) {
			display: none;
		}
	}
	&__data {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 18px;
		font-weight: 500;
	}
	&__select {
		width: 100%;
		align-self: center;
		display: flex;
		justify-content: space-between;
		gap: 20px;
		align-items: center;
		border: 2px solid rgba(228, 228, 231, 1);
		&:has(+ .world__options.active) .icon-arrow {
			transform: rotate(180deg);
		}
	}
	&__options {
		width: 100%;
		position: absolute;
		top: calc(100% + 10px);
		left: 0;
		z-index: 15;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
		max-height: 300px;
		overflow-y: auto;
		&:not(.active) {
			opacity: 0;
			visibility: hidden;
			transform: translateY(-20px);
		}
	}
	&__button {
		padding: 10px 0;
		width: 100%;
		text-align: left;
		&.active {
			font-weight: bold;
		}
	}
	&__wrapper {
		position: relative;
		display: flex;
		font-size: 16px;
		& > * {
			border-radius: 12px;
			background-color: rgb(244, 244, 245);
			color: rgba(17, 24, 28, 1);
			padding: 10px 16px;
		}

		@include mix.respond('sm', min) {
			display: none;
		}
	}
	&__title {
		@include mix.respond('xsm') {
			align-self: center;
			max-width: 14ch;
		}
	}
}
</style>
