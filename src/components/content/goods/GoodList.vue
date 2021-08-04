<!--  -->
<template>
  <div class="goods">
     <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem.vue'
export default {
  components: { goodsListItem },
 props:{
     goods:{
         type:Array,
         default(){
             return []
         }
     }
 }
}

</script>
<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
}
</style>