<template>
	<nav aria-label="breadcrumb">
		<ul class="breadcrumb">
			<li
				v-for="(crumb, index) in crumbs"
				:key="index"
				:class="{ active: index === crumbs.length - 1 }">
				<NuxtLink v-if="index !== crumbs.length - 1" :to="crumb.link">
					{{ crumb.name }}
				</NuxtLink>
				<span v-else>{{ crumb.name }}</span>
			</li>
		</ul>
	</nav>
</template>

<script setup>
defineProps({
	crumbs: {
		type: Array,
		required: true
	}
});
</script>

<style scoped lang="scss">
@use 'sass:map';
@keyframes slide-from-top {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes slide-from-bottom {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.breadcrumb {
	list-style: none;
	display: flex;
	gap: max(1vw, 10px);
	flex-wrap: wrap;
	& li {
		display: flex;
		align-items: center;
		gap: max(1vw, 10px);
		color: rgba(88, 100, 112, 1);
		font-weight: 600;
		letter-spacing: 0.02em;
		@for $index from 1 through 5 {
			&:nth-child(#{$index}) {
				@if ($index % 2 == 0) {
					animation-name: slide-from-bottom;
				} @else {
					animation-name: slide-from-top;
				}
				animation-delay: #{$index * 0.1}s;
				animation-duration: 0.3s;
				animation-fill-mode: backwards;
			}
		}
		&::after {
			content: '';
			border-radius: 50%;
			display: block;
			width: 5px;
			height: 5px;
			background-color: rgba(88, 100, 112, 1);
		}
		&:last-child::after {
			display: none;
		}
		&.active {
			font-weight: bold;
			color: #666;
			color: map.get(var.$colors, 'primary');
		}
	}
}
</style>
