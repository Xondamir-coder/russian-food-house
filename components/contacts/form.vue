<template>
	<form class="contacts__form form" @submit.prevent="submitForm">
		<input
			type="text"
			required
			class="contacts__form-input form__input"
			placeholder="Ваше имя"
			v-model="name" />
		<input
			type="email"
			required
			class="contacts__form-input form__input"
			placeholder="Email"
			v-model="email" />
		<textarea
			type="text"
			required
			class="contacts__form-input form__input form__input--textarea resize-none"
			placeholder="Текст"
			v-model="text"></textarea>
		<div class="contacts__form-bottom">
			<ButtonPrimary label="Отправить" class="form__button" type="submit" />
			<p class="contacts__form-text text-grey">
				Нажимая эту кнопку, вы соглашаетесь с Условиями и положениями
			</p>
		</div>
	</form>
</template>

<script setup>
const name = ref('');
const email = ref('');
const text = ref('');

const submitForm = () => {
	console.log(name.value, email.value, text.value);
};
</script>

<style lang="scss" scoped>
.contacts__form {
	background-color: #fff;
	padding: 30px;
	border-radius: 15px;
	border: 1px solid rgba(230, 233, 234, 1);
	margin-left: 9vw;
	@include mix.respond('lg') {
		margin-left: 5vw;
	}
	@include mix.respond('md') {
		margin-left: 0;
		padding: 20px 14px;
	}
	&-bottom {
		display: flex;
		flex-direction: column;
		gap: 20px;
		button {
			align-self: stretch;
		}
	}
	&-input {
		background-color: rgba(243, 245, 246, 1);
	}
	&-text {
		text-align: center;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0.02em;
		text-align: center;
		line-height: 1.5;
		@include mix.respond('md') {
			font-size: 14px;
		}
	}
}
</style>
