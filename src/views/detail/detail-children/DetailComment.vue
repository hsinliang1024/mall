<template>
  <div class="DetailComment" v-if="Object.keys(comment).length !==0">
      <div class="Commenttitle">
          <span>宝贝评价</span>
          <span class="iconfont">查看全部 &#xe7f8;</span>
      </div>
      <div class="comment-text">
        <div class="use">
           <img :src="comment.user.avatar" alt="">
          <p>{{comment.user.uname}}</p> 
          <p>13天前</p>
        </div>
        <div class="text">
          <p class="style">{{comment.style}}</p>
          <p>{{comment.content}}</p> 
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    comment:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}

</script>
<style scoped>
.DetailComment{
    padding: 20px 10px 40px 10px;
}
.Commenttitle{
     display: flex;
     justify-content: space-between;
     text-align: center;
}
.Commenttitle span:nth-child(1){
    font-size: 14px;
}
.Commenttitle span:nth-child(2){
    font-size: 12px;
    color: red;
}
.use{
  margin-top: 15px;
}
.use img{
  float: left;
  height: 32px;
  width: 32px;
  border-radius:50% ;
}
.use p{
  font-size: 12px;
  margin-left: 50px;
}
.text{
  margin-top: 20px;
  font-size: 14px;
}
.text .style{
  color: gray;
  font-size: 12px;
  margin: 10px 0;
}
</style>