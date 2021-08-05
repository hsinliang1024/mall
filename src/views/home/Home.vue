<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

   <scroll class="scroll-content" ref="scroll" @contentScroll="contentScroll" @pullingUp="loadMore">
     <swiper :banners="banners" class="banners" />
    <recommend-item :recommends="recommends" />
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabclick="tabclick"/>
    <good-list :goods="goods[currentType].list" />
   </scroll>
   
   <back-top @click.native="backClick" v-show="isbackto"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "./home-children/Swiper.vue";
import RecommendItem from "./home-children/RecommendItem.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import GoodList from "../../components/content/goods/GoodList.vue";
import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/content/backTop/BackTop.vue';

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: "pop",
      isbackto:false
    };
  },
  components: {
    NavBar,
    Swiper,
    RecommendItem,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    //请求商品列表数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 监听事件点击
     */
    //点击流行、精选
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
     //返回顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    //内容滚动
    contentScroll(position){
      this.isbackto = -position.y > 1000
    },

    /**
     * 数据请求
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        
        this.$refs.scroll.finishPullUp()
      })
    },

    //加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    }
  },
};
</script>
<style scoped>
#home{
  height: 100vh;
  /* position: relative; */
}
.home-nav {
  background-color: orange;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 9;
}
.banners {
  margin-top: 44px;
}

.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.scroll-content{
  /* height: 300px; */
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
}
</style>