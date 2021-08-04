<!--  -->
<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" class="tab-control-item" @click="tabControl(index)">
          <span :class="activeIndex==index?'active':''">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:['titles'],
  data () {
    return {
        activeIndex:0
    }
  },
  methods:{
      tabControl(index){
          this.activeIndex=index;
          this.$emit('tabclick',index);
      }
  }
}

</script>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 44px;
    line-height: 44px;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item>span{
    padding: 3px;
}
.active{
    color: pink;
    border-bottom: 3px solid pink;
}
</style>