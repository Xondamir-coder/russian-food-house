export default () => {
	// Everything related to randomly generating & assigning colors
	const colorCombosMap = [
		{
			bg: '#F5A524FF',
			color: '#000000FF'
		},
		{
			bg: '#7828C833',
			color: '#7828C8FF'
		},
		{
			bg: '#006FEE33',
			color: '#006FEEFF'
		},
		{
			bg: '#17C96433',
			color: '#17C964FF'
		},
		{
			bg: '#D4D4D866',
			color: '#000000FF'
		},
		{
			bg: '#17C964FF',
			color: '#000000FF'
		},
		{
			bg: '#006FEEFF',
			color: '#FFFFFFFF'
		},
		{
			bg: '#7828C8FF',
			color: '#FFFFFFFF'
		},
		{
			bg: '#F31260FF',
			color: '#FFFFFFFF'
		}
	];
	const getRandomColor = (() => {
		const recentColors = []; // Store the last 4 selected indices
		const maxRecent = 4;

		return () => {
			let randomIndex;
			do {
				randomIndex = Math.floor(Math.random() * colorCombosMap.length);
			} while (recentColors.includes(randomIndex));

			// Add the new index and remove the oldest if necessary
			recentColors.push(randomIndex);
			if (recentColors.length > maxRecent) {
				recentColors.shift();
			}

			return {
				backgroundColor: colorCombosMap[randomIndex].bg,
				color: colorCombosMap[randomIndex].color
			};
		};
	})();
	const randColor = getRandomColor();
	return `--bg: ${randColor.backgroundColor}; --color: ${randColor.color};`;
};
