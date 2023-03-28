import Vue from "vue"
import Router from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import ListProduct from './components/ListProduct.vue'
import HomeContent from './components/HomeContent.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {path: '/HomeContent', component: HomeContent},
        {path: '/LoginForm', component: LoginForm},
        {path: '/ListProduct', component: ListProduct},
    ]
})