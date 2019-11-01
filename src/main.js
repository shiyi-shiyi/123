import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'

// 全局注册自定义组件
import FullLayout from './components/FullLayout'
import OrderItem from './components/OrderItem'
import AddressItem from './components/AddressItem'
import ProductItem from './components/ProductItem'
Vue.component('briup-fulllayout',FullLayout)
Vue.component('briup-order-item',OrderItem)
Vue.component('briup-address-item',AddressItem)
Vue.component('briup-product-item',ProductItem)

import myorder from './all/myorder'
Vue.component('my-order-item',myorder)

Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})
// 产品分栏
// Vue.filter('cpfl',function(val){
//   if(val){
//     return moment(val).format('YYYY-MM-DD HH:mm:ss')
//   }
//   return val;
// })

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
