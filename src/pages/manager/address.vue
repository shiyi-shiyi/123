<template>
<div id="address">
    <van-nav-bar
  title="地址"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    {{address}}
    <van-address-list
    v-model="chosenAddressId"
    :list="address"
    @add="onClickLeft"
    @edit="onClickLeft"
    />

</div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [],
      q:"26"
    }
  },
  created(){
      this.chazhaodizhi(this.q)
    //   this.list.name = this.address.province
  },
  computed:{
    ...mapState("address",["address"])

  },
  methods: {
    ...mapActions("address",["chazhaodizhi"]),
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      alert("aaa")
    }

  }
}
</script>

<style>

</style>