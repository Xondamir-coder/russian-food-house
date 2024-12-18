import Lenis from 'lenis';

export default defineNuxtPlugin(nuxtApp => {
	let lenis;
	if (import.meta.client) {
		lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}

	return {
		provide: {
			lenis
		}
	};
});
