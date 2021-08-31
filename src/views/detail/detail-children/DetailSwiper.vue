<template>
   <div class="block">
     <el-carousel height="15rem">
      <el-carousel-item v-for="(item,index) in topImage" :key="index">
        <a href="">
            <img :src="item" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    props:['topImage'],
  data () {
    return {
    };
  },

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
img{
    width: 100%; 
  }
</style>