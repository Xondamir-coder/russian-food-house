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
	tags: [
		{
			id: 0,
			name: '',
			created_at: '',
			updated_at: '',
			pivot: {
				news_id: 0,
				tag_id: 0
			}
		}
	]
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
	const fetchCategories = async () => await fetchData(categories, CATEGORIES_URL);
	const fetchProducts = async () => {
		const { data } = await useFetch(PRODUCTS_URL);
		products.value = data.value.data;
		console.log(data);
	};
	const fetchServices = async () => await fetchData(services, SERVICES_URL);
	const fetchNews = async () => await fetchData(news, NEWS_URL);
	const fetchOneNews = async routeId => await fetchData(selectedNews, `${NEWS_URL}/${routeId}`);
	const fetchOneProduct = async routeId =>
		await fetchData(selectedProduct, `${PRODUCTS_URL}/${routeId}`);

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
	const fetchData = async (ref, url) => {
		const { data } = await useFetch(url);
		ref.value = data.value;
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
		fetchOneProduct
	};
});
