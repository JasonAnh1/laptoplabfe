<template>
    <div class="container mt-5" >
        
        <div class="">
            <div class="container-fliud">
                <div class="wrapper row">
                    <div class="preview col-md-6">

                        <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1"><img :src='detailProduct.imageUrl'/></div>

                        </div>
                        <ul class="preview-thumbnail nav nav-tabs">

                        </ul>

                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title">{{ detailProduct.title }}</h3>
                        <div class="rating">
                            <div class="stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <span class="review-no">41 reviews</span>
                        </div>
                        <p class="product-description">{{ detailProduct.description }}</p>
                        <h4 class="price">current price: <span>{{detailProduct.priceAfterDiscount}} VND</span></h4>
                        <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                        <h5 class="sizes">Stoking at:
                            <span class="size" >{{ detailProduct.location.address }}</span>
                        </h5>
                        <h5 class="colors">Supplier:
                            <span class="size" >{{ detailProduct.supplier.title }}</span>
                        </h5>
                        <div class="action">
                            <button class="add-to-cart btn btn-default" type="button" v-on:click="addToCart( detailProduct.id)">add to cart</button>
                            <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>



<script>
export default {

    name: 'DetailProduct',
    computed: {
        detailProduct(){
            return this.$store.state.detailProduct;
        }
    },
    methods:{
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
    }

}
</script>



<style>
img {
  
}

.preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

@media screen and (max-width: 996px) {
    .preview {
        margin-bottom: 20px;
    }
}

.preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
    border: none;
    margin-top: 15px;
}

.preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%;
}

.preview-thumbnail.nav-tabs li img {
    max-width: 100%;
    display: block;
}

.preview-thumbnail.nav-tabs li a {
    padding: 0;
    margin: 0;
}

.preview-thumbnail.nav-tabs li:last-of-type {
    margin-right: 0;
}

.tab-content {
    overflow: hidden;
}

.tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
}

.card {
    margin-top: 50px;
    background: #eee;
    padding: 3em;
    line-height: 1.5em;
}

@media screen and (min-width: 997px) {
    .wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
}

.details {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.colors {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
    text-transform: UPPERCASE;
    font-weight: bold;
}

.checked,
.price span {
    color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
    margin-bottom: 15px;
}

.product-title {
    margin-top: 0;
}

.size {
    margin-right: 10px;
}

.size:first-of-type {
    margin-left: 40px;
}

.color {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    height: 2em;
    width: 2em;
    border-radius: 2px;
}

.color:first-of-type {
    margin-left: 20px;
}

.add-to-cart,
.like {
    background: #ff9f1a;
    padding: 1.2em 1.5em;
    border: none;
    text-transform: UPPERCASE;
    font-weight: bold;
    color: #fff;
    -webkit-transition: background .3s ease;
    transition: background .3s ease;
}

.add-to-cart:hover,
.like:hover {
    background: #b36800;
    color: #fff;
}

.not-available {
    text-align: center;
    line-height: 2em;
}

.not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff;
}

.orange {
    background: #ff9f1a;
}

.green {
    background: #85ad00;
}

.blue {
    background: #0076ad;
}

.tooltip-inner {
    padding: 1.3em;
}

@-webkit-keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}</style>