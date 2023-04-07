<template>
    <div>
        
        <div class="form-group has-search" style="width: 250px; position: absolute; top: 40px; right: 60px;">
            <span class="fa fa-search form-control-feedback"></span>
            <input v-bind:value="strSearch" @input="searchArr($event.target.value)" type="text" class="form-control" placeholder="Search" style="border: 2px solid #808080;">
        </div>
        <h2>List Product</h2>
        <hr>
        <div class="table-responsive">
            <div class="tableFixHead" style="height: 800px; overflow: scroll; position: relative;">
                <table class="table table-striped table-dark text-white table-hover" style="margin-bottom: 0;">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Supplier</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in listProduct" v-bind:key="item.id">
                            <td>
                                <h6>{{item.title}}</h6>
                            </td>
                            <td>
                                <div class="d-flex align-items-center"><img class="" :src=item.imageUrl width="100px" height="80px"></div>
                            </td>
                            <td>{{item.supplier.title}}</td>
                            <td>{{ item.price }} VND</td>
                            <td>{{ item.category.title }}</td>
                            <td>{{item.location.address}}</td>
                            <td>{{item.remain}}</td>
                            <td style="width: 200px; padding: auto;">
                                <DetailProduct v-bind:item=item></DetailProduct>
                                <button v-on:click="deleteProduct(item.id)" class="btn btn-danger" role="button" style="color: white; margin-left: 15px;">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style=" display: flex; justify-content: center; width: 100%; position: relative;">
                    <b-pagination
                    :value="page"
                    :total-rows="count"
                    :per-page=5
                    first-text="First"
                    prev-text="Prev"
                    next-text="Next"
                    last-text="Last"
                    @change="handlePageChange"
                    ></b-pagination>
                    <AddProduct></AddProduct>
            </div>
        </div>
    </div>
</template>

<script>

import DetailProduct from './DetailProduct.vue';
import AddProduct from './AddProduct.vue';
import Swal from 'sweetalert2'

export default {
//   name: 'ListProduct',
    data() {
        return {

        }
    },
    computed:{
        listProduct() {
            // return this.$store.state.listProduct.filter(item => item.title.toLowerCase().match(this.search.toLowerCase()))
            return this.$store.state.listProduct
        },
        count(){
            return this.$store.state.totalProduct
        },
        page(){
            return this.$store.state.curPageAdmin
        },
        strSearch() {
            return this.$store.state.strSearchAdmin
        }
    },
    created(){
        this.$store.state.curPageAdmin = 1;
        this.$store.state. strSearchAdmin = "";
        this.$store.dispatch('fetchListProduct');
    },
    methods:{
        deleteProduct(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    this.$store.dispatch('fetchDeleteProduct',id)
                    }
                })
            
        },
        handlePageChange(value) {
            this.$store.state.curPageAdmin = value;
            this.$store.dispatch('fetchListProduct');
        },
        searchArr(value) {
            this.$store.state.strSearchAdmin = value;
            this.$store.state.curPageAdmin = 1;
            this.$store.dispatch('fetchListProduct');
        }
    },
    components: {
        DetailProduct,
        AddProduct,
    },
    
}
</script >

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Assistant');
body {
    background: #eee;
    font-family: Assistant, sans-serif
}
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
.tableFixHead thead th {
    position: sticky;
    top: 0;
    background-color: #343A40;
    border: none;
}
</style>