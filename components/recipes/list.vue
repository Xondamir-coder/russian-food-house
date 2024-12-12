<template>
	<div class="wrapper">
		<div class="list" id="modern-recipes-list">
			<RecipesItem v-for="(item, i) in items" :key="i" :data="item" />
		</div>
		<ButtonPrimary class="wrapper__button" label="Показать еще" />
	</div>
</template>

<script setup>
import placeholderImg from '/img/recipe-placeholder.jpg';
const items = [
	{
		img: placeholderImg,
		type: 'Breakfast',
		time: '35 minutes',
		desc: 'Повторный контакт, конечно, оправдывает фактор коммуникации, опираясь на опыт западных коллег',
		title_slug: 'breakfast-35-minutes'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '40 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'lunch-40-minutes'
	},
	{
		img: placeholderImg,
		type: 'Snack',
		time: '15 minutes',
		desc: 'Быстрый и вкусный перекус для заряда энергией на весь день',
		title_slug: 'snack-15-minutes'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '45 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'lunch-45-minutes'
	},
	{
		img: placeholderImg,
		type: 'Dinner',
		time: '1 hour',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'dinner-1-hour'
	},
	{
		img: placeholderImg,
		type: 'Dessert',
		time: '25 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'dessert-25-minutes'
	},
	{
		img: placeholderImg,
		type: 'Breakfast',
		time: '30 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'breakfast-30-minutes'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '40 minutes',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'lunch-40-minutes'
	},
	{
		img: placeholderImg,
		type: 'Dinner',
		time: '1 hour 10 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'dinner-1-hour-10-minutes'
	},
	{
		img: placeholderImg,
		type: 'Dessert',
		time: '20 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'dessert-20-minutes'
	},
	{
		img: placeholderImg,
		type: 'Breakfast',
		time: '20 minutes',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'breakfast-20-minutes'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '50 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'lunch-50-minutes'
	},
	{
		img: placeholderImg,
		type: 'Dinner',
		time: '1 hour 15 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'dinner-1-hour-15-minutes'
	},
	{
		img: placeholderImg,
		type: 'Dessert',
		time: '35 minutes',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'dessert-35-minutes'
	},
	{
		img: placeholderImg,
		type: 'Breakfast',
		time: '25 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'breakfast-25-minutes'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '55 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'lunch-55-minutes'
	},
	{
		img: placeholderImg,
		type: 'Dinner',
		time: '1 hour 20 minutes',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'dinner-1-hour-20-minutes'
	},
	{
		img: placeholderImg,
		type: 'Dessert',
		time: '30 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании',
		title_slug: 'dessert-30-minutes'
	}
];

const { $gsap } = useNuxtApp();
onMounted(() => {
	$gsap.utils.toArray('#modern-recipes-list .item').forEach((item, i) => {
		$gsap.from(item, {
			opacity: 0,
			x: i % 2 === 0 ? -20 : 20,
			scrollTrigger: {
				trigger: item,
				start: '20% bottom'
			}
		});
	});
});
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2vw, 24px);
	flex-grow: 1;
}
.list {
	display: grid;
	gap: clamp(16px, 2vw, 24px);
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
