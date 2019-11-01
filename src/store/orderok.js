import {post_array,get,post, post_json} from "../http/axios.js"
// number  price  productId productName
export default {
    namespaced:true,
    state:{
      demo:{},
      prices:0,
      myorder:new Map(),
    },
    getters:{
        // 计算总价
        myorderprice(state){
            let result = 0
            state.myorder.values((item)=>{
                console.log("a",item),
                result += item.number*item.price
            })
            return result
        },
    },
    mutations:{
        // 
        editmyorder(status,re){
            status.myorder.set(re)
         },
        // 添加购物车   order接收产品组件的返回值
        addshopcar(state,order){
            state.myorder.set(order.productId,order)
            console.log(state.myorder)
        },
        // 清空购物车
        clearshopcar(status){
            status.myorder.clear()
        }
    },
    actions:{
   
    }
}
