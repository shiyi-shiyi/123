import {getToken,setToken,removeToken} from '../utils/auth'

import {post_array,get,post, post_json} from "../http/axios.js"
export default {
    namespaced:true,
    state:{
        token:getToken(),
        info:{}
    },
    getters:{
        getinfo(status){
            // 保存用token换取的值
            return status.info
        },
        gettoken(status){
            // 保存用token
            return status.token
        }
    },
    mutations:{
        loginmutation(status,re){
            status.token = re
        },
        infomutation(status,info){
            status.info = info
        }
    },
    actions:{
        // 登录 获取token
        async login(context,data){
            const re = await post_json("/user/login",data)
            context.commit("loginmutation",re.data.token)
            setToken(re.data.token)
            return re.data.token
        },
        //  token获取用户信息
        async tokeninfo(context,token){
            const re = await get("/user/info?token="+token)
            context.commit("infomutation",re.data)
            return re.data
        },
        // 退出登录
        async logout(context){
            // 1. 请求后台退出
            await post("/user/logout");
            // 2. 移除本地缓存中的token
            removeToken();
            // 3. 移除状态机中的token以及info
            context.commit("loginmutation",null);
            context.commit("infomutation","");
        }
    }
}
