<template>
	<div class="search__container">
		<SearchForm :fetch-results="fetchResults" v-model="query" />
		<SearchResults
			:fetch-results="fetchResults"
			:results="results"
			v-model="type"
			:class="{ hidden: !query }" />
	</div>
</template>

<script setup>
const results = ref([]);
const query = ref('');
const page = ref(1);
const type = ref('all');
const { SEARCH_URL } = useURL();
const possibleTypes = ['recipes', 'products', 'chefs'];

const clearResults = () => (results.value = []);
const fetchResults = async (pageDirection = '') => {
	if (query.value.length < 2) {
		clearResults();
		return;
	}

	if (pageDirection === 'next') page.value++;
	else if (pageDirection === 'prev' && page.value > 1) page.value--;

	const res = await $fetch(SEARCH_URL, {
		method: 'GET',
		query: {
			search: query.value,
			type: type.value,
			page: page.value
		}
	});
	if (type.value === 'all') {
		results.value = possibleTypes
			.map(elType => res[elType].data.map(item => ({ ...item, sortingType: elType })))
			.flat();
	} else {
		results.value = res[type.value].data.map(item => ({ ...item, sortingType: type.value }));
	}
};
</script>

<style lang="scss" scoped>
.search__container {
	position: relative;
	&:has(*:focus) > *:last-child {
		opacity: 1;
		transform: translateY(0);
		pointer-events: all;
	}
}
</style>
