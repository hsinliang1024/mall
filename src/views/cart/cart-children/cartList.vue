<template>
  <div class="cartList">
      <!-- 当购物车有商品时显示数据 -->
      <div v-if="$store.state.cartList.length>0">
          <div class="cartBox" v-for="(item,index) in cartList" :key="index">
          <div class="input-box">
              <input type="checkbox" :checked="item.checked" @click="checkdeClick(index)" class="check">
          </div>
          <div class="box-img">
              <img :src="item.image" alt="">
          </div>
          <div class="box-right">
              <span class="text">{{item.title}}</span>
              <span class="price">￥{{item.price}}</span>
              <div class="count">
                  <el-button class="reduce" @click="reducecount(index)" :disabled="item.disabled">-</el-button>
                  <span class="count-text">{{item.count}}</span>
                  <el-button class="add" @click="addcount(index)">+</el-button>
              </div>
          </div>
      </div>
      <cart-tabbar />
      </div>
      <!-- 当没有数据显示购物车为空 -->
      <div class="shopnull" v-else>
          <img src="@/assets/img/cart/cartnull.jpg" alt="">
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cartTabbar from './cartTabbar.vue'
export default {
  components: { cartTabbar },
    data(){
        return {
        }
    },
  computed:{
      ...mapGetters(['cartList'])
  },
  methods:{
      checkdeClick(index){
          this.cartList[index].checked = !this.cartList[index].checked
      },
      addcount(index) {
        this.cartList[index].count += 1
        this.judge(index)
    },
      reducecount(index){
          if(this.cartList[index].count<=1){
              alert("该宝贝不能减少了呦~")
          }else{
        this.cartList[index].count -= 1
        }
        this.judge(index)
    },
    //判断是否使用禁用按钮
    judge(index){
        if(this.cartList[index].count>1){
            this.cartList[index].disabled = false
        }else{
            this.cartList[index].disabled = true
        }
    }
    //全选按钮

  }
}

</script>
<style scoped>
.cartBox{
    display: flex;
    height: 100px;
    overflow: hidden;
    margin-bottom: 20px;
}
.cartBox .input-box{
    width: 10%;
    margin-top: 40px;
    text-align: center;
}
.box-img{
    width: 30%;
    overflow: hidden;
    border-radius: 10px;
}
.box-img img{
    width: 100%;
}
.cartBox .box-right{
    width: 60%;
    position: relative;
}
.cartList .cartBox .box-right .text{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;
    color: black;
    width: 90%;
}
.price{
    position: absolute;
    bottom: 10%;
    left: 10%;
    right: 0;
    color: red;
}
.count{
    position: absolute;
    bottom: 10%;
    right: 5%;
}
.reduce,.add{
    padding: 6px 10px;
    font-size: 16px;
}
.count-text{
    padding: 5px 8px;
    border: 1px solid #eee;
}

.shopnull img{
    width: 100%;
}


/* 单选框样式 */
.check:checked {
	background:orange
}
.check{
	width:20px;
	height:20px;
	background-color:#ffffff;
	border:solid 1px #dddddd;
	-webkit-border-radius:50%;
	border-radius:50%;
	font-size:0.8rem;
	margin:0;
	padding:0;
	position:relative;
	display:inline-block;
	vertical-align:top;
	cursor:default;
	-webkit-appearance:none;
	-webkit-user-select:none;
	user-select:none;
	-webkit-transition:background-color ease 0.1s;
	transition:background-color ease 0.1s;
}
.check:checked::after {
	content:'';
	top:5px;
	left:5px;
	position:absolute;
	background:transparent;
	border:#fff solid 2px;
	border-top:none;
	border-right:none;
	height:6px;
	width:10px;
	-moz-transform:rotate(-45deg);
	-ms-transform:rotate(-45deg);
	-webkit-transform:rotate(-45deg);
	transform:rotate(-45deg);
}
</style>