<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
			<slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'

// 注册插件
BScroll.use(Pullup)
BScroll.use(ObserveDOM)

export default {
  data () {
    return {
      scroll:null,
    };
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper, {
      pullUpLoad: true,
      probeType:3,
      observeDOM:true,
      click:true
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('contentScroll',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}

</script>
<style scoped>
</style>