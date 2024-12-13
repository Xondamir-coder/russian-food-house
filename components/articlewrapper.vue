<template>
	<div class="container section-padding">
		<Breadcrumb :crumbs="breadcrumbs" />
		<main class="container__wrapper">
			<NewsContent :data="data" />
			<NewsSidenav :similars="similarData" v-if="type === 'news'" />
		</main>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object,
	type: String
});
const { NEWS_URL } = useURL();

const similarData = ref([]);

// Get similar news if its news
if (props.type === 'news') {
	const { data } = await useFetch(`${NEWS_URL}/${props.data.title_slug}/similars`);
	similarData.value = data.value;
}
const translateToRussian = str => {
	const map = {
		news: 'Новости',
		services: 'Сервисы',
		recipes: 'Рецепты'
	};
	return map[str];
};

const breadcrumbs = computed(() => {
	const dataTitle = props.data?.title;
	const dataType = props.data?.type;
	return dataType
		? [
				{ name: translateToRussian(props.type), link: `/${props.type}` },
				{ name: dataType, link: `/${props.type}` },
				{ name: dataTitle, link: `/${props.type}` }
		  ]
		: [
				{ name: translateToRussian(props.type), link: `/${props.type}` },
				{ name: dataTitle, link: `/${props.type}` }
		  ];
});

useHead({
	title: computed(() => `${props.data?.meta_title}  | Russian Food House`),
	meta: [
		{
			content: computed(() => props.data?.meta_description),
			name: 'description'
		},
		{
			content: computed(() => props.data?.meta_keywords),
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
