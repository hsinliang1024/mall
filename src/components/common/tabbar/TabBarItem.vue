<!--  -->
<template>
   <div class="tab-bar-items" @click="itemClick">
     <div v-if="!isActive"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isStyle"><slot name="item-text"></slot></div>
   </div>
</template>

<script>
export default {
  props:['path','activecolor'],
  data () {
    return {
      
    };
  },
methods:{
  itemClick(){
    this.$router.replace(this.path)
  }
},
computed:{
  isActive(){
    return this.$route.path.includes(this.path)
  },
  isStyle(){
    return this.isActive? {color:this.activecolor}:{}
  }
}
}

</script>
<style scoped>
.tab-bar-items{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 12px;
}
.tab-bar-items img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>