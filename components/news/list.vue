<template>
	<section class="container" ref="containerRef">
		<h2 class="container__title text-primary">Новости</h2>
		<div class="list" ref="listRef">
			<NuxtLink
				:to="item.type === 'Мероприятия' ? `/events/${item.id}` : `/news/${item.id}`"
				class="list__item"
				v-for="item in items"
				:key="item.id"
				:style="useRandomColorStyle()"
				@click="
					item.type === 'Мероприятия'
						? appStore.selectEvent(item.id)
						: appStore.selectNews(item.id)
				">
				<div class="list__item-wrapper">
					<div class="list__item-top">
						<NewsLabel class="list__item-label" :text="item.type" />
						<NuxtImg class="list__item-img" :src="item.image" />
					</div>
					<h4 class="list__item-title">
						{{ item.meta_title }}
					</h4>
				</div>
				<div class="list__item-content">
					<NewsDate :date="item.updatedAt" />
					<NewsTime :date="item.updatedAt" />
				</div>
			</NuxtLink>
		</div>
		<ButtonPrimary class="container__button" label="Показать еще" @click="loadMore" />
	</section>
</template>

<script setup>
const appStore = useAppStore();
const { $gsap } = useNuxtApp();

const containerRef = ref();
const listRef = ref();
const limitItems = ref(12);

const getRandomItems = () => {
	const arr = [...appStore.news, ...appStore.events];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

const randomizedItems = getRandomItems();
const items = computed(() => randomizedItems.slice(0, limitItems.value));

const loadMore = () => {
	limitItems.value += 3;
};

onMounted(() => {
	// Animations
	$gsap.from(containerRef.value.firstElementChild, {
		opacity: 0,
		y: 15,
		scrollTrigger: {
			trigger: containerRef.value,
			start: 'top 80%'
		}
	});
	setTimeout(() => {
		$gsap.utils.toArray(listRef.value.children).forEach((item, i) => {
			$gsap.from(item, {
				opacity: 0,
				y: 15,
				scrollTrigger: {
					trigger: item,
					start: 'top 85%',
				}
			});
		});
	}, 300);
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.container {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2vw, 24px);
	&__button {
		@include mix.respond('md') {
			align-self: stretch;
		}
	}
	&__title {
		font-size: clamp(32px, 3vw, 42px);
		font-weight: 700;
	}
}
.list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	column-gap: 40px;
	row-gap: 24px;
	@include mix.respond('md') {
		row-gap: 16px;
	}
	&__item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #fff;
		padding: clamp(10px, 2vw, 24px);
		border-radius: 20px;
		transition: box-shadow 0.4s;
		animation: slide-from-top 0.4s;
		gap: 26px;
		@include mix.respond('md') {
			gap: 29px;
		}
		&-wrapper {
			display: flex;
			flex-direction: column;
			gap: 16px;
			@include mix.respond('md') {
				gap: 29px;
			}
		}
		&:hover {
			box-shadow: 0px 52px 100px 0px rgba(142, 161, 179, 0.6);
		}
		@include mix.respond('md') {
			gap: 29px;
		}
		&-title {
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 0.02em;
		}
		&-top {
			position: relative;
			border-radius: 10px;
			overflow: hidden;
			&::before {
				content: '';
				position: absolute;
				inset: 0;
				z-index: 1;
				background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
			}
		}
		&-img {
			height: 100%;
			width: 100%;
			aspect-ratio: 312/178;
			object-fit: cover;
			object-position: center;
		}
		&-label {
			position: absolute;
			left: 14px;
			top: 14px;
			z-index: 2;
		}
		&-content {
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
