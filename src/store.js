import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export const store = new Vuex.Store({
    state: {
        userLogined: {},
        listProduct: [],

        categories: [],

        listProductForUser: [],

        detailProduct: {},

        cart: [],

        province: [],
        district: [],
        commune: [],
        
        banner:[]
    },
    getters: {


    },
    mutations: {
        loginServer(state, user) {
            state.userLogined = user;
            const accessToken = "barear " + state.userLogined.accessToken


            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('role', state.userLogined.roles[0].name)


        },
        getListProduct(state, lstProduct) {
            state.listProduct = lstProduct;
        },
        logOut(state) {
            state.userLogined.roles[0].name = ''
        },
        getAllCategories(state, categories) {
            state.categories = categories;
        },
        getListProductForUser(state, lstProduct) {
            state.listProductForUser = lstProduct;
        },
        getDetailProductForUser(state, product) {
            state.detailProduct = product;
        },
        register(state, userRegisted) {
            state.userLogined = userRegisted;
            const accessToken = "barear " + state.userLogined.accessToken


            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('role', state.userLogined.roles[0].name)

        },
        getProvince(state, pv) {
            state.province = pv;
        },
        getDistrict(state, dt) {
            state.district = dt;
        },
        getCommune(state, cm) {
            state.commune = cm;
        },
        getBanners(state,bn){
            state.banner = bn;
        }
    },

    actions: {
        async fetchLogin(context, phone, password) {
            const response = await axios.post('api/v1/auth/signin',
                phone, password);

            context.commit('loginServer', response.data);
        }

        , async fetchListProduct(context, pageRequest) {
            const response = await axios.get('api/v1/product/get', {
                params: { page: pageRequest }
            });
            console.log(response.data.body);
            context.commit('getListProduct', response.data.body);
        },

        async fetchListProductForUser(context, pageRequest) {
            var response;
            response = await axios.get('api/v1/product/get', {
                params: { page: pageRequest }
            });
            console.log(response.data.body);
            context.commit('getListProductForUser', response.data.body);
        },

        async fetchListProductForUser2(context, { pageRequest, cateId }) {
            // var response;
            const response = await axios.get('api/v1/product/get', {
                params: { page: pageRequest, categoryId: cateId }
            });
            console.log(pageRequest + ' ' + cateId);
            context.commit('getListProductForUser', response.data.body);
        },

        async fetchCategories(context) {
            const response = await axios.get('api/product_category/get');
            // console.log(response.data.accessToken)
            context.commit('getAllCategories', response.data.body);
        },
        async fetchGetDetailProduct(context, productId) {
            const response = await axios.get('api/v1/product/detail', {
                params: { id: productId }
            });


            context.commit('getDetailProductForUser', response.data.body)
        },

        async fetchRegister(context, phone, password, email, name) {
            const response = await axios.post('api/v1/auth/signup',
                phone, password, email, name);
            
            context.commit('register', response.data.body);

        },
        async fetchProvinces(context) {
            const response = await axios.get('https://api.mysupership.vn/v1/partner/areas/province');

            context.commit('getProvince', response.data.results)
        },
        async fetchDistrict(context, code) {
            const response = await axios.get('https://api.mysupership.vn/v1/partner/areas/district',
                { params: { province: code } });

            context.commit('getDistrict', response.data.results)
        },
        async fetchCommune(context, code) {
            const response = await axios.get('https://api.mysupership.vn/v1/partner/areas/commune',
                { params: { district: code } });

            context.commit('getCommune', response.data.results)
        },
        async fetchBanner(context){
            const response = await axios.get('api/v1/banner/get',
            { params: { type: 'PRODUCT' } });

        context.commit('getBanners', response.data.body)
        }
       
    }




})