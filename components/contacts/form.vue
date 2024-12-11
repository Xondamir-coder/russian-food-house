<template>
	<form class="contacts__form-container" @submit.prevent="submitForm">
		<div class="contacts__form form" v-if="!isSent">
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
		</div>
		<div class="contacts__form-bottom" v-if="!isSent">
			<ButtonPrimary
				:label="isSending ? 'Отправка...' : 'Отправить'"
				class="contacts__form-button"
				type="submit"
				:is-gilroy="true"
				:use-icon="!isSending ? true : false" />
			<p class="contacts__form-text text-grey">
				Нажимая эту кнопку, вы соглашаетесь с Условиями и положениями
			</p>
		</div>
		<div class="contacts__form-success" v-if="isSent">
			<svg class="contacts__form-icon">
				<use href="~/assets/sprite.svg#success" />
			</svg>
			<h3>
				Ваш запрос был <br />
				успешно отправлен
			</h3>
			<p>Ценовая стратегия деятельно искажает ролевой пул лояльных изданий</p>
		</div>
	</form>
</template>

<script setup>
const name = ref('');
const email = ref('');
const text = ref('');

const isSending = ref(false);
const isSent = ref(false);
const { FORM_URL } = useURL();
const TIMEOUT = 3000;

const submitForm = async () => {
	isSending.value = true;
	try {
		const res = await $fetch(FORM_URL, {
			method: 'POST',
			body: {
				name: name.value,
				email: email.value,
				message: text.value,
				type: 'contact_page'
			}
		});
		isSent.value = true;
	} catch (error) {
		console.log(error);
	} finally {
		isSending.value = false;
		name.value = '';
		email.value = '';
		text.value = '';
		setTimeout(() => {
			isSent.value = false;
		}, TIMEOUT);
	}
};
</script>

<style lang="scss" scoped>
.contacts__form {
	// display: none;
	&-container {
		background-color: #fff;
		padding: 30px;
		border-radius: 15px;
		border: 1px solid rgba(230, 233, 234, 1);
		margin-left: 9vw;
		box-shadow: 0px 52px 100px 0px #8ea1b399;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	@include mix.respond('lg') {
		margin-left: 5vw;
	}
	@include mix.respond('md') {
		margin-left: 0;
		padding: 20px 14px;
	}
	&-button {
		font-family: var.$font-base;
		letter-spacing: 0;
	}
	&-icon {
		width: 118px;
		aspect-ratio: 1;
	}
	&-success {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
		h3 {
			font-size: 24px;
			font-weight: 700;
			line-height: 28.8px;
			text-align: center;
		}
		p {
			font-size: 18px;
			font-weight: 500;
			line-height: 25.2px;
			letter-spacing: 0.02em;
			text-align: center;
		}
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
