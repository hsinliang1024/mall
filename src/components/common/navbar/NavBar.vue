<!--  -->
<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

}

</script>
<style scoped>
.nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    width: 100%;
    z-index: 99;
}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
}
</style>