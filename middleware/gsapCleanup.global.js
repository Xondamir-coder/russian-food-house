export default defineNuxtRouteMiddleware((to, from) => {
	const { $gsap, $ScrollTrigger } = useNuxtApp();
	if (to.path === from.path) return;
	$gsap.globalTimeline.kill();
	$ScrollTrigger.killAll();
});
