import {post_array,get,post} from "../http/axios.js"
export default {
    namespaced:true,
    state:{
        category:{
            list:[]
        },
        vcategory:{},
        titles:"",
        dialogFormVisible:false,
    },
    getters:{

    },
    mutations:{
        xiugaicategory(state,category){
            state.category = category;
        },
        vantcategory(state,category){
            state.vcategory = category;
        },
        showmodel(state){
            state.dialogFormVisible=true
        },
        closemodel(state){
            state.dialogFormVisible=false
        },
        xiugaititle(state){
            state.titles="修改栏目";
        },
        tianjiatitle(state){
            state.titles="添加栏目";
        },
    },
    actions:{
        // 重载分页
        async czfy(context,form){
            let res = await post("/category/query",form)
            context.commit("xiugaicategory",res.data)
        },
        // 查询所有栏目
        async vantchongzai(context){
            let res = await get("/category/findAll")
            // console.log(res.data)
            context.commit("vantcategory",res.data)
        },
        // 删除
        async btndel(context,id){
            let re = await get("/category/deleteById?id="+id);
            return re
        },
        // 添加
        async add(context,form){
            let re = await post("/category/saveOrUpdate",form);
            return re
        },
        // 批量删除
        async btndels(context,ids){
            let re = await post_array("/category/batchDelete",{ids});
            return re
        },
        // 查询
        // async chaxun(context,){
        //     let re = await 
        // }
        

    }
}