const regionPlaceholder = {
	goods: '0',
	producers: '0',
	name: '',
	name_ru: '',
	id: 0,
	created_at: '',
	updated_at: ''
};

export const useMapStore = defineStore('map', () => {
	const regions = ref([regionPlaceholder]);
	const currentRegion = ref(regionPlaceholder);
	const isHovering = ref(false);

	// Mutations
	const setCurrentRegion = regionName => {
		const foundRegion = regions.value.find(item => item.name === regionName);
		currentRegion.value = foundRegion;
	};
	const setHovering = val => {
		isHovering.value = val;
	};

	return {
		regions,
		currentRegion,
		isHovering,
		setCurrentRegion,
		setHovering
	};
});
