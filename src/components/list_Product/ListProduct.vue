<template>
    <div>
        <h2>Product List</h2>
        <hr>
        <div class="table-responsive">
            <table class="table table-striped table-dark text-white table-hover">
                <thead>
                    <tr>
                        <th colspan="2">Product</th>
                        <th>Image</th>
                        <th>Supplier</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in listProduct" v-bind:key="item.id">
                        <td colspan="2">
                            <h6>{{item.title}}</h6>
                        </td>
                        <td>
                            <div class="d-flex align-items-center"><img class="" :src=item.imageUrl width="100px" height="80px"></div>
                        </td>
                        <td>{{item.supplier.title}}<br></td>
                        <td>{{ item.price }} VND</td>
                        <td>{{ item.category.title }}</td>
                        <td>{{item.location.address}}</td>
                        <td>{{item.remain}}</td>
                        <td style="width: 200px; padding: auto;">
                            <DetailProduct v-bind:item=item></DetailProduct>
                            <button v-on:click="deleteProduct(item.id,0)" class="btn btn-danger" role="button" style="color: white; margin-left: 15px;">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <AddProduct></AddProduct>
            </div>
        </div>
    </div>
</template>

<script>
import DetailProduct from './DetailProduct.vue';
import AddProduct from './AddProduct.vue';

export default {
//   name: 'ListProduct',
  computed:{
    listProduct() {
        return this.$store.state.listProduct
    }
    },
    created(){
    this.$store.dispatch('fetchListProduct',0);
    },
    methods:{
        deleteProduct(id,page){
            this.$store.dispatch('fetchDeleteProduct',{'id': id,'page': page})
        }
    },
    components: {
        DetailProduct,
        AddProduct
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Assistant');
body {
    background: #eee;
    font-family: Assistant, sans-serif
}
</style>