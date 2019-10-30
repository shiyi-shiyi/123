import axios from 'axios'
import {post_array,get,post} from "../http/axios.js"
export default {
    namespaced:true,
    state:{
        customer:{
            list:[]
        },
        titles:"",
        dialogFormVisible:false,
    },
    getters:{

    },
    mutations:{
        xiugaicustomer(state,customer){
            state.customer = customer;
        },
        showmodel(state){
            state.dialogFormVisible=true
        },
        closemodel(state){
            state.dialogFormVisible=false
        },
        xiugaititle(state){
            state.titles="修改顾客";
        },
        tianjiatitle(state){
            state.titles="添加顾客";
        },
    },
    actions:{
        // 重载分页
        async czfy(context,form){
            let res = await post("/customer/query",form)
            context.commit("xiugaicustomer",res.data)
        },
        // 删除
        async btndel(context,id){
            let re = await get("/customer/deleteById?id="+id);
            return re
        },
        // 添加
        async add(context,form){
            let re = await post("/customer/saveOrUpdate",form);
            return re
        },
        // 批量删除
        async btndels(context,ids){
            let re = await post_array("/customer/batchDelete",{ids});
            return re
        },
        
        // 查询
        // async chaxun(context,){
        //     let re = await 
        // }

        

    }
}