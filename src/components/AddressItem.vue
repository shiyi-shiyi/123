<template>
  <div class="address_item">
    <van-row>
      <van-col :span="24">
        <div>
          {{name}}
        </div>
        <div>
          &nbsp; {{data.telephone}}
        </div>
      </van-col>
      <van-col :span="18">
        <div>
          {{data.province}} {{data.city}} {{data.area}} {{data.address}}
        </div>
      </van-col>
      <van-col :span="3" class="option">
        <!-- 修改按钮 -->
        <van-icon name="edit" @click="upd(data.id)"/> &nbsp;
        <!-- 删除按钮  del(data.id)作为返回值 -->
        <van-icon name="delete" @click="del(data.id)"/>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  props:['data','name',"upd","del"]
}
</script>
<style scoped>
.address_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #e6dede;
}
.address_item .xing {
  width:3em;
  height: 3em;
  border-radius: 50%;
  background-color: pink;
  text-align: center;
  line-height: 3em;
  color: #ffffff
}
.address_item .option {
  text-align:center;
  line-height: 3em;
}
</style>