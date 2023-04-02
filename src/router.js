import Vue from "vue"
import Router from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import ListProduct from './components/list_Product/ListProduct.vue'
import HomeContent from './components/HomeContent.vue'
import ListOrder from './components/ListOrder.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {path: '/HomeContent', component: HomeContent},
        {path: '/LoginForm', component: LoginForm},
        {path: '/ListProduct', component: ListProduct},
        {path: '/ListOrder', component: ListOrder},
    ]
})