<template>
	<div class="wrapper">
		<div class="list" id="modern-recipes-list">
			<NuxtLink class="item" v-for="(item, i) in items" :key="i" :to="`/recipes/recipe-${i}`">
				<span class="item__type">
					{{ item.type }}
				</span>
				<img class="item__img" :src="item.img" :alt="item.desc" />
				<div class="item__content">
					<span class="item__time">{{ item.time }}</span>
					<p class="item__desc" :title="item.desc">
						{{ item.desc.length > 62 ? `${item.desc.slice(0, 62)}...` : item.desc }}
					</p>
				</div>
			</NuxtLink>
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
		desc: 'Повторный контакт, конечно, оправдывает фактор коммуникации, опираясь на опыт западных коллег'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '40 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Snack',
		time: '15 minutes',
		desc: 'Быстрый и вкусный перекус для заряда энергией на весь день'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '45 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Dinner',
		time: '1 hour',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Dessert',
		time: '25 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Breakfast',
		time: '30 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '40 minutes',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Dinner',
		time: '1 hour 10 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Dessert',
		time: '20 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Breakfast',
		time: '20 minutes',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '50 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Dinner',
		time: '1 hour 15 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Dessert',
		time: '35 minutes',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Breakfast',
		time: '25 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Lunch',
		time: '55 minutes',
		desc: 'Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Dinner',
		time: '1 hour 20 minutes',
		desc: 'Значимость этих проблем настолько очевидна, что консультация с широким активом обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
	},
	{
		img: placeholderImg,
		type: 'Dessert',
		time: '30 minutes',
		desc: 'Также как постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (сpecially trained) специалистов участие в формировании'
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
	overflow: hidden;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
.item {
	border-radius: 16px;
	background-color: #fff;
	box-shadow: 0px 35px 45px 0px rgba(7, 14, 39, 0.051);
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 18px;
	overflow: hidden;
	transition: box-shadow 0.3s;
	&:hover {
		box-shadow: 0px 20px 45px 0px rgba(7, 14, 39, 0.3);
	}
	&__content {
		padding-bottom: 24px;
		padding-inline: 16px;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	&__time {
		font-family: var.$font-secondary;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.02em;
		color: rgba(129, 151, 194, 1);
	}
	&__desc {
		font-size: 18px;
		font-weight: 600;
		line-height: 23.4px;
	}
	&__type {
		position: absolute;
		top: 16px;
		left: 16px;
		font-size: 12px;
		font-weight: 500;
		padding: 5px 12px;
		background-color: rgba(244, 244, 245, 1);
		border: 2px solid rgba(212, 212, 216, 1);
		border-radius: 10px;
		color: rgba(0, 111, 238, 1);
	}
	&__img {
		width: 100%;
		aspect-ratio: 260/163;
	}
}
</style>
