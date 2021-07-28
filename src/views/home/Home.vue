<!--  -->
<template>
<div id="home">
<nav-bar class="home-nav">
  <div slot="center">购物街</div>
</nav-bar>
<swiper :banners="banners"/>
<recommend-item :recommends="recommends"/>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getHomeMultidata} from "@/network/home.js"
import Swiper from './home-children/Swiper.vue'
import RecommendItem from './home-children/RecommendItem.vue'

export default {
  data(){
    return{
      banners:[],
      recommends:[],
    }
  },
  components:{
    NavBar,
    Swiper,
    RecommendItem
  },
  created(){
    //1.请求多个数据
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  }
}

</script>
<style scoped>
.home-nav{
  background-color: orange;
  color: #fff;
}
</style>