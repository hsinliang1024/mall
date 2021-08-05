<!--  -->
<template>
  <div class="goodsListItem">
      <img :src="goodsItem.show.img" alt="">
      <div class="title">{{goodsItem.title}}</div>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}人收货</span>
  </div>
</template>

<script>
export default {
 props:{
     goodsItem:{
         type:Object,
         default(){
             return {}
         }
     }
 }

}

</script>
<style scoped>
.goodsListItem{
    width: 48%;
    font-size: 12px;
    padding-bottom: 4px;
}
.goodsListItem img{
    width: 100%;
}
.goodsListItem .title{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 5px 3px 5px 3px;
}
.goodsListItem .price{
    padding: 0 5px;
    color: red;
}
.goodsListItem .cfav{
    color: gray;
    margin-left: 5px;
}
</style>