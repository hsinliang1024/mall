<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
 <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control clonetab"
      @tabclick="tabclick"
      ref="tabcontrol1"
      v-show="isFiexd"
      />
   <scroll class="scroll-content" ref="scroll" @contentScroll="contentScroll" @pullingUp="loadMore">
     <swiper :banners="banners" class="banners" @swiperImageLoad="swiperImageLoad"/>
    <recommend-item :recommends="recommends" />
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabclick="tabclick"
      ref="tabcontrol2"
      />
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
      isbackto:false,
      tabOffsettop:0,
      isFiexd:false,
      saveY:0
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
  computed:{
     
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
      this.$refs.tabcontrol1.activeIndex = index
      this.$refs.tabcontrol2.activeIndex = index
    },
     //返回顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    //内容滚动
    contentScroll(position){
      //1.判断返回顶部是否显示
      this.isbackto = -position.y > 1000
      //2.判断tabcontrol是否吸顶
      this.isFiexd = -position.y >this.tabOffsettop
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
    },
    //轮播图加载
    swiperImageLoad(){
      this.tabOffsettop = this.$refs.tabcontrol2.$el.offsetTop
    }
  },
  activated(){
      setTimeout(()=>{
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      },200)
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scroll.y
    },
};
</script>
<style scoped>
#home{
  height: 100vh;
}
.home-nav {
  background-color: orange;
  color: #fff;
  z-index: 99; 
}
.tab-control {
  background-color: #fff;
}
.scroll-content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.clonetab{
  position: relative;
  z-index: 9;
}
.banners{
  margin-top: 44px;
}
</style>