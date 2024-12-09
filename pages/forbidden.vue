<template>
	<Errorwrapper
		:code="403"
		message="Forbidden"
		text="доступ к этому ресурсу на сервере запрещен" />
</template>

<script setup>
definePageMeta({
	layout: false
});
</script>
