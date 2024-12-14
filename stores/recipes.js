const chefPlaceholder = {
	id: 0,
	uuid: '',
	meta_title: '',
	meta_description: '',
	meta_keywords: '',
	image: '',
	name: '',
	name_slug: '',
	created_at: '',
	updated_at: ''
};
const categoryPlaceholder = {
	id: 0,
	uuid: '',
	title: '',
	body: '',
	image: '',
	cheaf: 0,
	created_at: '',
	type: '',
	updated_at: ''
};
const subCategoryPlaceholder = {
	productType: [
		{
			id: 0,
			uuid: '',
			title: '',
			created_at: '',
			updated_at: ''
		}
	],
	mealType: [
		{
			id: 0,
			uuid: '',
			title: '',
			created_at: '',
			updated_at: ''
		}
	],
	dietType: [
		{
			id: 0,
			uuid: '',
			title: '',
			created_at: '',
			updated_at: ''
		}
	]
};
const recipePlaceholder = {
	id: 0,
	uuid: '',
	meta_title: '',
	meta_description: '',
	meta_keywords: '',
	title: '',
	image: '',
	body: '',
	title_slug: '',
	recipe_categories_uuid: '',
	recipe_meal_types_uuid: '',
	recipe_product_types_uuid: '',
	recipe_diet_types_uuid: '',
	created_at: '',
	updated_at: '',
	recipe_category: {
		id: 0,
		uuid: '',
		title: '',
		body: '',
		image: '',
		cheaf: 0,
		created_at: '',
		updated_at: ''
	},
	recipe_meal_type: {
		id: 0,
		uuid: '',
		title: '',
		created_at: '',
		updated_at: ''
	},
	recipe_product_type: {
		id: 0,
		uuid: '',
		title: '',
		created_at: '',
		updated_at: ''
	},
	recipe_diet_type: {
		id: 0,
		uuid: '',
		title: '',
		created_at: '',
		updated_at: ''
	}
};

export const useRecipesStore = defineStore('recipes', () => {
	// Static data
	const {
		RECIPES_CATEGORIES_URL,
		RECIPES_SUBCATEGORIES_URL,
		RECIPES_URL,
		CHEFS_URL,
		CHEFS_INDEX_URL
	} = useURL();
	const FETCH_THRESHOLDS = {
		categories: 60 * 60 * 1000, // 1 hour
		chefs: 60 * 60 * 1000, // 1 hour
		subCategories: 60 * 60 * 1000
	};
	const lastFetched = {
		categories: null,
		chefs: null,
		subCategories: null
	};

	// Selectables
	const selectedChef = ref(chefPlaceholder);
	const selectedSubCategories = ref();
	const selectedRecipe = ref(recipePlaceholder);

	// Selectors
	const selectChef = chef => (selectedChef.value = chef);
	const selectSubCategories = subCategories => (selectedSubCategories.value = subCategories);
	const selectRecipe = recipe => (selectedRecipe.value = recipe);

	// Fetched data
	const chefs = ref([chefPlaceholder]);
	const categories = ref([categoryPlaceholder]);
	const subCategories = ref([subCategoryPlaceholder]);
	const recipes = ref([recipePlaceholder]);
	const chefRecipes = ref([recipePlaceholder]);

	// Page
	const recipePage = ref(1);

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

	// Fetchers
	const fetchCategories = () =>
		fetchWithDynamicThreshold(RECIPES_CATEGORIES_URL, categories, 'categories');
	const fetchChefs = () => fetchWithDynamicThreshold(CHEFS_URL, chefs, 'chefs');
	const fetchSubCategories = () =>
		fetchWithDynamicThreshold(RECIPES_SUBCATEGORIES_URL, subCategories, 'subCategories');
	const fetchRecipes = async (queries = {}) => {
		recipes.value = await fetchData(RECIPES_URL, {
			extractData: true,
			query: { take: 18, ...queries }
		});
	};
	const fetchChefRecipes = async routeTitle => {
		chefRecipes.value = await fetchData(`${CHEFS_URL}/${routeTitle}`, {
			extractData: true,
			query: { take: 6 }
		});
	};
	const fetchOneChef = async routeTitle =>
		(selectedChef.value = await fetchData(`${CHEFS_INDEX_URL}/${routeTitle}`));
	const fetchOneRecipe = async routeTitle =>
		(selectedRecipe.value = await fetchData(`${RECIPES_URL}/${routeTitle}`));

	return {
		chefs,
		categories,
		subCategories,
		recipes,
		recipePage,
		chefRecipes,
		selectedChef,
		selectedRecipe,
		selectedSubCategories,
		selectChef,
		selectRecipe,
		selectSubCategories,
		fetchCategories,
		fetchChefs,
		fetchSubCategories,
		fetchRecipes,
		fetchChefs,
		fetchOneChef,
		fetchOneRecipe,
		fetchChefRecipes
	};
});
