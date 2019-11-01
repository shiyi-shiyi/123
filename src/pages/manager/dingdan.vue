<template>
  <div id="dingdan">
    <van-sticky>
    <van-nav-bar title="我的订单"/>
    </van-sticky>
    <van-tabs v-model="active">
      <van-tab title="全部">
        <my-order-item v-for='ord in order' :key="ord.id"  :data='ord'>
        </my-order-item>
      </van-tab>
      <van-tab title="带派单">
         <my-order-item v-for='order in daipaidan' :key="order.id"  :data='order'></my-order-item>
      </van-tab>
      <van-tab title="待接单">
        <my-order-item v-for='order in daijiedan' :key="order.id"  :data='order'></my-order-item>
      </van-tab>
      <van-tab title="已完成">
        <my-order-item v-for='order in yiwancheng' :key="order.id"  :data='order'></my-order-item>
      </van-tab>
      <div class="bottonn"></div>
      </van-tabs>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      id:"",
      order:[],
      daipaidan:[],
      daijiedan:[],
      yiwancheng:[],
      active:0
    }
  },
  created(){
      this.user()
  },
  computed:{
    ...mapState("denglu",["token"]),
    // ...mapGetters("order",["customerorder"])

  },
  methods: {
    ...mapActions("order",["allorder"]),
    ...mapActions("denglu",["tokeninfo"]),
    // 初始化获取用户信息
    user(){
      this.tokeninfo(this.token)
      .then((re)=>{
        const userId = re.id;
        const userName = re.name
        this.id = userId
        // const userName = re.teleponse
        this.allorder()
        .then((re)=>{
          this.order= re.filter((item)=>item.customerId===userId)

          this.daipaidan= re.filter((item)=>item.customerId===userId && item.status==="待派单" )

          this.daijiedan= re.filter((item)=>item.customerId===userId && item.status==="待接单" )

          this.yiwancheng= re.filter((item)=>item.customerId===userId && item.status==="已完成" )
        })
      }) 
    },

  }
}
</script>

<style>
.bottonn{
  padding-bottom: 100px
}
</style>