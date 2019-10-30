import axios from 'axios'
import {post_array,get,post} from "../http/axios.js"
export default {
    namespaced:true,
    state:{
        product:{
            list:[]
        },
        titles:"",
        dialogFormVisible:false,
    },
    getters:{

    },
    mutations:{
        xiugaiproduct(state,product){
            state.product = product;
        },
        showmodel(state){
            state.dialogFormVisible=true
        },
        closemodel(state){
            state.dialogFormVisible=false
        },
        xiugaititle(state){
            state.titles="修改产品";
        },
        tianjiatitle(state){
            state.titles="添加产品";
        },
    },
    actions:{
        // 重载分页
        async czfy(context,form){
            let res = await post("/product/query",form)
            context.commit("xiugaiproduct",res.data)
        },
        // 删除
        async btndel(context,id){
            let re = await get("/product/deleteById?id="+id);
            return re
        },
        // 添加
        async add(context,form){
            let re = await post("/product/saveOrUpdate",form);
            return re
        },
        // 批量删除
        async btndels(context,ids){
            let re = await post_array("/product/batchDelete",{ids});
            return re
        },
        // 查询
        // async chaxun(context,){
        //     let re = await 
        // }
        

    }
}