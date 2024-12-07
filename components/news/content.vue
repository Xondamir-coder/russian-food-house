<template>
	<main class="wrapper">
		<div class="wrapper__top">
			<ul class="wrapper__info">
				<li class="wrapper__info-item">
					<NewsLabel :text="appStore.selectedNews?.type" :style="useRandomColorStyle()" />
				</li>
				<li class="wrapper__info-item">
					<NewsDate :date="appStore.selectedNews?.updated_at" />
				</li>
				<li class="wrapper__info-item">
					<NewsTime :date="appStore.selectedNews?.updated_at" />
				</li>
			</ul>
			<h1 class="wrapper__title" :class="{ 'wrapper__title--event': isEventsCat }">
				{{ appStore.selectedNews?.title }}
			</h1>
			<div class="wrapper__bottom" v-if="isEventsCat">
				<ButtonPrimary label="Подать заявку" class="wrapper__button--primary" />
				<button class="wrapper__button">
					<svg class="icon-calendar">
						<use href="~/assets/sprite.svg#calendar" />
					</svg>
					<span>Добавить в календарь</span>
				</button>
			</div>
		</div>
		<div class="content">
			<img
				class="content__img"
				:src="`https://rfh.spacelabs.uz/${appStore.selectedNews?.image}`" />
			<div class="content__main" v-html="appStore.selectedNews?.body"></div>
			<div class="content__bottom" v-if="isEventsCat">
				<div class="content__bottom-item">
					<div class="content__bottom-item_top">
						<svg>
							<use href="~/assets/sprite.svg#site" />
						</svg>
						<span>Сайт:</span>
					</div>
					<a target="_blank" href="https://goodfoodrussia.com/"
						>https://goodfoodrussia.com/</a
					>
				</div>
				<div class="content__bottom-item">
					<div class="content__bottom-item_top">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M18.3327 13.4917C18.3327 16.525 16.5244 18.3333 13.491 18.3333H12.4993C12.041 18.3333 11.666 17.9583 11.666 17.5V12.6917C11.666 12.4667 11.8493 12.275 12.0743 12.275L13.541 12.25C13.6577 12.2417 13.7577 12.1583 13.7827 12.0417L14.0744 10.45C14.0994 10.3 13.9827 10.1583 13.8243 10.1583L12.0493 10.1833C11.816 10.1833 11.6327 10 11.6244 9.77501L11.591 7.73334C11.591 7.6 11.6993 7.48335 11.841 7.48335L13.841 7.45001C13.9827 7.45001 14.091 7.34168 14.091 7.20002L14.0577 5.2C14.0577 5.05833 13.9494 4.95001 13.8077 4.95001L11.5577 4.98335C10.1743 5.00835 9.07436 6.14167 9.09936 7.525L9.14102 9.81667C9.14935 10.05 8.96602 10.2333 8.73269 10.2417L7.73268 10.2583C7.59101 10.2583 7.48269 10.3667 7.48269 10.5083L7.50769 12.0917C7.50769 12.2333 7.61601 12.3417 7.75768 12.3417L8.75769 12.325C8.99102 12.325 9.17434 12.5083 9.18267 12.7333L9.25767 17.4833C9.266 17.95 8.891 18.3333 8.42434 18.3333H6.50768C3.47435 18.3333 1.66602 16.525 1.66602 13.4833V6.50834C1.66602 3.475 3.47435 1.66667 6.50768 1.66667H13.491C16.5244 1.66667 18.3327 3.475 18.3327 6.50834V13.4917Z"
								fill="#909DA2" />
						</svg>

						<span>Facebook:</span>
					</div>
					<a target="_blank" href="https://www.facebook.com/goodfoodrussiavn"
						>https://www.facebook.com...</a
					>
				</div>
				<div class="content__bottom-item">
					<div class="content__bottom-item_top">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_374_3223)">
								<path
									d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.287 5.906C7.509 6.23 5.953 6.9 3.621 7.916C3.243 8.066 3.044 8.214 3.026 8.358C2.996 8.601 3.301 8.697 3.716 8.828L3.891 8.883C4.299 9.016 4.849 9.171 5.134 9.177C5.394 9.183 5.683 9.077 6.002 8.857C8.181 7.386 9.306 6.643 9.376 6.627C9.426 6.615 9.496 6.601 9.542 6.643C9.589 6.684 9.584 6.763 9.579 6.784C9.549 6.913 8.352 8.025 7.733 8.601C7.54 8.781 7.403 8.908 7.375 8.937C7.31334 9.00001 7.25067 9.06202 7.187 9.123C6.807 9.489 6.523 9.763 7.202 10.211C7.529 10.427 7.791 10.604 8.052 10.782C8.336 10.976 8.62 11.169 8.988 11.411C9.081 11.471 9.171 11.536 9.258 11.598C9.589 11.834 9.888 12.046 10.255 12.012C10.469 11.992 10.69 11.792 10.802 11.192C11.067 9.775 11.588 6.706 11.708 5.441C11.7153 5.33584 11.711 5.2302 11.695 5.126C11.6856 5.04192 11.6449 4.96446 11.581 4.909C11.49 4.84619 11.3815 4.81365 11.271 4.816C10.971 4.821 10.508 4.982 8.287 5.906Z"
									fill="#909DA2" />
							</g>
							<defs>
								<clipPath id="clip0_374_3223">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<span>Telegram:</span>
					</div>
					<a target="_blank" href="https://t.me/russianhouseinhanoi/"
						>https://t.me/russianhousei...</a
					>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
const appStore = useAppStore();
const isEventsCat = computed(() => appStore.selectedNews?.category === 'events');
</script>

<style lang="scss" scoped>
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
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-15px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-from-right-30 {
	from {
		opacity: 0;
		transform: translateX(30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-from-left-30 {
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
		transform: translateX(15px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.content {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 3vw, 40px);
	&__main {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 3vw, 40px);
		font-size: 18px;
		font-weight: 500;
		line-height: 27px;
		color: #73819a;
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-size: 24px;
			font-weight: 700;
			line-height: 32.4px;
			color: #22282b;
		}
		div {
			display: flex;
			flex-direction: column;
			gap: clamp(16px, 2wv, 20px);
		}
	}
	&__bottom {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		border-top: 1px solid rgba(180, 200, 220, 1);
		padding-top: 16px;
		gap: 16px;
		&-item {
			display: flex;
			flex-direction: column;
			gap: 10px;
			font-size: 16px;
			font-weight: 600;
			color: rgba(144, 157, 162, 1);
			a {
				font-size: 18px;
				font-weight: 600;
				letter-spacing: -0.02em;
				color: rgba(3, 77, 145, 1);
				text-decoration: underline;
			}
			&_top {
				display: flex;
				align-items: center;
				gap: 8px;
			}
			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
	&__img {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 776/375;
		height: 100%;
		border-radius: 20px;
		animation: slide-from-bottom 0.5s backwards 0.5s;
	}
}
.wrapper {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 3vw, 40px);
	&__bottom {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: clamp(10px, 2vw, 20px);
		& button:first-child {
			animation-name: slide-from-left-30;
		}
		& button:last-child {
			animation-name: slide-from-right-30;
		}
		& button:first-child,
		& button:last-child {
			animation-duration: 0.5s;
			animation-fill-mode: backwards;
			animation-delay: 0.4s;
		}
	}
	&__button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 13px;
		color: rgba(3, 77, 145, 1);
		padding: 18px 0;
		border: 1px solid currentColor;
		border-radius: 11px;
		transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
		&:hover {
			background-color: rgba(3, 77, 145, 1);
			color: #fff;
			box-shadow: 0 5px 70px 0px rgba(142, 161, 179, 0.8);
		}
		&--primary {
			font-family: var.$font-base;
			letter-spacing: 0;
		}
		svg {
			fill: currentColor;
		}
	}
	&__title {
		font-size: clamp(30px, 4vw, 52px);
		font-weight: 700;
		animation: slide-from-right 0.5s backwards 0.2s;
		&--event {
			font-size: clamp(30px, 3vw, 32px);
		}
	}
	&__top {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 25px);
	}
	&__info {
		display: flex;
		gap: clamp(14px, 2vw, 20px);
		flex-wrap: wrap;
		&-item {
			display: flex;
			align-items: center;
			gap: clamp(14px, 2vw, 20px);
			animation-duration: 0.3s;
			animation-fill-mode: backwards;
			@for $i from 1 through 4 {
				&:nth-child(#{$i}) {
					@if ($i % 2 == 0) {
						animation-name: slide-from-top;
					} @else {
						animation-name: slide-from-bottom;
					}
					animation-delay: $i * 0.1s;
				}
			}
			&:last-of-type::after {
				display: none;
			}
			&::after {
				content: '';
				border-radius: 50%;
				display: block;
				width: 5px;
				height: 5px;
				background-color: rgba(144, 157, 162, 1);
			}
		}
	}
}
</style>
