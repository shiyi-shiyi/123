import axios from 'axios'
import {post_array,get,post} from "../http/axios.js"
export default {
    namespaced:true,
    state:{
        products:{},

        
    },
    getters:{
        categoryporduct(status){
            return (categoryid)=>{
                return status.products.filter(item=>item.categoryId === categoryid)
            }
        }
    },
    mutations:{
        Allproduct(state,product){
            product.forEach((item)=>{
                item.number = 0
            })
            state.products = product;
        },
    },
    actions:{
        // 重载所有产品
        async czfys(context){
            let res = await get("/product/findAll")
            context.commit("Allproduct",res.data)
            return res.data
        },

    }
}