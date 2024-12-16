export default () => {
	const DOMAIN_URL = 'https://rfh.spacelabs.uz';
	const BASE_URL = `${DOMAIN_URL}/api/v1/front`;
	const CATEGORIES_URL = `${BASE_URL}/categories`;
	const PRODUCTS_URL = `${BASE_URL}/products`;
	const SERVICES_URL = `${BASE_URL}/services`;
	const FAQS_URL = `${BASE_URL}/faqs`;
	const NEWS_URL = `${BASE_URL}/news`;
	const REGIONS_URL = `${BASE_URL}/regions-map`;
	const FORM_URL = `${BASE_URL}/form/submit`;
	const CHEFS_URL = `${BASE_URL}/chefs`;
	const CHEFS_INDEX_URL = `${BASE_URL}/chefsIndex`;
	const RECIPES_CATEGORIES_URL = `${BASE_URL}/recipes-categories`;
	const RECIPES_SUBCATEGORIES_URL = `${BASE_URL}/recipes-subCategories`;
	const RECIPES_URL = `${BASE_URL}/recipes`;
	const SEARCH_URL = `${BASE_URL}/search`;

	return {
		DOMAIN_URL,
		FORM_URL,
		CATEGORIES_URL,
		PRODUCTS_URL,
		SERVICES_URL,
		FAQS_URL,
		NEWS_URL,
		REGIONS_URL,
		CHEFS_URL,
		RECIPES_CATEGORIES_URL,
		RECIPES_SUBCATEGORIES_URL,
		RECIPES_URL,
		CHEFS_URL,
		CHEFS_INDEX_URL,
		SEARCH_URL
	};
};
