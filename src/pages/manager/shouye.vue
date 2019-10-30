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
    this.vantchongzai()
    console.log(this.$route.query.data)
  },
  computed:{
    ...mapState("category",["vcategory"])
  },
  methods:{
    ...mapActions("category",["vantchongzai"]),
  }
}
</script>

<style>

</style>