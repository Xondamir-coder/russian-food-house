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
	// Using composables
	const { CATEGORIES_URL, PRODUCTS_URL, SERVICES_URL, NEWS_URL, CHEFS_URL } = useURL();

	const FETCH_THRESHOLDS = {
		categories: 30 * 60 * 1000, // 30 minutes
		products: 15 * 60 * 1000, // 15 minutes
		services: 60 * 60 * 1000, // 1 hour
		news: 10 * 60 * 1000, // 10 minutes
		recipesCategories: 60 * 60 * 1000, // 1 hour
		chefs: 60 * 60 * 1000 // 1 hour
	};
	const lastFetched = {
		categories: null,
		products: null,
		services: null,
		news: null,
		recipesCategories: null,
		chefs: null
	};

	// Core fetcher
	const fetchData = async (url, { extractData = false, query = {} } = {}) => {
		const { data } = await useFetch(url, { query });
		return extractData ? data.value?.data : data.value;
	};

	// Fetchers with threshold
	const fetchWithDynamicThreshold = async (
		url,
		target,
		key,
		{ extractData = false, query = {} } = {}
	) => {
		const currentTime = Date.now();
		const lastFetchedTime = lastFetched[key];
		const threshold = FETCH_THRESHOLDS[key];

		if (lastFetchedTime && currentTime - lastFetchedTime < threshold) return;

		target.value = await fetchData(url, { extractData, query });
		lastFetched[key] = currentTime;
	};

	// Pages
	const pages = ref({
		news: 1
	});

	// Selectables
	const selectedProduct = ref(productPlaceholder);
	const selectedNews = ref(newsPlaceholder);

	// Fetched data
	const news = ref([newsPlaceholder]);
	const categories = ref([categoryPlaceholder]);
	const products = ref([productPlaceholder]);
	const services = ref([servicePlaceholder]);

	const fetchCategories = () =>
		fetchWithDynamicThreshold(CATEGORIES_URL, categories, 'categories');
	const fetchServices = () =>
		fetchWithDynamicThreshold(SERVICES_URL, services, 'services', { extractData: true });
	const fetchNews = () =>
		fetchWithDynamicThreshold(NEWS_URL, news, 'news', {
			extractData: true,
			query: { take: 12 }
		});

	// Fetch single items
	const fetchOneNews = async routeTitle =>
		(selectedNews.value = await fetchData(`${NEWS_URL}/${routeTitle}`));
	const fetchOneProduct = async routeTitle =>
		(selectedProduct.value = await fetchData(`${PRODUCTS_URL}/${routeTitle}`));

	// Fetch and append additional data
	const fetchNextItems = async (url, target, query) => {
		const data = await fetchData(url, { query, extractData: true });
		if (data) target.value.push(...data);
	};

	const fetchNextNews = query => fetchNextItems(NEWS_URL, news, query);
	const fetchNextProducts = query => fetchNextItems(PRODUCTS_URL, products, query);

	// Query-based product fetching
	const fetchProductsByQuery = async query =>
		(products.value = await fetchData(PRODUCTS_URL, { extractData: true, query }));

	// Selectors
	const selectProduct = newProduct => (selectedProduct.value = newProduct);
	const selectNews = newNews => (selectedNews.value = newNews);
	const selectService = newService => (selectedService.value = newService);

	return {
		pages,
		news,
		categories,
		products,
		services,
		selectedProduct,
		selectedNews,
		selectNews,
		selectProduct,
		selectService,
		fetchCategories,
		fetchServices,
		fetchNews,
		fetchOneNews,
		fetchOneProduct,
		fetchNextNews,
		fetchNextProducts,
		fetchProductsByQuery
	};
});
