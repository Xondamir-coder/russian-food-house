<template>
	<main class="contacts">
		<ContactsForm class="contacts__form" />
		<ContactsDetails class="contacts__details" />
		<div class="contacts__img"></div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes slide-in-from-bottom {
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.contacts {
	display: grid;
	padding-top: 30px;
	grid-auto-rows: 160px;
	column-gap: 4vw;
	grid-template-columns: 1.5fr 2fr;

	@include mix.respond('md') {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding-top: 0;
		& > *:not(.contacts__img) {
			margin: 0 2vw;
		}
	}
	@include mix.respond('sm') {
		margin-top: 16px;
		& > *:not(.contacts__img) {
			margin: 0 10px;
		}
	}
	& > * {
		animation: slide-in-from-bottom 0.5s backwards;
	}
	@for $i from 1 through 3 {
		& > *:nth-child(#{$i}) {
			animation-delay: #{$i * 0.15}s;
		}
	}
	&__form {
		z-index: 2;
		grid-column: 1/2;
		grid-row: 1 / 4;
		@include mix.respond('md') {
			margin-top: -70px !important;
			margin-left: 10px !important;
			margin-right: 10px !important;
			transform: translateY(70px);
		}
	}
	&__details {
		grid-column: 2/3;
		grid-row: 1 / 2;
		@include mix.respond('md') {
			order: -1;
		}
	}

	&__img {
		background-image: url('/img/map.jpg');
		background-size: cover;
		background-position: center;
		grid-column: 1 / -1;
		grid-row: 3 / 6;
		@include mix.respond('md') {
			height: 402px;
			background-position: 90% 50%;
		}
		@include mix.respond('sm') {
			height: 402px;
			background-position: 80% 50%;
		}
	}
}
</style>
