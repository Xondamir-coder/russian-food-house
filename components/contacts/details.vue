<template>
	<ul class="details">
		<li class="detail">
			<h3 class="detail__label">Email</h3>
			<a class="detail__cta" href="mailto:hello@info.uz">hello@info.uz</a>
		</li>
		<li class="detail">
			<h3 class="detail__label">Номер</h3>
			<a class="detail__cta" href="tel:+998 90 900 09 90">+998 90 900 09 90</a>
		</li>
		<li class="detail">
			<h3 class="detail__label">Адрес</h3>
			<p class="detail__cta">123610, Москва, Краснопресненская наб. 12, подъезд 9</p>
		</li>
		<li class="detail">
			<h3 class="detail__label">Следите за нами</h3>
			<ul class="detail__icons">
				<li class="detail__icon">
					<a href="#">
						<svg class="detail__icon fill-black">
							<use href="~/assets/sprite.svg#instagram" />
						</svg>
					</a>
				</li>
				<li class="detail__icon">
					<a href="#">
						<svg class="detail__icon fill-black">
							<use href="~/assets/sprite.svg#telegram" />
						</svg>
					</a>
				</li>
				<li class="detail__icon">
					<a href="#">
						<svg class="detail__icon fill-black">
							<use href="~/assets/sprite.svg#facebook" />
						</svg>
					</a>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script setup></script>

<style lang="scss" scoped>
@use 'sass:map';
.detail {
	display: flex;
	flex-direction: column;
	gap: 20px;
	@include mix.respond('md') {
		gap: 12px;
	}

	&__icons {
		display: flex;
		gap: 20px;
		align-items: center;
		@include mix.respond('md') {
			gap: 26px;
		}
	}
	&__label {
		font-size: 16px;
		font-weight: 600;
		color: map.get(var.$colors, 'grey');
		@include mix.respond('md') {
			font-size: 18px;
		}
	}
	&__cta {
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 0.02em;
	}
	&__icon {
		width: 26px;
		height: 26px;
		transition: fill 0.3s, transform 0.3s;
		&:hover {
			fill: map.get(var.$colors, 'secondary');
			transform: scale(1.1);
		}
	}
}
.details {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: max(4vw, 16px);
	column-gap: 3vw;

	@include mix.respond('md') {
		grid-template-columns: 1fr;
	}
}
</style>
