<template>
  <div class="container-fluid d-flex justify-content-center">

    <div class="row mt-5">

      <div class="col-sm-3" v-for="item in listProduct" v-bind:key="item.id">
        <div class="card">
          <img :src="item.imageUrl" class="card-img-top" width="100%">
          <div class="card-body pt-0 px-0">
            <div class="d-flex flex-row justify-content-between mb-0 px-3">
              <small class="text-muted mt-1">SALE!</small>
              <h6>&dollar;{{ item.priceAfterDiscount }}&ast;</h6>
            </div>
            <div class="d-flex flex-row justify-content-between mb-0 px-3">
              <small class="text-muted mt-1">PRICE</small>
              <h6><s>&dollar;{{ item.price }}&ast;</s></h6>
            </div>
            <hr class="mt-2 mx-3">
            <div class="d-flex flex-row justify-content-between px-3 pb-4">
              <div class="d-flex flex-column"><span class="text-muted">{{ item.title }}</span><small class="text-muted">{{
                item.supplier.title }}&ast;</small></div>
              <div class="d-flex flex-column">
                <h5 class="mb-0">8.5/7.1</h5><small class="text-muted text-right">(city/Hwy)</small>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-between p-3 mid">
              <div class="d-flex flex-column"><small class="text-muted mb-1">RATE</small>
                <div class="d-flex flex-row">
                  <i class="far fa-star" v-for="i in item.rating" v-bind:key="i"></i>


                </div>
              </div>

            </div>
            <small class="text-muted key pl-3">Standard key Features</small>
            <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-danger btn-block"
                v-on:click="addToCart(item.id)"><small>ADD TO
                  CART</small></button></div>
            <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-danger btn-block"
                v-on:click="test"><small>Test</small></button></div>
            <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-info btn-block"
                v-on:click="getDetailProductById(item.id)"><small>DETAIL</small></button></div>
            <small class="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>

export default {

  name: 'HomeProduct',
  computed: {
    listProduct() {
      return this.$store.state.listProductForUser;
    }
  },
  data() {
    return {
      productId: 0
    }
  },
  created() {
    this.$store.dispatch('fetchListProductForUser', 0);

  },
  methods: {
    getDetailProductById(productId) {
      this.$store.dispatch('fetchGetDetailProduct', productId
      );

      this.$router.push({ path: '/DetailProduct' })
    }
    ,
    addToCart(ProductId) {
      let products = [];
      let checkProduct;
      let pd = this.$store.state.listProductForUser.find(x => x.id === ProductId)
      if (localStorage.getItem('cart')) {
        products = JSON.parse(localStorage.getItem('cart'));
        checkProduct = products.find(x => x.id === ProductId)
      }
      if (checkProduct || pd.remain < 1) {
        if (checkProduct) {

          let flag = true;
          for (var i in products) {
            if (products[i].id == ProductId) {

              products[i].quantity = products[i].quantity + 1;
              if (products[i].quantity > products[i].remain) {
                flag = false
              }
              break;
            }
          }
          if (flag) {
            localStorage.setItem('cart', JSON.stringify(products));
            this.$swal.fire({
              icon: 'success',
              title: 'Yes',
              text: 'Add to cart success!',
              footer: '<a href="">Go to cart?</a>'
            });
          } else {
            this.$swal.fire({
              icon: 'error',
              title: 'Oh no',
              text: 'Not enough!',
              footer: '<a href="">Go to cart?</a>'
            });
          }

        }
        if (pd.remain < 1) {
          this.$swal.fire({
            icon: 'error',
            title: 'Oh no',
            text: 'Product not in stock!',
            footer: '<a href="">Go to cart?</a>'
          });
        }
      }
      else {
        products.push(pd);
        localStorage.setItem('cart', JSON.stringify(products));
        this.$swal.fire({
          icon: 'success',
          title: 'Yes',
          text: 'Add to cart success!',
          footer: '<a href="">Go to cart?</a>'
        });
      }
    },
    test() {
      localStorage.removeItem("cart")
    }
  }
}
</script>
<style>
.card {
  width: 250px;
  border-radius: 10px;
}

.card-img-top {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

span.text-muted {
  font-size: 12px;
}

small.text-muted {
  font-size: 8px;
}

h5.mb-0 {
  font-size: 1rem;
}

small.ghj {
  font-size: 9px;
}

.mid {
  background: #ECEDF1;
}

h6.ml-1 {
  font-size: 13px;
}

small.key {
  text-decoration: underline;
  font-size: 9px;
  cursor: pointer;
}

.btn-danger {
  color: #FFCBD2;
}

.btn-danger:focus {
  box-shadow: none;
}

small.justify-content-center {
  font-size: 9px;
  cursor: pointer;
  text-decoration: underline;
}

@media screen and (max-width:600px) {
  .col-sm-4 {
    margin-bottom: 50px;
  }
}
</style>