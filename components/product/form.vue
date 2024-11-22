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

	let formatted = '+998';

	if (tel.value.length > 3) {
		formatted += ' (' + tel.value.substring(3, 5); // Add the first two digits inside parentheses
	}
	if (tel.value.length >= 6) {
		formatted += ') ' + tel.value.substring(5, 8); // Add the next three digits after parentheses
	}
	if (tel.value.length >= 9) {
		formatted += '-' + tel.value.substring(8, 10); // Add the next two digits with a hyphen
	}
	if (tel.value.length >= 11) {
		formatted += '-' + tel.value.substring(10, 12); // Add the last two digits with another hyphen
	}

	tel.value = formatted;
};
const giveInitialTel = () => (tel.value = '+998');
</script>

<style lang="scss" scoped></style>
