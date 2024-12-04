const testRegions = [
	{
		name: 'Respubltika Saha Yakutiya',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Chukotskij avtonomnyj okrug',
		goods: '0',
		producers: '0'
	},
	{
		name: "Magadanskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Primorskij kraj',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Habarovskij kraj',
		goods: '0',
		producers: '0'
	},
	{
		name: "Evrejskaya avtonomnaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Amurskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Sahalinskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Voronezhskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Belgorodskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Kurskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Bryanskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Smolenskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Orlovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Lipeckaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Tambovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Tul'skaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Ryazanskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Kaluzhskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Moskovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Voronezhskaya oblast'_2",
		goods: '0',
		producers: '0'
	},
	{
		name: "Voronezhskaya oblast'_3",
		goods: '0',
		producers: '0'
	},
	{
		name: "Kostromskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Tverskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Yaroslavskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Orenburgskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Saratovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Samarskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Ul'yanovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Penzenskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Mordoviya',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Chuvashskaya respublika',
		goods: '0',
		producers: '0'
	},
	{
		name: "Nizhegorodskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Kirovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Tatarstan',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Udmurtskaya Respublika ',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Bashkortostan',
		goods: '0',
		producers: '0'
	},
	{
		name: "Kirovskaya oblast'_2",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Yamalo-Neneckij avtonomnyj okrug',
		goods: '0',
		producers: '0'
	},
	{
		name: "Tyumenskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Kurganskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Chelyabinskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Sverdlovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Hanty-Mansijskij avtonomnyj okrug Yugra',
		goods: '0',
		producers: '0'
	},
	{
		name: "Novgorodskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Vologodskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Pskovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Leningradskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Murmanskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Kareliya',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Komi',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Neneckij avtonomnyj okrug',
		goods: '0',
		producers: '0'
	},
	{
		name: "Arhangel'skaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Kaliningradskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Rostovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Volgogradskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Astrahanskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Kalmykiya',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Dagestan',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Chechenskaya respublika',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Ingushetiya',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Severnaya Osetiya - Alaniya',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Kabardino-Balkarskaya respublika',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Karachaevo-Cherkesskaya respublika',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Krasnodarskij Kraj',
		goods: '0',
		producers: '0'
	},
	{
		name: "Stavropol'skij kraj",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Adygeya',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Buryatiya',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Tyva',
		goods: '0',
		producers: '0'
	},
	{
		name: "Kemerovskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Altaj',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Altajskij kraj',
		goods: '0',
		producers: '0'
	},
	{
		name: "Novosibirskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Omskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Tomskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Hakasiya',
		goods: '0',
		producers: '0'
	},
	{
		name: "Irkutskaya oblast'",
		goods: '0',
		producers: '0'
	},
	{
		name: "Zabajkal'skij kraj",
		goods: '0',
		producers: '0'
	},
	{
		name: 'Krasnoyarskij kraj',
		goods: '56 999',
		producers: '4034'
	},
	{
		name: 'Kamchatskij kraj',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Permskij kraj',
		goods: '0',
		producers: '0'
	},
	{
		name: 'Respublika Krym',
		goods: '0',
		producers: '0'
	}
];

export const useMapStore = defineStore('map', () => {
	const regionTranslations = {
		'Respubltika Saha Yakutiya': 'Республика Саха Якутия',
		'Chukotskij avtonomnyj okrug': 'Чукотский автономный округ',
		"Magadanskaya oblast'": 'Магаданская область',
		'Primorskij kraj': 'Приморский край',
		'Habarovskij kraj': 'Хабаровский край',
		"Evrejskaya avtonomnaya oblast'": 'Еврейская автономная область',
		"Amurskaya oblast'": 'Амурская область',
		"Sahalinskaya oblast'": 'Сахалинская область',
		"Voronezhskaya oblast'": 'Воронежская область',
		"Belgorodskaya oblast'": 'Белгородская область',
		"Kurskaya oblast'": 'Курская область',
		"Bryanskaya oblast'": 'Брянская область',
		"Smolenskaya oblast'": 'Смоленская область',
		"Orlovskaya oblast'": 'Орловская область',
		"Lipeckaya oblast'": 'Липецкая область',
		"Tambovskaya oblast'": 'Тамбовская область',
		"Tul'skaya oblast'": 'Тульская область',
		"Ryazanskaya oblast'": 'Рязанская область',
		"Kaluzhskaya oblast'": 'Калужская область',
		"Moskovskaya oblast'": 'Московская область',
		"Voronezhskaya oblast'_2": 'Воронежская область_2',
		"Voronezhskaya oblast'_3": 'Воронежская область_3',
		"Kostromskaya oblast'": 'Костромская область',
		"Tverskaya oblast'": 'Тверская область',
		"Yaroslavskaya oblast'": 'Ярославская область',
		"Orenburgskaya oblast'": 'Оренбургская область',
		"Saratovskaya oblast'": 'Саратовская область',
		"Samarskaya oblast'": 'Самарская область',
		"Ul'yanovskaya oblast'": 'Ульяновская область',
		"Penzenskaya oblast'": 'Пензенская область',
		'Respublika Mordoviya': 'Республика Мордовия',
		'Chuvashskaya respublika': 'Чувашская республика',
		"Nizhegorodskaya oblast'": 'Нижегородская область',
		"Kirovskaya oblast'": 'Кировская область',
		'Respublika Tatarstan': 'Республика Татарстан',
		'Udmurtskaya Respublika ': 'Удмуртская Республика',
		'Respublika Bashkortostan': 'Республика Башкортостан',
		"Kirovskaya oblast'_2": 'Кировская область_2',
		'Yamalo-Neneckij avtonomnyj okrug': 'Ямало-Ненецкий автономный округ',
		"Tyumenskaya oblast'": 'Тюменская область',
		"Kurganskaya oblast'": 'Курганская область',
		"Chelyabinskaya oblast'": 'Челябинская область',
		"Sverdlovskaya oblast'": 'Свердловская область',
		'Hanty-Mansijskij avtonomnyj okrug Yugra': 'Ханты-Мансийский автономный округ Югра',
		"Novgorodskaya oblast'": 'Новгородская область',
		"Vologodskaya oblast'": 'Вологодская область',
		"Pskovskaya oblast'": 'Псковская область',
		"Leningradskaya oblast'": 'Ленинградская область',
		"Murmanskaya oblast'": 'Мурманская область',
		'Respublika Kareliya': 'Республика Карелия',
		'Respublika Komi': 'Республика Коми',
		'Neneckij avtonomnyj okrug': 'Ненецкий автономный округ',
		"Arhangel'skaya oblast'": 'Архангельская область',
		"Kaliningradskaya oblast'": 'Калининградская область',
		"Rostovskaya oblast'": 'Ростовская область',
		"Volgogradskaya oblast'": 'Волгоградская область',
		"Astrahanskaya oblast'": 'Астраханская область',
		'Respublika Kalmykiya': 'Республика Калмыкия',
		'Respublika Dagestan': 'Республика Дагестан',
		'Chechenskaya respublika': 'Чеченская республика',
		'Respublika Ingushetiya': 'Республика Ингушетия',
		'Respublika Severnaya Osetiya - Alaniya': 'Республика Северная Осетия - Алания',
		'Kabardino-Balkarskaya respublika': 'Кабардино-Балкарская республика',
		'Karachaevo-Cherkesskaya respublika': 'Карачаево-Черкесская республика',
		'Krasnodarskij Kraj': 'Краснодарский край',
		"Stavropol'skij kraj": 'Ставропольский край',
		'Respublika Adygeya': 'Республика Адыгея',
		'Respublika Buryatiya': 'Республика Бурятия',
		'Respublika Tyva': 'Республика Тыва',
		"Kemerovskaya oblast'": 'Кемеровская область',
		'Respublika Altaj': 'Республика Алтай',
		'Altajskij kraj': 'Алтайский край',
		"Novosibirskaya oblast'": 'Новосибирская область',
		"Omskaya oblast'": 'Омская область',
		"Tomskaya oblast'": 'Томская область',
		'Respublika Hakasiya': 'Республика Хакасия',
		"Irkutskaya oblast'": 'Иркутская область',
		"Zabajkal'skij kraj": 'Забайкальский край',
		'Krasnoyarskij kraj': 'Красноярский край',
		'Kamchatskij kraj': 'Камчатский край',
		'Permskij kraj': 'Пермский край',
		'Respublika Krym': 'Республика Крым'
	};

	const regions = ref(testRegions);
	const currentRegion = ref({
		name: 'Krasnoyarskij kraj',
		goods: '59 000',
		producers: '4 034'
	});
	const isHovering = ref(false);

	// Updates the currentRegion with the region that matches the given name
	const setCurrentRegion = regionName => {
		const foundRegion = regions.value.find(item => item.name === regionName);
		currentRegion.value = foundRegion;
	};
	const setHovering = val => {
		isHovering.value = val;
	};

	return {
		regions,
		currentRegion,
		isHovering,
		regionTranslations,
		setCurrentRegion,
		setHovering
	};
});
