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
const router = useRouter();

const data = computed(() =>
	props.type === 'news' ? appStore.selectedNews : appStore.selectedEvent
);
const breadcrumbs = computed(() => {
	const dataTitle = data.value?.meta_title;
	const dataType = data.value?.type;
	const title = dataTitle?.length > 30 ? `${dataTitle.slice(0, 30)} ...` : dataTitle;
	return [
		{ name: 'Новости', link: '/news' },
		{ name: dataType, link: '/news' },
		{ name: title, link: '/news' }
	];
});
onMounted(() => {
	if (data.value?.id === route.params.id) return;

	if (props.type === 'news') {
		appStore.selectNews(route.params.id);
	} else {
		appStore.selectEvent(route.params.id);
	}

	if (!data.value) {
		router.push('/not-found');
	}
});

const props = defineProps({
	type: String
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
