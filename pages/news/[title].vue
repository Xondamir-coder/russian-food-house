<template>
	<Articlewrapper :data="appStore.selectedNews" type="news" />
</template>

<script setup>
const appStore = useAppStore();
const route = useRoute();

// Take from store otherwise fetch from API
if (!appStore.selectedNews || appStore.selectedNews?.title_slug !== route.params.title) {
	await appStore.fetchOneNews(route.params.title);
}
</script>
