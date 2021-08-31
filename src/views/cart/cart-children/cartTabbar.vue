<!--  -->
<template>
  <div class="cart-tabbar">
      <div class="checkedall">
          <input type="checkbox" :checked="checkedAll" @click="checkAllClick" class="check">
          <span>全选</span>
      </div>
      <span class="yx">已选{{totalCount}}件</span>
      <span class="total">合计：<span>￥{{totalPrice}}元</span></span>
      <div class="settlement">结算</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods:{
      checkAllClick(){
          if(this.checkedAll){ //全部商品选中
              this.$store.state.cartList.forEach(item => {
                  item.checked = false
              })
          }else{
               this.$store.state.cartList.forEach(item => {
                  item.checked = true
              })
          }
      }
  },
  computed:{
      totalPrice(){
          return this.$store.state.cartList.filter( item => {
              return item.checked == true
          }).reduce(function(prev,cur){
              return prev + cur.count * cur.price
          },0).toFixed(2)
      },
      totalCount(){
          return this.$store.state.cartList.filter(item => {
              return item.checked
          }).length
      },
      checkedAll(){
          return this.$store.state.cartList.every(function(item){
              return item.checked
          })
      }
  }
}

</script>
<style scoped>
.cart-tabbar{
    position: fixed;
    bottom: 49px;
    height: 49px;
    width: 100%;
    font-size: 14px;
    background-color: #eee;
    display: flex;
    align-items: center;
    text-align: center;
    /* justify-items: center; */
}
.checkedall{
    width: 20%;
}
.checkedall input{
    vertical-align: middle;
}
.cart-tabbar .yx{
    width: 60px;
}
.total{
    width: 150px;
}
.total span{
    color: red;
}
.settlement{
    flex-grow: 1;
    background-color: red;
    padding: 10px 0;
    color:white;
    margin-right: 5px;
    border-radius: 5px;
}

.check:checked {
	background:orange
}
.check{
	width:16px;
	height:16px;
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
	top:4px;
	left:1px;
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