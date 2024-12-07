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
	const FETCH_THRESHOLDS = {
		categories: 30 * 60 * 1000, // 30 minutes
		products: 15 * 60 * 1000, // 15 minutes
		services: 60 * 60 * 1000, // 1 hour
		news: 10 * 60 * 1000 // 10 minutes
	};
	const lastFetched = {
		categories: null,
		products: null,
		services: null,
		news: null
	};

	// Selectables
	const selectedProduct = ref(productPlaceholder);
	const selectedNews = ref(newsPlaceholder);

	// Fetched data
	const news = ref([newsPlaceholder]);
	const categories = ref([categoryPlaceholder]);
	const products = ref([productPlaceholder]);
	const services = ref([servicePlaceholder]);

	// Fetchers
	const fetchCategories = () =>
		fetchWithDynamicThreshold(CATEGORIES_URL, categories, 'categories');
	const fetchProducts = () => fetchWithDynamicThreshold(PRODUCTS_URL, products, 'products', true);
	const fetchServices = () => fetchWithDynamicThreshold(SERVICES_URL, services, 'services', true);
	const fetchNews = () => fetchWithDynamicThreshold(NEWS_URL, news, 'news', true);
	const fetchOneNews = async routeTitle =>
		(selectedNews.value = await fetchData(`${NEWS_URL}/${routeTitle}`));
	const fetchOneProduct = async routeTitle =>
		(selectedProduct.value = await fetchData(`${PRODUCTS_URL}/${routeTitle}`));
	const fetchNextNews = async query => await fetchNextItems(NEWS_URL, news, query);
	const fetchNextProducts = async query => await fetchNextItems(PRODUCTS_URL, products, query);

	// Selectors
	const selectProduct = newProduct => (selectedProduct.value = newProduct);
	const selectNews = newNews => (selectedNews.value = newNews);

	/**
	 * Fetches data from a given URL with optional query parameters.
	 *
	 * @param {string} url - The URL to fetch data from.
	 * @param {boolean} [extractData=false] - Flag indicating whether to extract the 'data' field from the response.
	 * @param {object} [query] - Optional query parameters to include in the request.
	 * @returns {Promise<object>} - The fetched data, either the entire response or the 'data' field.
	 */
	const fetchData = async (url, extractData = false, query) => {
		const { data } = await useFetch(url, { query });
		if (extractData) return data.value.data;
		return data.value;
	};

	/**
	 * Fetches data from a given URL and updates the target ref if the dynamic threshold is met.
	 *
	 * @param {string} url - The URL to fetch data from.
	 * @param {object} target - The ref object to update with fetched data.
	 * @param {string} key - The key used for threshold and last fetched tracking.
	 * @param {boolean} [extractData=false] - Flag indicating whether to extract the 'data' field from the response.
	 * @returns {Promise<void>} - Resolves with no value if the fetch is skipped or completes.
	 */

	const fetchWithDynamicThreshold = async (url, target, key, extractData = false) => {
		const currentTime = new Date(); // Get the current time
		const lastFetchedTime = lastFetched[key]; // Retrieve the last fetched time for the given key
		const threshold = FETCH_THRESHOLDS[key]; // Retrieve the threshold time for the given key

		// If data was fetched recently within the threshold, skip fetching
		if (lastFetchedTime && currentTime - lastFetchedTime < threshold) {
			return;
		}

		// Fetch and update the target data, then record the fetch time
		target.value = await fetchData(url, extractData);
		lastFetched[key] = currentTime; // Update the last fetched time
	};

	/**
	 * Fetches additional items from a given URL and appends them to the target ref.
	 *
	 * @param {string} url - The URL to fetch data from.
	 * @param {object} target - The ref object to update with fetched data.
	 * @param {object} query - Optional query parameters to include in the request.
	 * @returns {Promise<void>} - Resolves with no value if no additional data is fetched.
	 */
	const fetchNextItems = async (url, target, query) => {
		// Fetch data from the given URL with the provided query parameters
		const { data } = await $fetch(url, { query });

		// If no data is returned, exit the function
		if (!data?.data?.length) return;

		// Append the fetched data to the target ref
		target.value.push(...data.value.data);
	};

	return {
		news,
		categories,
		products,
		services,
		selectedProduct,
		selectedNews,
		selectNews,
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
