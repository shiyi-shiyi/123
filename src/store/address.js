import {post_array,get,post} from "../http/axios.js"

export default {
    namespaced:true,
    state:{
        address:[]
    },
    getters:{
        Idaddress(status){
            return status.address
        }
    },
    mutations:{
        refreshAddress(state,address){
            state.address=address
        }
    },
    actions:{
        // 通过顾客id查找地址
        async chazhaodizhi(context,id){
            let re = await get("/address/findByCustomerId?id="+id);
            context.commit("refreshAddress",re.data)
            return re.data
        },
        // 通过地址id删除地址
        async deleteaddress(context,id){
            let re = await get("/address/deleteById?id="+id);
        },
        // 添加修改地址
        async editaddress(context,from){
            let re = await post("/address/saveOrUpdate",from);
            // console.log("aaaass",re)
        },
    }
}