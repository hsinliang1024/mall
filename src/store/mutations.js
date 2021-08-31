export default {
    addCounter(state, payload) {
        payload.count++
            payload.disabled = false
    },
    addToCart(state, payload) {
        payload.checked = true //添加选择
        payload.disabled = true //添加禁用
        state.cartList.push(payload)
    }
}