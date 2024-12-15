<template>
	<div class="search__container">
		<SearchForm :fetch-results="fetchResults" v-model="query" />
		<SearchResults :fetch-results="fetchResults" :results="results" v-model="type" />
	</div>
</template>

<script setup>
const results = ref([]);
const query = ref('');
const type = ref('all');

const fetchResults = () => {
	console.log(query.value);
	console.log(type.value);
};
</script>

<style lang="scss" scoped>
.search__container {
	position: relative;
}
</style>
