<template>
	<ul class="nav">
		<li
			class="nav__item"
			v-for="cat in categories"
			:key="cat"
			:class="{ active: cat === faqsStore.activeCategory }">
			<button class="nav__button" @click="faqsStore.changeCategory(cat)">
				{{ cat }}
			</button>
		</li>
	</ul>
</template>

<script setup>
const faqsStore = useFaqsStore();
const categories = computed(() => new Set(faqsStore.faqs.map(faq => faq.category)));
</script>

<style lang="scss" scoped>
@keyframes slide-in-from-top {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.nav {
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 16px;
	background-color: #fff;
	padding: 16px 0;
	width: clamp(260px, 20%, 400px);
	@include mix.respond('md') {
		width: 100%;
	}
	&__item {
		animation: slide-in-from-top 0.5s backwards;
		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				animation-delay: #{$i * 0.05}s;
			}
		}
		&.active .nav__button {
			border-color: rgba(3, 77, 145, 1);
			color: rgba(3, 77, 145, 1);
			background-color: rgba(223, 235, 245, 1);
		}
	}
	&__button {
		width: 100%;
		text-align: left;
		font-size: 20px;
		font-weight: 600;
		color: rgba(110, 129, 156, 1);
		transition: color 0.3s, background-color 0.3s, border-color 0.3s;
		border-left: 4px solid transparent;
		padding: 10px 16px;
		&::first-letter {
			text-transform: uppercase;
		}
	}
}
</style>
