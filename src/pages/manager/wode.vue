<template>
  <div id="wode">
      <van-row>
        <van-col span="24" class="poto" align="center">
          <van-image
            round
            fit="fill"
            width="150px"
            height="150px"
            :src="info.avatar"
          />
        </van-col>
        <van-col span="24" align="center">
          {{info.name}}
        </van-col>
      </van-row>
      <van-cell title="地址" @click="toaddress" is-link />
      <van-button type="default" size="large" @click="tuichudenglu">退出登录</van-button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {
        user:{}
      }
  },
  created(){
  },
  computed:{
    ...mapState("denglu",["token","info"]),
    // ...mapState("category",["vcategory"])
  },
  methods:{
    ...mapActions("denglu",["login","tokeninfo","logout"]),
    // 获取用户信息
    toaddress(){
      this.$router.push({path:"/address"})
    },
    // 退出登录
    tuichudenglu(){
      this.logout(),
      this.$router.push({path:"/"})
    },
  }
}
</script>

<style>
.poto{
  margin-top:40px; 
  margin-bottom: 40px;
}
</style>

// this.tokenhandler(res.token)
// .then((resp)=>{
// this.$router.push({path:"/buju/shouye",query:{response:resp}})
// })