export default defineNuxtRouteMiddleware(() => {
	const { $gsap, $ScrollTrigger } = useNuxtApp();
	$ScrollTrigger.killAll();
	$gsap.globalTimeline.kill();
});
