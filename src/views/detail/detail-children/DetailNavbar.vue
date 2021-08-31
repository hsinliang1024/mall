<template>
  <div>
      <nav-bar>
          <div slot="left">
              <p class="iconfont back" @click="backClick">&#xe7f8;</p>
          </div>
          <div slot="center" class="title">
              <div class="titleItem" 
              v-for="(item,index) in title" 
              :class="{titleCurrent:currentIndex===index}"
              @click="titleClick(index)"
              >{{item}}</div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
export default {
  components: { NavBar },
  data () {
    return {
        title:['商品','参数','评论','推荐'],
        currentIndex:0
    };
  },
  methods:{
      titleClick(index){
          this.currentIndex=index;
          this.$emit('navClick',index)
      },
      backClick(){
          this.$router.back()
      }
  }
}

</script>
<style scoped>
.title{
    display: flex;
    font-size: 14px;
}
.titleItem{
    flex:1
}

.back{
    transform:rotate(-180deg);
}
.titleCurrent{
    color:red
}
</style>