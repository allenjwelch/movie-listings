import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

Vue.use(VueRouter)

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
import './assets/styles.scss';

// const HomePage = { template: '<div>Home</div>' }
// const Bar = { template: '<div>Page2</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.


// Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router,
  }).$mount('#app')
