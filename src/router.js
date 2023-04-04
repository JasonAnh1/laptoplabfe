import Vue from "vue"
import Router from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import ListProduct from './components/list_Product/ListProduct.vue'
import HomeContent from './components/HomeContent.vue'
import ListOrder from './components/list_Order/ListOrder.vue'
import DetailProduct from './components/DetailProduct.vue'
import RegisterForm from './components/RegisterForm.vue'
import ShopCart from './components/ShopCart.vue'
Vue.use(Router)

export default new Router({ 
    routes: [
        { path: '/HomeContent', component: HomeContent },
        { path: '/LoginForm', component: LoginForm },
        { path: '/ListProduct', component: ListProduct },
        { path: '/DetailProduct', component: DetailProduct },
        { path: '/RegisterForm', component: RegisterForm },
        { path: '/ShopCart', component: ShopCart },
        {path: '/ListOrder', component: ListOrder},
    ]
})