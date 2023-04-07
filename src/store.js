import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
import Swal from 'sweetalert2'
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
        listOrder:[],
        province: [],
        district: [],
        commune: [],

        totalProduct: 0,
        curPageAdmin: 1,
        strSearchAdmin: "",

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
            localStorage.setItem('ownerId',state.userLogined.id);
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
        getDistrict(state, dt) {
            state.district = dt;
        },
        getCommune(state, cm) {
            state.commune = cm;
        },
        getTotalProduct(state, tp) {
            state.totalProduct = tp;
        },
        getCurPageAdmin(state, page) {
            state.curPageAdmin = page;
        },
        getStrSearchAdmin(state, str) {
            state.strSearchAdmin = str
        },
    },
    actions: {
        async fetchLogin(context, phone, password) {
            const response = await axios.post('api/v1/auth/signin',
                phone, password);

            context.commit('loginServer', response.data);
        }
        , async fetchListProduct(context) {
            const response = await axios.get('api/v1/product/get', {
                params: { page: context.state.curPageAdmin-1, name: context.state.strSearchAdmin }
            });
            context.commit('getListProduct', response.data.body);
            context.commit('getTotalProduct', response.data.totalRecord);
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
        }
        ,async fetchDeleteProduct(context,payload){
            const response = await axios.get('api/v1/product/delete',{
                params:{id:payload}
            });
            console.log(response.data.body);

            context.commit('getCurPageAdmin',1)
            context.commit('getStrSearchAdmin',"")

            this.dispatch('fetchListProduct');
            Swal.fire(
                'Deleted!',
                'Product has been deleted.',
                'success'
              )
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

            context.commit('getCurPageAdmin',1)
            context.commit('getStrSearchAdmin',"")

            this.dispatch('fetchListProduct');
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product added successfully!',
              });
        }
        ,async fetchUpdateProductNoImg(context,payload){
            const response = await axios.post('api/admin/v1/product/update',payload, {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            console.log(response.data.body);

            context.commit('getCurPageAdmin',1)
            context.commit('getStrSearchAdmin',"")

            this.dispatch('fetchListProduct');
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product updated successfully!',
              });
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

            context.commit('getCurPageAdmin',1)
            context.commit('getStrSearchAdmin',"")

            this.dispatch('fetchListProduct');
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product updated successfully!',
              });
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
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Order updated successfully!',
              });
        }

        
    }


})