<template>
  <div id="detail">
    <detail-navbar class="detail-navbar" @navClick="navClick" ref="nav"></detail-navbar>
    <scroll class="detail-scroll" ref="detailscroll" @contentScroll="contentScroll">
      <detail-swiper :topImage="topImage"/>
    <detail-content :goods="goods"/>
    <detail-shop :shop="shop"/>
    <detail-image :imageInfo="imageInfo" @imgLoad="imgLoad"/>
    <detail-params ref="params"/>
    <detail-comment :comment="comment" ref="comment"/>
    <good-list :goods="recommend" ref="recommend"/>
    </scroll>
    <detail-tabbar @addShop="addShop" @collect="collect" :collectStyle="collectStyle" :collectText="collectText"/>
    <back-top v-show="isbackto" @click.native="DetailbackTop"/>
    <toast :msg="msg" :isshow="show"/>
  </div>
</template>

<script>
import DetailNavbar from './detail-children/DetailNavbar.vue';
import {getDetail,Goods,getRecommend} from '../../network/detail'
import DetailSwiper from './detail-children/DetailSwiper.vue';
import DetailContent from './detail-children/DetailContent.vue';
import DetailShop from './detail-children/DetailShop.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
import DetailImage from './detail-children/DetailImage.vue';
import DetailComment from './detail-children/DetailComment.vue';
import GoodList from '../../components/content/goods/GoodList.vue';
import DetailParams from './detail-children/DetailParams.vue';
import DetailTabbar from './detail-children/DetailTabbar.vue';
import BackTop from '../../components/content/backTop/BackTop.vue';
import Toast from '../../components/common/toast/Toast.vue';
export default {
  name:"Detail",
  components: { 
    DetailNavbar,
    DetailSwiper, 
    DetailContent, 
    DetailShop, 
    Scroll, 
    DetailImage, 
    DetailComment, 
    GoodList, 
    DetailParams,
    DetailTabbar,
    BackTop,
    Toast },
  data(){
    return {
        iid:null,
        topImage:null,
        goods:{},
        shop:{},
        imageInfo:{},
        comment:{},
        recommend:[],
        NavScrollY:[],
        getThemeTopY:null,
        isbackto:false,
        show:false,
        msg:'',
        collectStyle:false,
        collectText:'收藏'
    };
  },
  created(){
    //1.保存传入的iid
      this.iid = this.$route.params.iid;
    //2.根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      const data =res.result;
      //1.提取轮播图数据
      this.topImage = data.itemInfo.topImages
      //提取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //2.提取店铺信息
      this.shop = data.shopInfo
      //3.提取图片详情
      this.imageInfo = data.detailInfo.detailImage[0].list
      //提取宝贝评价
      if(data.rate.cRate !==0){
        this.comment = data.rate.list[0]
      }
      //提取推荐商品
      getRecommend().then((respone)=>{
      this.recommend = respone.data.list
      })
    })
    //4.赋值
    this.getThemeTopY = this.debounce(()=>{
     this.NavScrollY =[];
     this.NavScrollY.push(0);
     this.NavScrollY.push(this.$refs.params.$el.offsetTop);
     this.NavScrollY.push(this.$refs.comment.$el.offsetTop);
     this.NavScrollY.push(this.$refs.recommend.$el.offsetTop);
    })
},
  methods:{
    navClick(index){
      this.$refs.detailscroll.scrollTo(0,-this.NavScrollY[index]+43,500)
    },
    imgLoad(){
      this.getThemeTopY()
    },
    //防抖函数
    debounce(fn,delay=100){
      let timer = null;
      return function(...args){
        if(timer){
        clearTimeout(timer)
      }
     timer = setTimeout(()=>{
       fn(...args)
     },delay)
      }
    },
    contentScroll(position){
      const sc = -position.y+44
      if(sc>0 && sc<=this.NavScrollY[1]){
        this.$refs.nav.currentIndex = 0
      }else if(sc>this.NavScrollY[1] && sc<=this.NavScrollY[2]){
        this.$refs.nav.currentIndex = 1
      }else if(sc>this.NavScrollY[2] && sc<=this.NavScrollY[3]){
        this.$refs.nav.currentIndex = 2
      }else{
        this.$refs.nav.currentIndex = 3
      }
      //1.判断返回顶部是否显示
      this.isbackto = -position.y > 1000
    },
    //点击返回顶部
    DetailbackTop(){
      this.$refs.detailscroll.scrollTo(0,0,500)
    },
    //加入购物车
    addShop(){
      //获取添加的商品数据
      const product = {};
      product.image =this.topImage[0];
      product.title =this.goods.title;
      product.desc =this.goods.desc;
      product.price =this.goods.realPrice;
      product.iid = this.iid;
      console.log(product)
      //将商品添加到购物车
      //vuex管理
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(res => {
        this.show = true
        this.msg = res
        setTimeout(()=>{
          this.show = false
          this.msg = ''
        },1500)
      })
    },
    //收藏按钮
    collect(){
      this.collectStyle = !this.collectStyle
      if(this.collectStyle){
        this.collectText = '已收藏'
        this.msg = '收藏成功~'
      }else{
        this.collectText = '收藏'
        this.msg = '取消收藏~'
      }
      this.show = true
      setTimeout(()=>{
      this.msg = ''
      this.show = false
      },1500)
    }
  }
}

</script>
<style scoped>
#detail{
  position: relative;
  z-index: 8;
  background-color: #fff;
  height: 100vh;
}
.detail-scroll{
  height: calc(100% - 44px);
}
.detail-navbar{
  position: relative;
  z-index: 9;
  background-color: white;
}
</style>