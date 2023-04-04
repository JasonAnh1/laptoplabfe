import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export const store = new Vuex.Store({
    state:{
        userLogined:{
            accessToken:'',
            name:'',
            imageUrl: '',
            roles:[{
                name:''
            }]
        },
        
        listProduct:[],
        listLocation:[],
        listCategory:[],
        listSupplier:[],
        categories: [],
        listProductForUser: [],
        detailProduct: {},
        cart: [],
        province: [],
        listOrder:[]

    },
    getters: {

    },
    mutations: {
        loginServer(state, user) {
            state.userLogined = user;

            const accessToken ="Bearer "+ state.userLogined.accessToken
         
            console.log(state.userLogined.roles[0].name)
            localStorage.setItem('accessToken',accessToken);
            localStorage.setItem('role',state.userLogined.roles[0].name)
            localStorage.setItem('username',state.userLogined.name);
            localStorage.setItem('userimg',state.userLogined.imageUrl);
        },
        getListProduct(state, lstProduct) {
            state.listProduct = lstProduct;
        },
        getListSupplier(state,lstSupplier){
            state.listSupplier = lstSupplier;
        },
        getListLocation(state,lstLocation){
            state.listLocation = lstLocation;
        },
        getListCategory(state,lstCategory){
            state.listCategory = lstCategory;
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
            const accessToken = "Barear " + state.userLogined.accessToken
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('role', state.userLogined.roles[0].name)
        },
        getProvince(state, pv) {
            state.province = pv;
        },
        getListOrder(state, lstOrder) {
            state.listOrder = lstOrder;
        },
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
        }
        ,async fetchDeleteProduct(context,payload){
            const response = await axios.get('api/v1/product/delete',{
                params:{id:payload.id}
            });
            console.log(response.data.body);
            this.dispatch('fetchListProduct',payload.page);
            window.alert("Xóa thành công")
        }
        ,async fetchListSupplier(context){
            const response = await axios.get('api/supplier/get');
            console.log(response.data.body);
            context.commit('getListSupplier',response.data.body);
        }
        ,async fetchListLocation(context){
            const response = await axios.get('api/location/get');
            console.log(response.data.body);
            context.commit('getListLocation',response.data.body);
        }
        ,async fetchListCategory(context){
            const response = await axios.get('api/product_category/get');
            console.log(response.data.body);
            context.commit('getListCategory',response.data.body);
        }
        ,async fetchAddProduct(context,payload){
            const responseImg = await axios.post('api/v1/file/upload-image',payload.img, {
                header:{
                    'Content-Type' : 'multipart/form-data'
                }
            })
            payload.product.mediaId = responseImg.data.body.id
            const response = await axios.post('api/admin/v1/product/add',payload.product, {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            console.log(response.data.body);
            this.dispatch('fetchListProduct',0);
            window.alert("Thêm thành công")
        }
        ,async fetchUpdateProductNoImg(context,product){
            const response = await axios.post('api/admin/v1/product/update',product, {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            console.log(response.data.body);
            this.dispatch('fetchListProduct',0);
            window.alert("Cập nhập thành công")
        }
        ,async fetchUpdateProductWithImg(context,payload){
            const responseImg = await axios.post('api/v1/file/upload-image',payload.img, {
                header:{
                    'Content-Type' : 'multipart/form-data'
                }
            })
            payload.product.mediaId = responseImg.data.body.id            
            const response = await axios.post('api/admin/v1/product/update',payload.product, {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            console.log(response.data.body);
            this.dispatch('fetchListProduct',0);
            window.alert("Cập nhập thành công")
        }
        ,async fetchListOrder(context){
            const response = await axios.get('api/admin/v1/order/get', {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            console.log(response.data.body);
            context.commit('getListOrder',response.data.body);
        }
        ,async fetchUpdateOrder(context,payload){
            const response = await axios.post('api/admin/v1/order/update', payload, {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            console.log(response.data.body);
            this.dispatch('fetchListOrder');
        }
    }




})