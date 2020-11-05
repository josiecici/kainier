import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/reset.css"
import "@/assets/css/common.css"
import 'lib-flexible/flexible'
// import router from "@/router/index"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router,
}).$mount('#app')
