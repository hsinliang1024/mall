export default {
    addCart(context, playlodad) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find((item) => {
                    return item.iid == playlodad.iid
                })
                //判断传入进来的数据是否存在，若存在则数量加一，不存在则添加该商品且设置数量为默认1
            if (oldProduct) {
                // oldProduct.count += 1
                context.commit('addCounter', oldProduct)
                resolve('添加成功，在购物车等亲~~')
            } else {
                playlodad.count = 1
                    // context.state.cartList.push(playlodad)
                context.commit('addToCart', playlodad)
                resolve('添加成功，在购物车等亲~~')
            }
        })
    }
}