<!--  -->
<template>
   <tab-bar>
      <tab-bar-item path="/home" activecolor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home-a.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activecolor="blue">
         <img slot="item-icon" src="@/assets/img/tabbar/feilei.svg" alt="">
         <img slot="item-icon-active" src="@/assets/img/tabbar/fenlei-a.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activecolor="pink">
         <img slot="item-icon" src="@/assets/img/tabbar/shop.svg" alt="">
         <img slot="item-icon-active" src="@/assets/img/tabbar/shop-a.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activecolor="green">
         <img slot="item-icon" src="@/assets/img/tabbar/my.svg" alt="">
         <img slot="item-icon-active" src="@/assets/img/tabbar/my-a.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar.vue';
import TabBarItem from '../../common/tabbar/TabBarItem.vue';
export default {
  data () {
    return {
    };
  },
  components:{
      TabBar,
      TabBarItem
  }
}

</script>
<style scoped>
</style>