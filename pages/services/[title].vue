<template>
	<Articlewrapper :data="appStore.selectedService" type="services" />
</template>

<script setup>
const appStore = useAppStore();
const route = useRoute();

// Take from store otherwise fetch from API
if (!appStore.selectedService || appStore.selectedService?.title_slug !== route.params.title) {
	await appStore.fetchOneService(route.params.title);
}
</script>
