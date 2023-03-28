<template>
    <div>


        <hr>
        <div class="table-responsive">
            <table class="table table-striped table-dark text-white table-hover">
                <thead>
                    <tr>
                        <th colspan="2">Title</th>
                        <th>Owner</th>
                        <th>Updated</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in listProduct" v-bind:key="item.id">
                        <td colspan="2">
                            <h6>{{item.title}}</h6>
                        </td>
                        <td>
                            <div class="d-flex align-items-center"><img class="" :src=item.imageUrl width="30"></div>
                        </td>
                        <td>18 Mar, 2020<br></td>
                        <td class="font-weight-bold">Published</td>
                        <td>Business</td>
                        <td><i class="fa fa-external-link external-link"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="card">
            <table class="table table-hover shopping-cart-wrap">
                <thead class="text-muted">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col" width="120">Quantity</th>
                        <th scope="col" width="120">Price</th>
                        <th scope="col" width="200" class="text-right">Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="item in listProduct" v-bind:key="item.id">

                        <td>
                            <figure class="media">
                                <div class="img-wrap"><img :src=item.imageUrl
                                        class="img-thumbnail img-sm"></div>
                                <figcaption class="media-body">
                                    <h6 class="title text-truncate">{{ item.title }}</h6>
                                    <dl class="param param-inline small">
                                        <dt>Danh mục:</dt>
                                        <dd>{{ item.category.title }} </dd>
                                      
                                    </dl>
                                    <dl class="param param-inline small">
                                        <dt>Địa điểm: </dt>
                                        <dd>{{item.location.address}}</dd>
                                    </dl>
                                    <dl class="param param-inline small">
                                        <dt>Nhà cung cấp: </dt>
                                        <dd>{{item.supplier.title}}</dd>
                                    </dl>
                                </figcaption>
                            </figure>
                        </td>
                        <td>
                            <p>{{ item.remain }}</p>
                        </td>
                        <td>
                            <div class="price-wrap">
                                <var class="price">USD {{item.priceAfterDiscount}}</var>
                                <small class="text-muted">{{ item.price }}</small>
                            </div> <!-- price-wrap .// -->
                        </td>
                        <td class="text-right">
                            <a title="" href="" class="btn btn-outline-success" data-toggle="tooltip"
                                data-original-title="Save to Wishlist"> <i class="fa fa-heart"></i></a>
                            <a href="" class="btn btn-outline-danger"> × Remove</a>
                        </td>
                    </tr>
                   
                    
                </tbody>
            </table>
        </div> <!-- card.// -->

</div></template>

<script>
    
export default {

  name: 'ListProduct',
  computed:{
    listProduct(){
      return this.$store.state.listProduct;
    }
  },
  data() {
    return {
      phone: '',
      password:''
    }
  },
  created(){
    this.$store.dispatch('fetchListProduct',0);
  },
  methods:{
  
   
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Assistant');

body {
    background: #eee;
    font-family: Assistant, sans-serif
}

.external-link {
  cursor: pointer;
  color: blue;
}
</style>