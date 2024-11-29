import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default defineNuxtPlugin(nuxtApp => {
	if (import.meta.client) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(MotionPathPlugin);
	}

	return {
		provide: {
			gsap,
			ScrollTrigger,
			MotionPathPlugin
		}
	};
});
