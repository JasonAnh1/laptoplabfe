import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export const store = new Vuex.Store({
    state:{
        userLogined:{
            accessToken:'',
            name:'',
            roles:[{
                name:''
            }]
        },
      
        listProduct:[]
        // accessToken:''
    },
    getters: {

        
    },
    mutations:{
        loginServer(state,user){
            state.userLogined = user;
            const accessToken ="barear "+ state.userLogined.accessToken
         
            console.log(state.userLogined.roles[0].name)
            localStorage.setItem('accessToken',accessToken);
            localStorage.setItem('role',state.userLogined.roles[0].name)
           
        },
        getListProduct(state,lstProduct){
            state.listProduct = lstProduct;
        },
        logOut(state){
            state.userLogined.roles[0].name=''
        }
    },
    actions:{
        async fetchLogin(context,phone,password){
            const response = await axios.post('api/v1/auth/signin',
            phone, password);
            context.commit('loginServer',response.data);
        }
        ,async fetchListProduct(context,pageRequest){
            const response = await axios.get('api/v1/product/get',{
                params:{page:pageRequest}
            });
            console.log(response.data.body);
            context.commit('getListProduct',response.data.body);
        }
    }
    



})