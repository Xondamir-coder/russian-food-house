// Placeholder
const faqPlaceholder = {
	id: 0, // or 0 if numeric IDs are used
	uuid: '',
	question: '',
	answer: '',
	category: '',
	order: 0, // or 0 if numeric orders are used
	created_at: '', // or "" if you prefer an empty string
	updated_at: '' // or "" if you prefer an empty string
};

export const useFaqsStore = defineStore('faqs', () => {
	const { FAQS_URL } = useURL();

	const faqs = ref([faqPlaceholder]);
	const activeCategory = ref('');

	const fetchFaqs = async () => {
		const { data } = await useFetch(FAQS_URL);
		faqs.value = data.value;
	};
	const changeCategory = name => {
		activeCategory.value = name;
	};

	return {
		faqs,
		activeCategory,
		fetchFaqs,
		changeCategory
	};
});
