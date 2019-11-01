<template>
  <div id="denglu">
      <div class="kuang">

<van-cell-group class="dl">
  <van-field
    v-model="yonghu.username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />
  <van-field
    v-model="yonghu.password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required/>
  <van-button type="primary" size="large" @click="dl">登录</van-button>
</van-cell-group>
      </div>
  </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import {getToken,setToken,removeToken} from '../utils/auth'

export default {

  data(){
    return {
      yonghu:{
         "type": "customer",
      },
    }
  },
  create(){
    
  },
  computed:{
    ...mapState("denglu",["token"])

  },
  methods:{
    ...mapActions("denglu",["login","info"]),

    dl(){
      this.login(this.yonghu)
      .then((re)=>{
        if(re){
          this.$router.push({path:"/buju/shouye"})
        }else{
          alert("cuowu")
        }
      })
    },


  }
}
</script>

<style>
.kuang{
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background:url('../assets/denglubeijing.jpg') no-repeat center;
  /* background:#bfc4cc; */
}
.dl{
  position: relative;
  top:40%;

}
</style>