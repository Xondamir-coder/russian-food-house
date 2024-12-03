<template>
	<nav class="nav">
		<h2 class="nav__title">{{ isEvent ? 'Похожие мероприятия' : 'Еще интереснее' }}</h2>
		<ul class="nav__content">
			<li class="nav__content-item" v-for="item in items" :key="item.title">
				<NuxtLink class="nav__content-link" to="/news/fake-id">
					<h3 class="nav__content-title">
						{{ item.title }}
					</h3>
					<NewsDate :icon-exist="false" :date="item.date" />
				</NuxtLink>
			</li>
		</ul>
		<div class="nav__tags">
			<h2 class="nav__title">Теги</h2>
			<ul class="nav__tags-list">
				<li v-for="tag in tags" :key="tag" class="nav__tags-item">
					<NuxtLink to="/news/fake-tag">
						<NewsLabel :text="tag" />
					</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
const route = useRoute();
const items = [
	{
		title: 'Ornare est accumsan sagittis morbi auctor tellus feugiat curae massa sollicitudin risus maecenas; elit vel commodo',
		date: new Date().toISOString()
	},
	{
		title: 'Sem lacus, erat venenatis, vestibulum gravida dolor tellus.',
		date: new Date().toISOString()
	},
	{
		title: 'Nisi amet maximus venenatis volutpat cras hac suspendisse Vestibulum est blandit vivamus',
		date: new Date().toISOString()
	}
];
const tags = [
	'Интересно',
	'Хит',
	'Популярные',
	'Вкусно',
	'Читать удобно',
	'Новости',
	'Факты',
	'Лайфхаки',
	'Популярные'
];

const isEvent = computed(() => route.name.includes('events'));
</script>

<style lang="scss" scoped>
@mixin hover-effect() {
	&:has(> *:hover) > *:not(:hover) {
		opacity: 0.4;
	}
}
.nav {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2vw, 30px);
	background-color: #fff;
	padding: clamp(14px, 2vw, 24px);
	border-radius: 20px;
	&__content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		@include hover-effect();
		&-link {
			display: flex;
			flex-direction: column;
			gap: 15px;
		}
		&-item {
			transition: opacity 0.3s;
			&:not(:last-of-type) {
				padding-bottom: 20px;
				border-bottom: 1px solid rgba(230, 233, 234, 1);
			}
		}
		&-title {
			font-size: 18px;
			font-weight: 600;
			line-height: 25.2px;
		}
		&-date {
			font-size: 14px;
			font-weight: 600;
			line-height: 16.8px;
			letter-spacing: 0.04em;
			color: rgba(144, 157, 162, 1);
		}
	}
	&__title {
		font-size: 24px;
		font-weight: 700;
	}
	&__tags {
		display: flex;
		flex-direction: column;
		gap: 20px;

		&-list {
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
			row-gap: 15px;
			@include hover-effect();
		}
		&-item {
			transition: opacity 0.3s;
			--bg: rgba(212, 212, 216, 0.4);
			--color: rgba(0, 0, 0, 1);
		}
	}
}
</style>
