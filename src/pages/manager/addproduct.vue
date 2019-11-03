<template>
<div id="addproduct">
  <div class="cate_content">
    <van-nav-bar title="产品" left-text="返回"  left-arrow @click-left="onClickLeft"/>
    <!-- {{myorderprice}} -->
    
    <van-tree-select
    height="100%"
    @click-nav="activeIndexhandlr"
    :items="items"
    :main-active-index="activeIndex"
    >
      <template slot="content">
        <briup-product-item v-for=" v in contents" :data="v" :key="v.id" ></briup-product-item>
      </template>
    </van-tree-select>
    <van-submit-bar
      :price="myorderprice*100"
      button-text="确认订单"
      @submit="toshopcar"
      :decimal-length="0"
    />
      <!-- @submit="onSubmit" -->
  </div>
</div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
      items:[],
      activeIndex: 0,
      // lanmu:{},
      contents:[],
    }
  },
  created(){
    // 栏目id
    // this.lanmu = this.$route.query.cat
    this.arrayvcategory()
    this.czfys()
    // console.log(this.categoryindex(this.lanmu))

  },
  computed:{
    ...mapState("orderok",["demo","prices","myorder"]),
    ...mapState("category",["vcategory"]),
    // ...mapGetters("category",["categoryindex"]),
    ...mapState("product",["products"]),
    ...mapGetters("orderok",["myorderprice"]),
    ...mapGetters("product",["categoryporduct"]),
  },
  methods: {
    ...mapActions("product",["czfys"]),
    ...mapMutations("orderok",["clearshopcar"]),

    // 渲染左侧
    arrayvcategory(){
      this.vcategory.forEach((item)=>{
          this.items.push({"text":item.name,id:item.id})
      })
    },
    // 点击左侧导航
    activeIndexhandlr(a){
        this.activeIndex = this.items[a].id
        this.contents = this.categoryporduct(this.items[a].id)
    },
    // 返回
    onClickLeft() {
      this.clearshopcar()
      this.$router.go(-1)
    },
    // 到shopcar
    toshopcar(){
      this.$router.push({path:"/shopcar"})
    }
  }
}
</script>
<style>
.cate_content {
    height: 100%;
}
#categoryporduct{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    /* background-color: #ededed; */
}
</style>