import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import order from "./order"
import category from "./category"
import customer from "./customer"
import product from "./product"
import address from "./address"
import denglu from "./denglu"
import wode from "./wode"
import orderok from "./orderok"

export default new Vuex.Store({
    modules:{
      denglu,
      wode,
      address,
      order,
      category,
      customer,
      product,
      orderok,
    }
})
