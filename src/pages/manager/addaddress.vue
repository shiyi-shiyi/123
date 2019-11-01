<template>
<div id="addaddress">
        <van-nav-bar
  :title="titles"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="kong"></div>
<van-row type="flex" justify="center">
  <van-col :span="20">
    <van-field
      v-model="from.province"
      type="text"
      label="省份province"
      placeholder=""
      required
      :border="true"
    />
    <van-field
      v-model="from.city"
      type="text"
      label="城市city"
      placeholder=""
      required
      :border="true"
    />
    <van-field
      v-model="from.area"
      type="text"
      label="详细地址area"
      placeholder=""
      required
      :border="true"
    />
    <van-field
      v-model="from.address"
      type="text"
      label="地址address"
      placeholder=""
      required
      :border="true"
    />
    <van-field
      v-model="from.telephone"
      type="tel"
      label="电话telephone"
      placeholder=""
      required
      :border="true"
    />
  </van-col>
</van-row>
<!-- <div class="kuang"></div> -->
<van-row type="flex" justify="center">
  <van-button type="info" @click="tijiaoaddress">提交</van-button>
</van-row>

</div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      titles:"",
      from:{}
    }
  },
  created(){
    // console.log(this.$route.query)
    this.newfrom()
  },
  computed:{
    ...mapState("address",["address"])
  },
  methods: {
    ...mapActions("address",["editaddress"]),
    // 返回
    onClickLeft() {
      this.from={}
      this.$router.go(-1)
    },
    // 重置from
    newfrom(){
      this.titles = this.$route.query.title
      if(this.titles==="添加地址"){
        this.from.customerId = this.$route.query.id
        console.log(this.from)
      }else{
        this.from = this.$route.query.address[0]
        console.log(this.from)
      }
    },
    tijiaoaddress(){
      this.editaddress(this.from)
      setTimeout(()=>{
        this.$router.go(-1)
      },2000)
    }

  }
}
</script>

<style>
.kong{
  margin-top: 5px;
}
</style>