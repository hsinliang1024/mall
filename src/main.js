import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

//使用懒加载
Vue.use(VueLazyload)
    // const loadimage = require('./assets/img/lazy/lazyimg.jpg')

Vue.use(VueLazyload, {
        loading: require('./assets/img/lazy/lazyimg.jpg'),
        attempt: 1
    })
    //使用ElementUI
Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')