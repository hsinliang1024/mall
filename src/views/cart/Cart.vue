<!--  -->
<template>
<div id="Cart">
  <!-- 头部导航栏 -->
<nav-bar>
  <div slot="center">购物车({{cartLength}})</div>
</nav-bar>
<!-- 购物车列表 -->
<cart-list />
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import CartList from './cart-children/cartList.vue';

import { mapGetters } from 'vuex'
export default {
  components: { NavBar, CartList },
  data () {
    return {
    };
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}

</script>
<style scoped>
</style>