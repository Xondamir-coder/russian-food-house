const BASE_URL = 'https://rfh.spacelabs.uz/api/v1/front';

export default () => {
	const CATEGORIES_URL = `${BASE_URL}/categories`;
	const PRODUCTS_URL = `${BASE_URL}/products`;
	const SERVICES_URL = `${BASE_URL}/services`;
	const FAQS_URL = `${BASE_URL}/faqs`;
	const NEWS_URL = `${BASE_URL}/news`;
	const REGIONS_URL = `${BASE_URL}/regions-map`;
	const FORM_URL = `${BASE_URL}/form/submit`;

	return {
		FORM_URL,
		CATEGORIES_URL,
		PRODUCTS_URL,
		SERVICES_URL,
		FAQS_URL,
		NEWS_URL,
		REGIONS_URL
	};
};
