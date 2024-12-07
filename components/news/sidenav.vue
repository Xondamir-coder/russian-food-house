<template>
	<nav class="nav">
		<h2 class="nav__title">{{ isEvent ? 'Похожие мероприятия' : 'Еще интереснее' }}</h2>
		<ul class="nav__content">
			<li class="nav__content-item" v-for="news in similars" :key="news.uuid">
				<NuxtLink
					class="nav__content-link"
					:to="`/news/${news.title_slug}`"
					@click="appStore.selectNews(news)">
					<h3 class="nav__content-title">
						{{ news.title }}
					</h3>
					<NewsDate :icon-exist="false" :date="news.updated_at" />
				</NuxtLink>
			</li>
		</ul>
		<div class="nav__tags" v-if="tags">
			<h2 class="nav__title">Теги</h2>
			<ul class="nav__tags-list">
				<li v-for="tag in tags" :key="tag.id" class="nav__tags-item">
					<NewsLabel :text="tag.name" />
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
defineProps({
	similars: Array
});
const route = useRoute();
const router = useRouter();
const appStore = useAppStore();
const tags = computed(() => appStore.selectedNews?.tags);
const isEvent = computed(() => appStore.selectedNews?.category === 'events');
</script>

<style lang="scss" scoped>
@mixin hover-effect() {
	&:has(> *:hover) > *:not(:hover) {
		opacity: 0.4;
	}
}
@keyframes slide-from-bottom {
	from {
		opacity: 0;
		transform: translateY(15px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes slide-from-top {
	from {
		opacity: 0;
		transform: translateY(-15px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-from-right {
	from {
		opacity: 0;
		transform: translateX(30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
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
			animation-duration: 0.4s;
			animation-fill-mode: backwards;
			@for $i from 1 through 4 {
				&:nth-child(#{$i}) {
					animation-delay: #{$i * 0.2}s;
					@if ($i % 2 == 0) {
						animation-name: slide-from-left;
					} @else {
						animation-name: slide-from-right;
					}
				}
			}
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
		animation: slide-from-top 0.3s backwards;
	}
	&__tags {
		display: flex;
		flex-direction: column;
		gap: 20px;

		.nav__title {
			animation-delay: 0.6s;
		}
		&-list {
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
			row-gap: 15px;
		}
		&-item {
			transition: opacity 0.3s;
			--bg: rgba(212, 212, 216, 0.4);
			--color: rgba(0, 0, 0, 1);
			animation-duration: 0.3s;
			animation-fill-mode: backwards;
			@for $i from 1 through 4 {
				&:nth-child(#{$i}) {
					animation-delay: #{$i * 0.2 + 0.5}s;
					@if ($i % 2 == 0) {
						animation-name: slide-from-top;
					} @else {
						animation-name: slide-from-bottom;
					}
				}
			}
		}
	}
}
</style>
