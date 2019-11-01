import axios from 'axios'
import {post_array,get,post} from "../http/axios.js"
export default {
    namespaced:true,
    state:{
        orders:{
            list:[]
        },
        allorder:[]
        // titles:"添加订单",
    },
    getters:{
    },
    mutations:{
        xiugaiorder(state,order){
            state.orders = order;
        },
        addordernutation(state,allorder){
            state.allorder = allorder;
        },
        
    },
    actions:{
        // 重载数据
        async chongzai(context,form){
            let res = await post("/order/queryPage",form)
            context.commit("xiugaiorder",res.data)
        },
        // 查询所有订单
        async allorder(context){
            let res = await get("/order/findAll")
            context.commit("addordernutation",res.data)
            return res.data
        },
        // 删除
        async btndel(context,id){
            let res = await get("/order/deleteById?id="+id)
            context.dispatch("chongzai");
            return res
        },
        
    }
}