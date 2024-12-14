<template>
	<Articlewrapper :data="appStore.selectedNews" type="news">
		<template #side>
			<NewsSidenav :similars="similarData" />
		</template>
	</Articlewrapper>
</template>

<script setup>
const appStore = useAppStore();
const route = useRoute();
const { NEWS_URL } = useURL();

// Take from store otherwise fetch from API
if (!appStore.selectedNews || appStore.selectedNews?.title_slug !== route.params.title) {
	await appStore.fetchOneNews(route.params.title);
}

const similarData = ref([]);

// Get similar news if its news
const { data } = await useFetch(`${NEWS_URL}/${route.params.title}/similars`);
similarData.value = data.value;
</script>
