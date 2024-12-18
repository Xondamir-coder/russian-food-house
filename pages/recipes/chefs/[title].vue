<template>
	<main class="chef section-padding" id="chef">
		<Breadcrumb :crumbs="breadcrumbs" />
		<div class="chef__center">
			<h1 class="chef__name">Вкусные рецепты</h1>
			<div class="chef__outer">
				<div class="chef__inner bg-primary"></div>
			</div>
		</div>
		<div class="chef__container" id="chef-container">
			<RecipesChef class="chef__card" :data="recipesStore.selectedChef" />
			<RecipesItem
				class="chef__item"
				v-for="recipe in recipesStore.chefRecipes"
				:data="recipe" />
		</div>
	</main>
</template>

<script setup>
const route = useRoute();
const { $gsap } = useNuxtApp();
const recipesStore = useRecipesStore();
const breadcrumbs = computed(() => [
	{
		name: 'Рецепты',
		link: '/recipes'
	},
	{
		name: 'Повары',
		link: '/recipes/chefs'
	},
	{ name: route.params.title, link: route.path }
]);

if (!recipesStore.selectedChef.name || recipesStore.selectedChef.uuid !== route.query.uuid) {
	await recipesStore.fetchOneChef(route.query.uuid);
}
await recipesStore.fetchChefRecipes(route.query.uuid);

onMounted(() => {
	$gsap.fromTo(
		'#chef-container .chef__card',
		{ clipPath: 'circle(0%)', opacity: 0, scale: 0.8, duration: 1.5 },
		{ clipPath: 'circle(100%)', opacity: 1, scale: 1, duration: 1.5 }
	);

	$gsap.fromTo(
		'#chef-container .chef__item',
		{ clipPath: 'circle(0%)', opacity: 0, scale: 0.8, duration: 1.5, delay: 0.5, stagger: 0.2 },
		{ clipPath: 'circle(100%)', opacity: 1, scale: 1, duration: 1.5, delay: 0.5, stagger: 0.2 }
	);
	const items = document.querySelectorAll('#chef-container .chef__item');

	items.forEach((item, i) => {
		$gsap.to(item, {
			yPercent: window.innerWidth > 768 ? items.length * -100 : items.length * -160,
			scrollTrigger: {
				trigger: '#chef',
				start: 'top top',
				end: 'bottom top',
				scrub: 1,
				pin: i === 0 ? true : false
			}
		});
		$gsap.from(item.querySelector('.item__img'), {
			scale: 1.4,
			yPercent: -50,
			scrollTrigger: {
				trigger: '#chef',
				start: 'top top',
				end: 'bottom top',
				scrub: 1
			}
		});
	});

	// items.forEach((item, index) => {
	// 	const speedMultiplier = 1; // Customize the speed for each item
	// 	$gsap.to(item, {
	// 		yPercent: window.innerWidth > 768 ? speedMultiplier * -100 : speedMultiplier * -160,
	// 		scrollTrigger: {
	// 			trigger: '#chef',
	// 			start: 'top top',
	// 			end: 'bottom top',
	// 			scrub: 1,
	// 			pin: index == 0 ? true : false
	// 		}
	// 	});
	// });

	$gsap.to('#chef .chef__inner', {
		width: '100%',
		scrollTrigger: {
			trigger: '#chef',
			start: 'top top',
			end: 'bottom top',
			scrub: 1
		}
	});

	$gsap.to('#chef-container .chef__card', {
		yPercent: -50,
		scrollTrigger: {
			trigger: '#chef',
			start: 'top top',
			end: '20% top',
			scrub: 1
		}
	});
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-bottom {
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes scale-up {
	from {
		opacity: 0;
		transform: scale(0.3);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
.chef {
	padding-top: clamp(16px, 2vw, 20px);
	display: flex;
	position: relative;
	flex-direction: column;
	&::before,
	&::after {
		position: absolute;
		// content: '';
		width: 100%;
		height: 15%;
		left: 0;
		background: red;
		z-index: 10;
	}
	&::after {
		bottom: 0;
	}
	&::before {
		top: 0;
	}
	a.chef__item {
		width: 260px;
		position: absolute;
		opacity: 0;
		&:nth-of-type(odd) {
			right: -40%;
			@include mix.respond('md') {
				right: -10%;
			}
		}
		&:nth-of-type(even) {
			left: -40%;
			@include mix.respond('md') {
				left: -10%;
			}
		}
		@for $i from 1 through 100 {
			&:nth-of-type(#{$i}) {
				top: 30% + (($i - 1) * 50%);
				@include mix.respond('md') {
					top: 50% + (($i - 1) * 150%);
				}
			}
		}
	}
	&__container {
		margin-top: 8px;
		align-self: center;
		position: relative;
	}
	&__card {
		width: clamp(280px, 100%, 500px);
		background: #fff;
		box-shadow: 0px 52px 100px 0px rgba(142, 161, 179, 0.6);
		opacity: 0;
	}
	&__center {
		padding-top: 10%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		@include mix.respond('md') {
			gap: 0;
			position: relative;
		}
	}
	&__inner {
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
	}
	&__outer {
		position: relative;
		width: 100%;
		height: 6px;
		background-color: #fff;
		border-radius: 99px;
		overflow: hidden;
		animation: scale-up 1s;
		@include mix.respond('md') {
			position: absolute;
			gap: 0;
			bottom: 0;
		}
	}

	&__name {
		font-family: 'Bebas Neue Cyrillic', sans-serif;
		font-size: clamp(110px, 20vw, 200px);
		font-weight: 400;
		text-align: center;
		background: linear-gradient(180deg, #c5d7e9 4%, #f1f8ff 75%);
		background-clip: text;
		color: transparent;
		animation: slide-from-bottom 1s;
		@include mix.respond('md') {
			line-height: 0.9;
		}
	}
}
</style>
