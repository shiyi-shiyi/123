import {post_array,get,post} from "../http/axios.js"

export default {
    namespaced:true,
    state:{
        address:[]
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
        },
    }
}