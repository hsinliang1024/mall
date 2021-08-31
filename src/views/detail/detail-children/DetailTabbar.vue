<template>
  <div class="DetailTabbar">
    <a class="Tab-Item">
      <p class="iconfont">&#xe74a;</p>
      <p class="text">店铺</p>
    </a>
    <a class="Tab-Item">
      <!-- <p class="iconfont kf">&#xe615;</p> -->
      <img src="../../../assets/img/Detail/kf.png" alt="" class="kf">
      <p class="text">客服</p>
    </a>
    <a class="Tab-Item" @click="collect">
      <p class="iconfont" :class="{'iscollect':collectStyle}">&#xe505;</p>
      <p class="text">{{collectText}}</p>
    </a>
    <a class="addShop" @click="addShop">
        <p>加入购物车</p>
    </a>
     <a class="BuyNow">
        <p>立即购买</p>
    </a>
  </div>
</template>

<script>
export default {
  props:{
        collectStyle:{
          type:Boolean,
          default:false
        },
        collectText:{
          type:String,
          default:'收藏'
        }
  },
  data() {
    return {
    };
  },
  methods:{
    addShop(){
      this.$emit('addShop')
    },
    collect(){
      this.$emit('collect')
    }
  }
};
</script>
<style scoped>
.DetailTabbar {
  height: 44px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  align-items: center;
}
.DetailTabbar .Tab-Item {
  flex: 1;
  text-align: center;
  border-right: 1px solid #eee;
}
.text {
  font-size: 12px;
}
.addShop,.BuyNow{
    font-size: 12px;
    background-color:papayawhip;
    height: 44px;
    width: 25%;
    line-height: 44px;
    text-align: center;
    color: red;
}
.BuyNow{
    background-color: deeppink;
    color: white;
}
.DetailTabbar .Tab-Item .kf{
    width: 16px;
}
.iscollect{
  color: orange;
}
</style>