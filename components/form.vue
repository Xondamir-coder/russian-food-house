<template>
	<form class="form" @submit.prevent="submitForm">
		<input type="text" required class="form__input" placeholder="Ваше имя" v-model="name" />
		<input
			type="tel"
			required
			class="form__input"
			placeholder="Номер телефона"
			v-model="tel"
			@focus="giveInitialTel"
			@input="formatTel" />
		<input type="email" required class="form__input" placeholder="Email" v-model="email" />
		<textarea
			type="text"
			required
			class="form__input form__input--textarea resize-none"
			placeholder="Текст"
			v-model="text"></textarea>
		<div class="form__bottom">
			<ButtonPrimary label="Отправить" class="form__button" type="submit" />
			<p class="form__text text-grey">
				Я ознакомился и согласен с
				<strong class="text-black"
					>правилами использования персональных данных пользователя</strong
				>
			</p>
		</div>
	</form>
</template>

<script setup>
const name = ref('');
const tel = ref('');
const email = ref('');
const text = ref('');

const submitForm = () => {
	console.log(name.value, tel.value, email.value, text.value);
};
const formatTel = () => {
	tel.value = tel.value.replace(/\D/g, '');

	// If the user deletes everything, return an empty string
	if (tel.value.length === 0) {
		return '';
	}

	// Add +7 if there are any digits, but let user delete it
	let formatted = tel.value.startsWith('7') ? '+7 ' : '';

	// Format according to the pattern +7 (###) ###-##-##
	if (tel.value.length > 1) {
		formatted += '(' + tel.value.substring(1, 4);
	}
	if (tel.value.length >= 5) {
		formatted += ') ' + tel.value.substring(4, 7);
	}
	if (tel.value.length >= 8) {
		formatted += '-' + tel.value.substring(7, 9);
	}
	if (tel.value.length >= 10) {
		formatted += '-' + tel.value.substring(9, 11);
	}

	tel.value = formatted;
};
const giveInitialTel = () => (tel.value = '+7');
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	gap: 20px;

	&__bottom {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: clamp(16px, 2vw, 30px);
		@include mix.respond('md') {
			grid-template-columns: auto;
		}
	}
	&__text {
		font-size: 14px;
		font-weight: 700;
	}
	&__input {
		padding: 18px 25px;
		border-radius: 11px;
		&--textarea {
			min-height: 116px;
		}
		&::placeholder {
			opacity: 0.7;
		}
	}
}
</style>
