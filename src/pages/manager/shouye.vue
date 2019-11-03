<template>
  <div id="shouye">
    <!-- <van-row>
      <van-col span="24" align="center" >首页</van-col>
    </van-row> -->
    <van-image width="100%" height="250" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    <!-- {{vcategory}} -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="v in vcategory"
        :key="v.id"
        :icon="v.icon"
        :text="v.name"
        @click="clickcategory(v)"
      />
    </van-grid>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data(){
    return {
    }
  },
  created(){
  // app信息加载 使状态机存储数据
    // 查栏目
    this.vantchongzai()
    // 查地址
    // this.chazhaodizhi(this.user.id)
    // 查用户信息
    this.tokeninfo(this.token) 
    // console.log(this.$route.query.data)
  },
  computed:{
    ...mapState("category",["vcategory"]),
    ...mapState("denglu",["token"])
  },
  methods:{
    // ...mapActions("address",["chazhaodizhi"]),
    ...mapActions("category",["vantchongzai"]),
    ...mapActions("denglu",["tokeninfo"]),
    clickcategory(v){
    this.$router.push({path:"/addproduct",query:{cat:v}})
    }
  }
}
</script>

<style>

</style>