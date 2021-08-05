<!--  -->
<template>
  <div class="backtop">
      <!-- <img src="../../../assets/img/backTop/huidingbu.png" alt=""> -->
      <span class="iconfont">&#xe604;</span>
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
@import '../../../assets/font_s1q8np0a1p/iconfont.css';
@font-face {
    font-family: 'iconfont';
    src: url('../../../assets/font_s1q8np0a1p/iconfont.ttf?t=1628136539356') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.backtop{
    position: fixed;
    right: 10px;
    bottom: 60px;
    height: 32px;
    width: 32px;
    background-color: #eee;
    border-radius: 32px;
    text-align: center;
    line-height: 32px;
    color: red;
}

</style>