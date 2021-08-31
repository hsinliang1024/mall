<template>
  <div class="shop">
      <div class="shopTitle">
          <img :src="shop.shopLogo" alt="">
          <span>{{shop.name}}</span>
      </div>
      <div class="shopCentent">
          <div class="shopCentent-left">
              <span>{{shop.cSells}}</span>
              <span>{{shop.cGoods}}</span>
              <span>总销量</span>
              <span>全部宝贝</span>
          </div>
          <div class="shopCentent-right">
              <div v-for="item in shop.score" class="score">
                <div class="score-item">
                    <span>{{item.name}}</span>
                    <span>{{item.score}}</span>
                    <span v-if="item.isBetter" :class="{highRed:item.isBetter}">高</span>
                    <span v-else="item.isBetter" :class="{lowGreen:!item.isBetter}">低</span>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
      shop:{
          type:Object
      }
  }
}

</script>
<style scoped>
.shopTitle{
    height: 100px;
    line-height: 100px;
}
.shopTitle img{
    width: 44px;
    height: 44px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid gray;
    margin: 0 10px;
}
.shopCentent{
    display: flex;
}
.shopCentent .shopCentent-left{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    border-right: 1px solid gray;
    align-items: center;
}
.shopCentent .shopCentent-left span{
    width: 50%;
    text-align: center;
    font-size: 12px;
}
.shopCentent .shopCentent-right{
    flex: 1;
    font-size: 12px;
}
.score{
    margin-left: 15px;
}
.score-item{
    display: flex;
}
.score-item span{
    flex: 1;
    text-align: center;
    padding: 5px 0;
}
.highRed{
    color: red;
}
.lowGreen{
    color: green;
}
</style>