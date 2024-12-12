<template>
	<NuxtLink class="item" :to="`/recipes/recipe-${data.title_slug}`">
		<span class="item__type">
			{{ data.type }}
		</span>
		<img class="item__img" :src="data.img" :alt="data.desc" />
		<div class="item__content">
			<span class="item__time">{{ data.time }}</span>
			<p class="item__desc" :title="data.desc">
				{{ data.desc.length > 62 ? `${data.desc.slice(0, 62)}...` : data.desc }}
			</p>
		</div>
	</NuxtLink>
</template>

<script setup>
defineProps({
	data: Object
});
</script>

<style lang="scss" scoped>
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
