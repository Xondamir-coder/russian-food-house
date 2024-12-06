<template>
	<div class="container section-padding">
		<Breadcrumb :crumbs="breadcrumbs" />
		<main class="container__wrapper">
			<NewsContent />
			<NewsSidenav />
		</main>
	</div>
</template>

<script setup>
const appStore = useAppStore();
const route = useRoute();

if (!appStore.selectedNews || appStore.selectedNews.uuid !== route.params.uuid) {
	await appStore.fetchOneNews(route.params.id);
}

const breadcrumbs = computed(() => {
	const dataTitle = appStore.selectedNews?.meta_title;
	const dataType = appStore.selectedNews?.type;
	const title = dataTitle?.length > 30 ? `${dataTitle?.slice(0, 30)} ...` : dataTitle;
	return [
		{ name: 'Новости', link: '/news' },
		{ name: dataType, link: '/news' },
		{ name: title, link: '/news' }
	];
});

useHead({
	title: computed(() => `${appStore.selectedNews?.meta_title}  | Russian Food House`),
	meta: [
		{
			content: computed(() => appStore.selectedNews?.meta_description),
			name: 'description'
		},
		{
			content: computed(() => appStore.selectedNews?.meta_keywords),
			name: 'keywords'
		}
	]
});
</script>

<style lang="scss" scoped>
.container {
	padding-top: clamp(16px, 2vw, 20px);
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 3vw, 34px);
	padding-bottom: clamp(20px, 2vw, 30px);
	&__wrapper {
		display: grid;
		column-gap: 2vw;
		row-gap: 20px;
		@include mix.respond('md', min) {
			grid-template-columns: 2fr 22rem;
			align-items: flex-start;
		}
	}
}
</style>

<script setup></script>
