// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import store from './store/Store'
import Axios from 'axios'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.use(Vuex,Axios);
Vue.use(VueFullpage);
Vue.use(VueLazyLoad,{
  preLoad:1.3,
  // loading: require('./assets/loading.gif'),
  attempt:2,
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
