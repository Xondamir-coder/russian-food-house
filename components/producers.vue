<template>
	<section class="producers section-padding">
		<h2 class="section-title">Производители</h2>
		<div class="producers__wrapper">
			<svg class="producers__sprinkles">
				<use href="~/assets/sprite.svg#sprinkles" />
			</svg>
			<ul class="producers__list">
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#nestle" />
					</svg>
				</li>
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#softcom" />
					</svg>
				</li>
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#bolt" />
					</svg>
				</li>
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#talentql" />
					</svg>
				</li>
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#checkdc" />
					</svg>
				</li>
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#fliqpay" />
					</svg>
				</li>
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#gidimo" />
					</svg>
				</li>
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#mono" />
					</svg>
				</li>
				<li class="producers__item">
					<svg class="producers__item-icon">
						<use href="~/assets/sprite.svg#smile" />
					</svg>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.producers {
	display: flex;
	flex-direction: column;
	gap: max(3vw, 20px);
	h2 {
		z-index: 4;
	}
	&__sprinkles {
		width: 70%;
		aspect-ratio: 1;
		fill: rgb(188, 203, 217);
		opacity: 0.2;
		position: absolute;
		// left: 50%;
		// top: 50%;
		// transform: translate(-50%, -50%);
		place-self: center;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(6, 1fr);
		gap: 1.5rem;
		z-index: 2;
		@include mix.respond('md') {
			grid-template-columns: repeat(9, 188px);
			grid-template-rows: auto;
			overflow-x: auto;
			gap: 10px;
			scroll-snap-type: x mandatory;
			// hide scrollbar in every browser
			&::-webkit-scrollbar {
				display: none;
			}
			& {
				-ms-overflow-style: none; /* IE and Edge */
				scrollbar-width: none; /* Firefox */
			}
		}
	}
	&__wrapper {
		display: grid;
		position: relative;
	}
	&__item {
		background-color: #fff;
		border: 1px solid rgba(230, 233, 234, 1);
		border-radius: 15px;
		display: grid;
		place-items: center;
		grid-row: span 2;
		aspect-ratio: 206.83/ 120.33;
		@include mix.respond('md') {
			grid-column: auto !important;
			scroll-snap-align: start;
		}
		&:first-child,
		&:last-child {
			grid-column: 3/4;
		}
		&:nth-child(2) {
			grid-column: 2/3;
		}
		&:nth-child(4) {
			grid-column: 1/2;
		}
		&-icon {
			width: 70%;
			aspect-ratio: 158 / 47;
		}
	}
}
</style>
