import _ from 'lodash'
import {post_array,get,post, post_json,post_obj_array} from "../http/axios.js"
// number  price  productId productName
export default {
    namespaced:true,
    state:{
      myorder:new Map(),
    },
    getters:{
        // 计算总价
        myorderprice(state){
            let result = 0
            for(let orderLine of state.myorder.values()){
                result += orderLine.price * orderLine.number
              }
            console.log(state.myorder.values())
            return result
        },
    },
    mutations:{
        // 添加购物车   order接收产品组件的返回值
        addshopcar(state,order){
            state.myorder.set(order.productId,order)
            // 克隆对象，改变引用地址，目的是为了让监听机制监听到orderLines的改变
            state.myorder = _.clone(state.myorder);
            console.log(state.myorder)
        },
        // 清空购物车
        clearshopcar(state){
            state.myorder.clear()
            state.myorder = _.clone(state.myorder);
        },
    },
    actions:{
        // 提交订单
        async placeorder({commit,rootState}){
            let orderLines = []
            let data = {
                addressId:rootState.address.address[0].id,
                customerId :rootState.denglu.info.id,
                orderLines:Array.from(rootState.orderok.myorder.values())
            }
            let res = await post_obj_array('/order/save',data)
            return res
        }
        
    }
}
