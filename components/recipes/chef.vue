<template>
	<div class="chefy">
		<img class="chefy__img" :src="`${DOMAIN_URL}/${data.image}`" :alt="data.name" />
		<h3 class="chefy__name">
			{{ data.name }}
		</h3>
	</div>
</template>

<script setup>
const { DOMAIN_URL } = useURL();
defineProps({
	data: Object
});
</script>

<style lang="scss" scoped>
.chefy {
	border: 0.75px solid rgba(144, 157, 162, 1);
	border-radius: 45px;
	display: grid;
	overflow: hidden;
	transition: box-shadow 0.3s;
	&:hover {
		box-shadow: 0px 52px 100px 0px rgba(142, 161, 179, 0.6);
	}

	& > * {
		grid-area: 1/1/2/2;
	}
	&__name {
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-inline: 20px;
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(15px);
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0.03em;
		text-align: center;
		color: #fff;
		align-self: flex-end;
		justify-self: center;
	}

	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 500/600;
	}
}
</style>
