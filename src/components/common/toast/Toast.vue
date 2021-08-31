<template>
  <div class="toast" v-show="isshow">
      <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  props:{
    msg:{
      type:String,
      default:''
    },
    isshow:{
      type:Boolean,
      default:false
    }
  }

}

</script>
<style scoped>
.toast{
    font-size: 12px;
    width: 50%;
    height: 50px;
    background-color: black;
    position: fixed;
    color: white;
    top: 50%;
    left: 50%;
    opacity: .7;
    text-align: center;
    line-height: 50px;
    transform: translate(-50%,-50%);
}
</style>