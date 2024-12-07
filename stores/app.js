import { defineStore } from 'pinia';

// Placeholders for easy debugging & intellisense
const categoryPlaceholder = {
	id: 0,
	uuid: '',
	name: '',
	image: '',
	created_at: '',
	updated_at: ''
};
const productPlaceholder = {
	id: 0,
	uuid: '',
	meta_title: '',
	meta_description: '',
	meta_keywords: '',
	title: '',
	title_slug: '',
	content: '',
	body: '',
	weight: 0,
	packing: '',
	type: '',
	images: '',
	manufacturer_id: 0,
	country_import_id: 0,
	country_made_in_id: 0,
	category_id: 0,
	created_at: '',
	updated_at: '',
	manufacturer: {},
	country_import: {},
	country_made_in: {},
	category: {}
};
const newsPlaceholder = {
	id: 0, // or 0 if numeric IDs are used
	uuid: '',
	meta_title: '',
	meta_description: '',
	meta_keywords: '',
	title: '',
	title_slug: '',
	image: '',
	body: '',
	type: '',
	category: '',
	created_at: '',
	updated_at: '',
	tags: []
};
const servicePlaceholder = {
	id: 0,
	uuid: '',
	meta_title: '',
	meta_description: '',
	meta_keywords: '',
	title: '',
	title_slug: '',
	body: '',
	image: '',
	created_at: '',
	updated_at: ''
};

export const useAppStore = defineStore('app', () => {
	// Static data
	const { CATEGORIES_URL, PRODUCTS_URL, SERVICES_URL, NEWS_URL } = useURL();

	// Selectables
	const selectedCategory = ref(categoryPlaceholder);
	const selectedProduct = ref(productPlaceholder);
	const selectedNews = ref(newsPlaceholder);

	// Fetched data
	const news = ref([newsPlaceholder]);
	const categories = ref([categoryPlaceholder]);
	const products = ref([productPlaceholder]);
	const services = ref([servicePlaceholder]);

	// Fetchers
	const fetchCategories = async () => {
		categories.value = await fetchData(CATEGORIES_URL);
	};
	const fetchProducts = async () => {
		products.value = await fetchData(PRODUCTS_URL, true);
	};
	const fetchServices = async () => {
		services.value = await fetchData(SERVICES_URL);
	};
	const fetchNews = async () => {
		news.value = await fetchData(NEWS_URL, true);
	};
	const fetchOneNews = async routeTitle => {
		selectedNews.value = await fetchData(`${NEWS_URL}/${routeTitle}`);
	};
	const fetchOneProduct = async routeTitle => {
		selectedProduct.value = await fetchData(`${PRODUCTS_URL}/${routeTitle}`);
	};
	const fetchNextNews = async query => {
		const nextItems = await fetchData(NEWS_URL, true, query);
		news.value.push(...nextItems);
	};
	const fetchNextProducts = async query => {
		const nextItems = await fetchData(PRODUCTS_URL, true, query);
		products.value.push(...nextItems);
	};

	// Selectors
	const selectCategory = category => {
		selectedCategory.value = category;
	};
	const selectProduct = newProduct => {
		selectedProduct.value = newProduct;
	};
	const selectNews = newNews => {
		selectedNews.value = newNews;
	};

	// Helpers
	const fetchData = async (url, extractData = false, query) => {
		const { data } = await useFetch(url, { query });
		if (extractData) return data.value.data;
		return data.value;
	};

	return {
		news,
		categories,
		products,
		services,
		selectedCategory,
		selectedProduct,
		selectedNews,
		selectNews,
		selectCategory,
		selectProduct,
		fetchCategories,
		fetchProducts,
		fetchServices,
		fetchNews,
		fetchOneNews,
		fetchOneProduct,
		fetchNextNews,
		fetchNextProducts
	};
});
