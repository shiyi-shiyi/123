<template>
<div id="addaddress">

</div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {

    }
  },
  created(){
    this.alladdress()
    //   this.list.name = this.address.province
  },
  computed:{
    ...mapState("address",["address"])

  },
  methods: {
    ...mapActions("address",["chazhaodizhi"]),



  }
}
</script>

<style>

</style>