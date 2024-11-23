export default defineNuxtRouteMiddleware((to, from) => {
	//!TODO in future there might be pages that required auth. But for now not needed
	// if (to.meta.requiresAuth) {
	// 	return {
	// 		path: '/forbidden',
	// 	};
	// }
});
