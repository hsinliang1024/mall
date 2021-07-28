<!--  -->
<template>
  <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
      </a>
      </div>
  </div>
</template>

<script>
export default {
     props:{
      recommends:{type:Array}
  }
}

</script>
<style scoped>
.recommend{
    display: flex;
    padding: 10% 0 10%;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
}
.recommend-item img{
    width: 80%;
    margin-bottom: 20%;
}
</style>