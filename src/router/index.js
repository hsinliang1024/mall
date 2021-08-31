import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import Category from '@/views/category/Category.vue'
import Detail from '@/views/detail/Detail.vue'
import Cart from '@/views/cart/Cart.vue'
import Profile from '@/views/profile/Profile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/detail/:iid',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router