<template>
	<Articlewrapper :data="newsData" type="news">
		<template #side>
			<NewsSidenav :similars="similarData" />
		</template>
	</Articlewrapper>
</template>

<script setup>
const appStore = useAppStore();
const route = useRoute();
const { NEWS_URL } = useURL();
const newsData = ref();

//!TODO: Checking if it works on server

// Take from store otherwise fetch from API
newsData.value = await appStore.fetchOneNews(route.params.title);

const similarData = ref([]);

// Get similar news if its news
const { data } = await useFetch(`${NEWS_URL}/${route.params.title}/similars`);
similarData.value = data.value;
</script>
