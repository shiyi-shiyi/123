import {post_array,get,post} from "../http/axios.js"
export default {
    namespaced:true,
    state:{
        vcategory:[],
    },
    getters:{
      
    },
    mutations:{
        vantcategory(state,category){
            state.vcategory = category;
        },
    },
    actions:{
        // 查询所有栏目
        async vantchongzai(context){
            let res = await get("/category/findAll")
            context.commit("vantcategory",res.data)
            return res.data
        },


    }
}