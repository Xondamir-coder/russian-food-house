<template>
	<ul class="accordion">
		<li
			class="accordion__item"
			v-for="question in questions"
			:key="question.title"
			:class="{ active: activeQuestionTitle === question.title }">
			<button class="accordion__item-top" @click="toggleQuestion(question.title)">
				<h3 class="accordion__item-title">
					{{ question.title }}
				</h3>
				<svg class="icon-arrow">
					<use href="~/assets/sprite.svg#accordion-arrow" />
				</svg>
			</button>
			<p class="accordion__item-text">
				{{ question.text }}
			</p>
		</li>
	</ul>
</template>

<script setup>
const faqCategories = {
	main: [
		{
			title: 'What is Russian cuisine?',
			text: 'Russian cuisine includes traditional dishes such as borscht, blini, and pelmeni.'
		},
		{
			title: 'What is borscht?',
			text: 'Borscht is a beet soup commonly served in Russia, often accompanied by sour cream.'
		},
		{
			title: 'What are blini?',
			text: 'Blini are thin pancakes, similar to crepes, often served with caviar or sour cream.'
		},
		{
			title: 'What is the origin of pelmeni?',
			text: 'Pelmeni are dumplings filled with meat, originating from Siberia.'
		},
		{
			title: 'What beverages are common in Russian meals?',
			text: 'Kvass, tea, and vodka are popular beverages in Russian meals.'
		},
		{
			title: 'What is the significance of bread in Russian culture?',
			text: 'Bread symbolizes hospitality and is a staple in every Russian meal.'
		},
		{
			title: 'What is traditional Russian hospitality?',
			text: 'Hospitality in Russia often includes sharing a feast with guests.'
		}
	],
	secondary: [
		{
			title: 'What is kvass?',
			text: 'Kvass is a traditional Russian fermented drink made from rye bread.'
		},
		{
			title: 'What are Russian pies?',
			text: 'Pirozhki are small pastries filled with meat, cabbage, or berries.'
		},
		{
			title: 'What is Russian tea culture?',
			text: 'Tea in Russia is often served with sugar, jam, and pastries.'
		},
		{
			title: 'What is a samovar?',
			text: 'A samovar is a traditional Russian device used for boiling water for tea.'
		},
		{
			title: 'What is solyanka?',
			text: 'Solyanka is a spicy soup with meat, pickles, and sour cream.'
		},
		{
			title: 'What is okroshka?',
			text: 'Okroshka is a cold soup made with vegetables, meat, and kvass or kefir.'
		},
		{
			title: 'What are pickled vegetables in Russian cuisine?',
			text: 'Pickling is a common preservation method, and pickles are often served as a side dish.'
		}
	],
	tertiary: [
		{
			title: 'What are Russian desserts?',
			text: 'Popular Russian desserts include honey cake (Medovik) and Napoleon cake.'
		},
		{
			title: 'What is a honey cake?',
			text: 'Medovik is a layered cake made with honey and sour cream.'
		},
		{
			title: 'What is kasha?',
			text: 'Kasha refers to porridge, a staple dish made from grains like buckwheat.'
		},
		{
			title: 'What are vareniki?',
			text: 'Vareniki are dumplings filled with sweet or savory fillings, similar to pelmeni.'
		},
		{
			title: 'What is the role of sour cream in Russian dishes?',
			text: 'Sour cream is a versatile ingredient used in soups, sauces, and desserts.'
		},
		{
			title: 'What is kulebyaka?',
			text: 'Kulebyaka is a traditional pie filled with fish, rice, and mushrooms.'
		},
		{
			title: 'What is syrniki?',
			text: 'Syrniki are fried quark pancakes often served with honey or jam.'
		}
	],
	quaternary: [
		{
			title: 'What are traditional Russian holiday dishes?',
			text: 'Holiday dishes include Olivier salad, herring under a fur coat, and kulebyaka.'
		},
		{
			title: 'What is Olivier salad?',
			text: 'Olivier salad is a potato salad with vegetables, meat, and mayonnaise.'
		},
		{
			title: 'What is herring under a fur coat?',
			text: 'A layered salad with herring, beets, potatoes, and mayonnaise.'
		},
		{
			title: 'What is shashlik?',
			text: 'Shashlik is Russian-style kebabs, typically grilled over open flames.'
		},
		{
			title: 'What is kholodets?',
			text: 'Kholodets is a meat jelly dish made from boiled meat and broth.'
		},
		{
			title: 'What is the significance of Easter in Russian cuisine?',
			text: 'Traditional Easter dishes include kulich (sweet bread) and paskha (sweet cheese dessert).'
		},
		{
			title: 'What is Christmas kutia?',
			text: 'Kutia is a sweet grain pudding served during Russian Orthodox Christmas.'
		}
	],
	quinary: [
		{
			title: 'What are traditional Russian breads?',
			text: 'Borodinsky and rye bread are staples in Russian meals.'
		},
		{
			title: 'What is a common Russian breakfast?',
			text: 'Breakfast often includes porridge, eggs, and tea.'
		},
		{
			title: 'What are traditional Russian fish dishes?',
			text: 'Fish dishes include smoked salmon, caviar, and sturgeon.'
		},
		{
			title: 'What are Russian mushroom dishes?',
			text: 'Mushrooms are used in soups, stews, and pies, especially in rural areas.'
		},
		{
			title: 'What is Russian sauerkraut?',
			text: 'Sauerkraut is a common side dish made from fermented cabbage.'
		},
		{
			title: 'What are Russian meat dishes?',
			text: 'Common dishes include beef stroganoff, kotleti, and roasted pork.'
		},
		{
			title: 'What is the role of dill in Russian cuisine?',
			text: 'Dill is a common herb used in soups, salads, and garnishes.'
		}
	]
};

const activeQuestionTitle = ref('');
const questions = computed(() => faqCategories[props.activeAccordion]);
const props = defineProps({
	activeAccordion: String
});

const toggleQuestion = questionTitle => {
	activeQuestionTitle.value = activeQuestionTitle.value === questionTitle ? '' : questionTitle;
};
</script>

<style lang="scss" scoped>
@keyframes slide-in-from-bottom {
	from {
		opacity: 0;
		transform: translateY(50px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.accordion {
	flex: 1;
	display: flex;
	flex-direction: column;
	@include mix.respond('md') {
		gap: 16px;
	}
	&__item {
		animation: slide-in-from-bottom 0.5s backwards;
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation-delay: #{$i * 0.05}s;
			}
		}
		&.active {
			.accordion__item-top {
				background-color: #fff;
			}
			.icon-arrow {
				transform: rotate(-540deg);
			}
			.accordion__item-text {
				background-color: #fff;
				border-color: rgba(230, 233, 234, 1);
				max-height: 250px;
				padding: 40px;
				@include mix.respond('md') {
					padding: 25px;
				}
			}
		}
		&-top {
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: clamp(10px, 3vw, 40px);
			transition: background-color 0.3s;
			gap: 20px;
			@include mix.respond('md') {
				display: grid;
				grid-template-columns: 1fr max-content;
			}
		}
		&-title {
			text-align: left;
			font-size: clamp(18px, 2vw, 24px);
			font-weight: 700;
			line-height: 1.5;
		}
		&-text {
			font-size: 18px;
			font-weight: 500;
			line-height: 25.2px;
			letter-spacing: 0.02em;
			padding: 0 40px;
			border-top: 2px solid transparent;
			transition: background-color 0.3s, transform 0.3s, max-height 0.3s, padding 0.3s,
				border-color 0.3s;
			max-height: 0;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
			overflow: hidden;
			@include mix.respond('md') {
				padding: 0 25px;
			}
		}
	}
}
</style>
