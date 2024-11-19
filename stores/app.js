import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
	const selectedCategory = ref('');

	const categories = [
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
	const products = ref([
		{
			id: 'NPLIV7',
			img: '/img/product-2.webp',
			title: '«Славянка-торг»',
			desc: '"Обыкновенное чудо", 55 г с кремом',
			type: 'Новинки'
		},
		{
			id: 'PN2ZQF',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Хит продаж'
		},
		{
			id: 'LQXW7Z',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Популярные'
		},
		{
			id: 'TWD3ZX',
			img: '/img/product-2.webp',
			title: '«Славянка-торг»',
			desc: '"Обыкновенное чудо", 55 г с кремом',
			type: 'Хит продаж'
		},
		{
			id: 'KP7YQJ',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Хит продаж'
		},
		{
			id: 'GQ8WYN',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Хит продаж'
		},
		{
			id: 'YHZ3QP',
			img: '/img/product-2.webp',
			title: '«Славянка-торг»',
			desc: '"Обыкновенное чудо", 55 г с кремом',
			type: 'Популярные'
		},
		{
			id: 'MRTJ4F',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Хит продаж'
		},
		{
			id: 'PWL7XZ',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Популярные'
		},
		{
			id: 'ZX7KQP',
			img: '/img/product-2.webp',
			title: '«Славянка-торг»',
			desc: '"Обыкновенное чудо", 55 г с кремом',
			type: 'Новинки'
		},
		{
			id: 'HZX3JQ',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Популярные'
		},
		{
			id: 'YWP3LZ',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Популярные'
		},
		{
			id: 'NRZJ6X',
			img: '/img/product-2.webp',
			title: '«Славянка-торг»',
			desc: '"Обыкновенное чудо", 55 г с кремом',
			type: 'Хит продаж'
		},
		{
			id: 'KWP3JZ',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Новинки'
		},
		{
			id: 'ZXPL9Q',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Новинки'
		},
		{
			id: 'YWJZ4Q',
			img: '/img/product-2.webp',
			title: '«Славянка-торг»',
			desc: '"Обыкновенное чудо", 55 г с кремом',
			type: 'Новинки'
		},
		{
			id: 'MRPL3X',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Хит продаж'
		},
		{
			id: 'GWT7LJ',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Популярные'
		},
		{
			id: 'PZW9KX',
			img: '/img/product-2.webp',
			title: '«Славянка-торг»',
			desc: '"Обыкновенное чудо", 55 г с кремом',
			type: 'Хит продаж'
		},
		{
			id: 'HZPL8J',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Новинки'
		},
		{
			id: 'LWZX3Q',
			img: '/img/product-3.webp',
			title: 'ООО "Соломон-трейд"',
			desc: 'Жареный арахис натуральный "GOLDEN GIFT"',
			type: 'Новинки'
		}
	]);

	const selectCategory = category => {
		selectedCategory.value = category;
	};

	return { categories, products, selectedCategory, selectCategory };
});
