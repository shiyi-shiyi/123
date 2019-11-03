<template>
  <div id="buju">
    <router-view></router-view>
    <div class="bj">
      <van-tabbar v-model="active" @change="changehandler">
        <van-tabbar-item icon="home-o" name="/buju/shouye">首页</van-tabbar-item>
        <van-tabbar-item icon="cart-o" name="/buju/dingdan">订单</van-tabbar-item> 
        <van-tabbar-item icon="friends-o" name="/buju/wode">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import {getToken,setToken,removeToken} from '../../utils/auth'

export default {
  data(){
    return {
      active:0
    }
  },
  created(){

  },
  methods:{
    changehandler(path){
      this.$router.push({path})

    }

  }

}
</script>

<style>

</style>