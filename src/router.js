import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`./components/${component}.vue`)
}

let router = new VueRouter({

	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),

	routes: [
		{ path: '/', component: load('Home') },
		{ path: '/login', component: load('Login') }
	]
})


export default router