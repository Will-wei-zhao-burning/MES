/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-11-16 14:38:21
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-14 10:16:37
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from "./plugin/element"
import './assets/fonts/iconfont.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI);

new Vue({
  router,
  store,
  element,
  render: h => h(App)
}).$mount('#app')
