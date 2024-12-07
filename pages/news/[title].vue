<template>
	<div class="container section-padding">
		<Breadcrumb :crumbs="breadcrumbs" />
		<main class="container__wrapper">
			<NewsContent />
			<NewsSidenav :similars="similarNews" />
		</main>
	</div>
</template>

<script setup>
const appStore = useAppStore();
const route = useRoute();
const router = useRouter();
const { NEWS_URL } = useURL();

const similarNews = ref([]);

// Take from store otherwise fetch from API
if (!appStore.selectedNews || appStore.selectedNews?.title_slug !== route.params.title) {
	await appStore.fetchOneNews(route.params.title);
}

// If no news found then redirect
if (!appStore.selectedNews?.title_slug) {
	router.push('/not-found');
}

// Get news similars
const { data } = await useFetch(`${NEWS_URL}/${appStore.selectedNews.title_slug}/similars`);
similarNews.value = data.value;

const breadcrumbs = computed(() => {
	const dataTitle = appStore.selectedNews?.title;
	const dataType = appStore.selectedNews?.type;
	return [
		{ name: 'Новости', link: '/news' },
		{ name: dataType, link: '/news' },
		{ name: dataTitle, link: '/news' }
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
