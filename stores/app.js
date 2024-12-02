import { defineStore } from 'pinia';

const testNews = [
	{
		image: '/img/news-1.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-11-29T13:56:01.000000Z',
		id: 1
	},
	{
		image: '/img/news-2.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-12-02T16:28:28.592Z',
		id: 2
	},
	{
		image: '/img/news-3.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-11-29T13:56:01.000000Z',
		id: 3
	},
	{
		image: '/img/news-1.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-11-29T13:56:01.000000Z',
		id: 4
	},
	{
		image: '/img/news-2.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-12-02T16:28:28.592Z',
		id: 5
	},
	{
		image: '/img/news-3.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-11-29T13:56:01.000000Z',
		id: 6
	},
	{
		image: '/img/news-1.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-11-29T13:56:01.000000Z',
		id: 7
	},
	{
		image: '/img/news-2.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-12-02T16:28:28.592Z',
		id: 8
	},
	{
		image: '/img/news-3.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-11-29T13:56:01.000000Z',
		id: 9
	},
	{
		image: '/img/news-1.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-11-29T13:56:01.000000Z',
		id: 10
	},
	{
		image: '/img/news-2.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-12-02T16:28:28.592Z',
		id: 11
	},
	{
		image: '/img/news-3.jpg',
		type: 'Интересно',
		meta_title:
			'Nibh blandit non penatibus potenti odio quisque sed nulla at sapien pellentesque',
		updatedAt: '2024-11-29T13:56:01.000000Z',
		id: 12
	}
];
const testProducts = [
	{
		id: 'NPLIV7',
		img: '/img/product-2.webp',
		title: '«Славянка-торг»',
		desc: '"Обыкновенное чудо", 55 г с кремом',
		type: 'Новинки',
		place: 'Al Wasl Road, Аль-Бадаа, 285C',
		region: 'Россия',
		group: 'Конфеты',
		importCountries: 'ОАЭ',
		packaging: 'штук',
		weight: '55 грамм',
		producer: '«Славянка-торг»'
	},
	{
		id: 'PN2ZQF',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Хит продаж',
		place: 'Jumeirah Beach Road, Дубай, 112A',
		region: 'Казахстан',
		group: 'Снеки',
		importCountries: 'Катар',
		packaging: 'пакеты',
		weight: '100 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'LQXW7Z',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Популярные',
		place: 'Sheikh Zayed Road, Дубай, 201B',
		region: 'Узбекистан',
		group: 'Орехи',
		importCountries: 'Саудовская Аравия',
		packaging: 'банки',
		weight: '200 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'TWD3ZX',
		img: '/img/product-2.webp',
		title: '«Славянка-торг»',
		desc: '"Обыкновенное чудо", 55 г с кремом',
		type: 'Хит продаж',
		place: 'Al Maktoum Road, Шарджа, 119C',
		region: 'Россия',
		group: 'Конфеты',
		importCountries: 'Бахрейн',
		packaging: 'коробки',
		weight: '75 грамм',
		producer: '«Славянка-торг»'
	},
	{
		id: 'KP7YQJ',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Хит продаж',
		place: 'Al Mamzar Road, Аджман, 331D',
		region: 'Киргизия',
		group: 'Снеки',
		importCountries: 'Оман',
		packaging: 'пакеты',
		weight: '300 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'GQ8WYN',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Хит продаж',
		place: 'Corniche Road, Абу-Даби, 502E',
		region: 'Беларусь',
		group: 'Орехи',
		importCountries: 'Египет',
		packaging: 'контейнеры',
		weight: '500 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'YHZ3QP',
		img: '/img/product-2.webp',
		title: '«Славянка-торг»',
		desc: '"Обыкновенное чудо", 55 г с кремом',
		type: 'Популярные',
		place: 'Business Bay, Дубай, 732F',
		region: 'Россия',
		group: 'Конфеты',
		importCountries: 'Иордания',
		packaging: 'штук',
		weight: '55 грамм',
		producer: '«Славянка-торг»'
	},
	{
		id: 'MRTJ4F',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Хит продаж',
		place: 'Al Barsha Road, Дубай, 401G',
		region: 'Туркменистан',
		group: 'Снеки',
		importCountries: 'Марокко',
		packaging: 'пакеты',
		weight: '150 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'PWL7XZ',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Популярные',
		place: 'Al Karama Road, Дубай, 120H',
		region: 'Таджикистан',
		group: 'Орехи',
		importCountries: 'Турция',
		packaging: 'банки',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'ZX7KQP',
		img: '/img/product-2.webp',
		title: '«Славянка-торг»',
		desc: '"Обыкновенное чудо", 55 г с кремом',
		type: 'Новинки',
		place: 'Downtown Dubai, Дубай, 210I',
		region: 'Россия',
		group: 'Конфеты',
		importCountries: 'Сирия',
		packaging: 'коробки',
		weight: '100 грамм',
		producer: '«Славянка-торг»'
	},
	{
		id: 'HZX3JQ',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Популярные',
		place: 'Dubai Marina, Дубай, 155J',
		region: 'Кыргызстан',
		group: 'Снеки',
		importCountries: 'Ливан',
		packaging: 'пакеты',
		weight: '350 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'YWP3LZ',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Популярные',
		place: 'City Walk, Дубай, 789K',
		region: 'Казахстан',
		group: 'Орехи',
		importCountries: 'Йемен',
		packaging: 'контейнеры',
		weight: '400 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'NRZJ6X',
		img: '/img/product-2.webp',
		title: '«Славянка-торг»',
		desc: '"Обыкновенное чудо", 55 г с кремом',
		type: 'Хит продаж',
		place: 'Al Safa, Дубай, 440L',
		region: 'Россия',
		group: 'Конфеты',
		importCountries: 'Иран',
		packaging: 'коробки',
		weight: '75 грамм',
		producer: '«Славянка-торг»'
	},
	{
		id: 'KWP3JZ',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Новинки',
		place: 'Jumeirah Lake Towers, Дубай, 300M',
		region: 'Беларусь',
		group: 'Снеки',
		importCountries: 'Кувейт',
		packaging: 'пакеты',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'ZXPL9Q',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Новинки',
		place: 'Jumeirah Lake Towers, Дубай, 300M',
		region: 'Беларусь',
		group: 'Снеки',
		importCountries: 'Кувейт',
		packaging: 'пакеты',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'YWJZ4Q',
		img: '/img/product-2.webp',
		title: '«Славянка-торг»',
		desc: '"Обыкновенное чудо", 55 г с кремом',
		type: 'Новинки',
		place: 'Jumeirah Lake Towers, Дубай, 300M',
		region: 'Беларусь',
		group: 'Снеки',
		importCountries: 'Кувейт',
		packaging: 'пакеты',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'MRPL3X',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Хит продаж',
		place: 'Jumeirah Lake Towers, Дубай, 300M',
		region: 'Беларусь',
		group: 'Снеки',
		importCountries: 'Кувейт',
		packaging: 'пакеты',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'GWT7LJ',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Популярные',
		place: 'Jumeirah Lake Towers, Дубай, 300M',
		region: 'Беларусь',
		group: 'Снеки',
		importCountries: 'Кувейт',
		packaging: 'пакеты',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'PZW9KX',
		img: '/img/product-2.webp',
		title: '«Славянка-торг»',
		desc: '"Обыкновенное чудо", 55 г с кремом',
		type: 'Хит продаж',
		place: 'Jumeirah Lake Towers, Дубай, 300M',
		region: 'Беларусь',
		group: 'Снеки',
		importCountries: 'Кувейт',
		packaging: 'пакеты',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'HZPL8J',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Новинки',
		place: 'Jumeirah Lake Towers, Дубай, 300M',
		region: 'Беларусь',
		group: 'Снеки',
		importCountries: 'Кувейт',
		packaging: 'пакеты',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	},
	{
		id: 'LWZX3Q',
		img: '/img/product-3.webp',
		title: 'ООО "Соломон-трейд"',
		desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
		type: 'Новинки',
		place: 'Jumeirah Lake Towers, Дубай, 300M',
		region: 'Беларусь',
		group: 'Снеки',
		importCountries: 'Кувейт',
		packaging: 'пакеты',
		weight: '250 грамм',
		producer: 'ООО "Соломон-трейд"'
	}
];
const testCategories = [
	'Алкогольные напитки',
	'Варенье / Джем / Мёд',
	'Вегетарианские продукты',
	'Вода бутилированная',
	'Детское питание',
	'Замороженные продукты',
	'Здоровое питание',
	'Икра осетровая',
	'Каши, хлопья и мюсли',
	'Кондитерские изделия',
	'Консервы',
	'Конфеты',
	'Корм для животных',
	'Крупы',
	'Макаронные изделия',
	'Крупы',
	'category',
	'category',
	'category',
	'category',
	'category',
	'category',
	'category',
	'category',
	'category',
	'before last',
	'last'
];

export const useAppStore = defineStore('app', () => {
	// Selectables
	const selectedCategory = ref('Category name');
	const selectedProduct = ref();

	// Fetched data
	const news = ref(testNews);
	const events = ref();
	const categories = ref(testCategories);
	const products = ref(testProducts);

	// Actions
	const selectCategory = category => {
		selectedCategory.value = category;
	};
	const selectProduct = productId => {
		selectedProduct.value = products.value.find(p => p.id === productId);
	};

	return {
		news,
		events,
		categories,
		products,
		selectedCategory,
		selectedProduct,
		selectCategory,
		selectProduct
	};
});
