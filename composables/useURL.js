export default () => {
	const BASE_URL = 'https://rfh.spacelabs.uz/api/v1/front';
	const CATEGORIES_URL = `${BASE_URL}/categories`;
	const PRODUCTS_URL = `${BASE_URL}/products`;
	const SERVICES_URL = `${BASE_URL}/services`;
	const FAQS_URL = `${BASE_URL}/faqs`;
	const EVENTS_URL = `${BASE_URL}/events`;
	const NEWS_URL = `${BASE_URL}/news`;
	const REGIONS_URL = `${BASE_URL}/regions-map`;

	return {
		BASE_URL,
		CATEGORIES_URL,
		PRODUCTS_URL,
		SERVICES_URL,
		FAQS_URL,
		EVENTS_URL,
		NEWS_URL,
		REGIONS_URL
	};
};
