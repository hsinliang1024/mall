<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
      <ul class="content">
		    <li>heel1</li>
		    <li>heel2</li>
		    <li>heel3</li>
		    <li>heel4</li>
		    <li>heel5</li>
			<li>heel1</li>
			<li>heel2</li>
			<li>heel3</li>
			<li>heel4</li>
			<li>heel5</li>
			<li>heel1</li>
			<li>heel2</li>
			<li>heel3</li>
			<li>heel4</li>
			<li>heel5</li>
			<li>heel1</li>
			<li>heel2</li>
			<li>heel3</li>
			<li>heel4</li>
			<li>heel5</li>
			<li>heel1</li>
			<li>heel2</li>
			<li>heel3</li>
			<li>heel4</li>
			<li>heel5</li>
			<li>heel1</li>
			<li>heel2</li>
			<li>heel3</li>
			<li>heel4</li>
			<li>heel5</li>
      </ul>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

// 注册插件
BScroll.use(Pullup)

export default {
  data () {
    return {
      scroll:null
    };
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper, {
      pullUpLoad: true,
      probeType:3
    })
    this.scroll.on('scroll',(position)=>{
      // console.log(position)
    })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多')
    })
  },
}

</script>
<style scoped>
.wrapper{
  height: 300px;
  background-color: pink;
}
</style>