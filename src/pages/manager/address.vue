<template>
<div id="address">
    <van-nav-bar
  title="地址"
  left-text="返回"
  right-text="添加"
  left-arrow
  @click-left="onClickLeft"
  @click-right="xingzendizhi"
/>
<briup-address-item v-for="x in Idaddress" :data="x" :name="user.name" :key="x.id" :upd="bianjiaddress" :del="shanchuaddress"/>

</div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      user:"",
    }
  },
  created(){
    this.user = this.info
    // console.log("aaaaa",this.user.id)
    this.chazhaodizhi(this.user.id)
  },
  computed:{
    ...mapState("denglu",["token","info"]),
    ...mapGetters("address",["Idaddress"]),
    ...mapGetters("denglu",["getinfo"]),
  },
  methods: {
    ...mapActions("address",["chazhaodizhi","deleteaddress"]),
    // 返回
    onClickLeft() {
      this.$router.go(-1)
    },
    // 新增地址
    xingzendizhi(){
      this.$router.push({path:"/addaddress",query:{title:"添加地址",id:this.user.id}})
    },
    // 删除地址
    shanchuaddress(v){
      // this.deleteaddress(v)
    },
    // 修改地址
    bianjiaddress(v){
      this.$router.push({path:"/addaddress",query:{title:"修改地址",address:this.Idaddress}})
    },


  }
}
</script>

<style>

</style>