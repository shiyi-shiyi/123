import axios from 'axios'
import {post_array,get,post, post_json} from "../http/axios.js"
export default {
    namespaced:true,
    state:{
    },
    getters:{
    },
    mutations:{

    },
    actions:{
        // 登录
        async dlhandler(context,data){
            const re = await post_json("/user/login",data)
            return re.data
        },
        async tokenhandler(context,data){
            const re = await get("/user/info?token="+data)
            console.log("asda",re)
            return re
        }
    }
}
