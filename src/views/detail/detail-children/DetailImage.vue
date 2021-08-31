<template>
  <div>
      <div v-for="item in imageInfo">
          <img :src="item" alt="" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
  props:['imageInfo'],
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
}

</script>
<style scoped>
img{
    width: 100%;
}
</style>