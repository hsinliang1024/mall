<template>
  <div class="content" v-if="Object.keys(goods).length !== 0">
      <div class="goodstitle">{{goods.title}}</div>
      <div class="price">
          <span class="newPrice">{{goods.newPrice}}</span>
          <span class="oldPrice">{{goods.oldPrice}}</span>
          <span class="activity">活动价</span>
      </div>
      <div class="columns">
          <span class="columns-item" v-for="item in goods.columns">{{item}}</span>
      </div>
      <div class="services">
          <div class="services-item" v-for="item in goods.services">
              <img :src="item.icon" alt="">
              <span>{{item.name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
}

</script>
<style scoped>
.content{
    padding: 0 10px;
}
.goodstitle{
    padding: 10px 0;
}
.newPrice{
    color: red;
}
.oldPrice{
    color: gray;
    text-decoration: line-through;
    font-size: 12px;
    margin:0 10px;
}
.content .price .activity{
    background: red;
    color: white;
    border-radius: 10px;
    font-size: 6px;
    text-align: center;
    line-height: 17px;
    height: 17px;
    width: 50px;
    display: inline-block;
}
.columns{
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    margin:20px 0 10px 0;
}
.columns .columns-item{
    width: 20%;
}
.columns .columns-item:nth-child(2){
    flex-grow: 1;
    text-align: center;
}
.services{
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    border-top: 3px solid #eee;
    border-bottom: 3px solid #eee;
    padding: 10px 0;
}
.services-item{
    width: 33.3%;
    font-size: 10px;
    padding-top: 5px;
}
.services .services-item img{
    width: 12px;
    vertical-align: middle;
}
</style>