<!--  -->
<template>
   <div class="block">
    <el-carousel height="12rem">
      <el-carousel-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
            <img :src="item.image" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props:{
      banners:{type:Array}
  },
  data(){
      return {
          
      }
  }
}

</script>
<style scoped>
.el-carousel-item{
    display: flex;
}
.el-carousel-item a{
    width: 100%;
    /* height: 180px; */
}
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
  img{
      width: 100%; 
       height: 100%;
  }
</style>