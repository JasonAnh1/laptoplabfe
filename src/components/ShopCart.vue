<template>
    <div class=" container-fluid my-5 ">
        <div class="row justify-content-center ">
            <div class="col-xl-10">
                <div class=" shadow-lg ">
                    <div class="row p-2 mt-3 justify-content-between mx-sm-2">
                        <div class="col">
                            <p class="text-muted space mb-0 shop"> Shop No.78618K</p>
                            <p class="text-muted space mb-0 shop">Store Locator</p>
                        </div>
                        <div class="col">
                            <div class="row justify-content-start ">
                                <div class="col">
                                    <img class="irc_mi img-fluid cursor-pointer " src="https://i.imgur.com/jFQo2lD.png"
                                        width="70" height="70">
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <img class="irc_mi img-fluid bell" src="https://i.imgur.com/uSHMClk.jpg" width="30" height="30">
                        </div>
                    </div>
                    <div class="row  mx-auto justify-content-center text-center">
                        <div class="col-12 mt-3 ">
                            <nav aria-label="breadcrumb" class="second ">
                                <ol class="breadcrumb indigo lighten-6 first  ">
                                    <li class="breadcrumb-item font-weight-bold "><a class="black-text text-uppercase "
                                            href="#"><span class="mr-md-3 mr-1">BACK TO SHOP</span></a><i
                                            class="fa fa-angle-double-right " aria-hidden="true"></i></li>
                                    <li class="breadcrumb-item font-weight-bold"><a class="black-text text-uppercase"
                                            href="#"><span class="mr-md-3 mr-1">SHOPPING BAG</span></a><i
                                            class="fa fa-angle-double-right text-uppercase " aria-hidden="true"></i></li>
                                    <li class="breadcrumb-item font-weight-bold"><a
                                            class="black-text text-uppercase active-2" href="#"><span
                                                class="mr-md-3 mr-1">CHECKOUT</span></a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div class="row justify-content-around">
                        <div class="col-md-5">
                            <div class=" border-0">
                                <div class="card-header pb-0">
                                    <h2 class="card-title space ">Checkout</h2>
                                    <p class="card-text text-muted mt-4  space">SHIPPING DETAILS</p>
                                    <hr class="my-0">
                                </div>
                                <div class="card-body">
                                    <div class="row justify-content-between">
                                        <div class="col-auto mt-0">
                                            <p><b>BBBootstrap Team Vasant Vihar 110020 New Delhi India</b></p>
                                        </div>
                                        <div class="col-auto">
                                            <p><b>BBBootstrap@gmail.com</b> </p>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col">
                                            <p class="text-muted mb-2">PAYMENT DETAILS</p>
                                            <hr class="mt-0">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="NAME" class="small text-muted mb-1">Name</label>
                                        <input type="text" class="form-control form-control-sm" name="NAME" id="NAME"
                                            aria-describedby="helpId" :placeholder="userlogined.name"
                                            :value="userlogined.name">
                                    </div>
                                    <div class="form-group">
                                        <label for="NAME" class="small text-muted mb-1">Phone Number</label>
                                        <input type="text" class="form-control form-control-sm" name="NAME" id="NAME"
                                            aria-describedby="helpId" :value="userlogined.phone">
                                    </div>
                                    <div class="row no-gutters">
                                        <div class="col-sm-4 ">
                                            <div class="form-group">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-primary">Thành Phố</button>
                                                    <button type="button"
                                                        class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                                        data-toggle="dropdown">
                                                    </button>
                                                    <div class="dropdown-menu scrollable-menu"
                                                        v-on:change="onChange($event)" role="menu">
                                                        <a class="dropdown-item" v-for="item in provinces"
                                                            v-bind:key="item.code" v-on:click="getDistricts(item.code)">{{
                                                                item.name }}</a>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-primary">Quận/Huyện</button>
                                                    <button type="button"
                                                        class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                                        data-toggle="dropdown">
                                                    </button>
                                                    <div class="dropdown-menu scrollable-menu" role="menu">
                                                        <a class="dropdown-item" v-for="item in district"
                                                            v-bind:key="item.code" v-on:click="getCommunes(item.code)">{{
                                                                item.name }}</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-primary">Phường/Xã</button>
                                                    <button type="button"
                                                        class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                                        data-toggle="dropdown">
                                                    </button>
                                                    <div class="dropdown-menu scrollable-menu" role="menu">
                                                        <a class="dropdown-item" v-for="item in communes"
                                                            v-bind:key="item.code"
                                                            v-on:click="getFullAddress(item.province, item.district, item.name)">{{
                                                                item.name }}</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            Address: <span>{{ address }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-md-5">
                                        <div class="col">
                                            <button type="button" name="" id="" class="btn  btn-lg btn-block " v-on:click="fetchPlaceOrder(userlogined.phone, userlogined.name,
                                                1, totalPrice, address, listItemInCart)">PURCHASE {{
        totalPrice }} VND</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class=" border-0 ">
                                <div class="card-header card-2">
                                    <p class="card-text text-muted mt-md-4  mb-2 space">YOUR ORDER <span
                                            class=" small text-muted ml-2 cursor-pointer">EDIT SHOPPING BAG</span> </p>
                                    <hr class="my-2">
                                </div>
                                <div class="card-body pt-0">

                                    <div class="row  justify-content-between" v-for="item in listItemInCart"
                                        v-bind:key="item.id">
                                        <div class="col-auto col-md-7">
                                            <div class="media flex-column flex-sm-row">
                                                <img class=" img-fluid " :src="item.imageUrl" width="62" height="62">
                                                <div class="media-body  my-auto">
                                                    <div class="row ">
                                                        <div class="col">
                                                            <p class="mb-0"><b>{{ item.title }}</b></p><small
                                                                class="">quantity: {{ item.quantity }}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pl-0 flex-sm-col col-auto  my-auto">
                                            <button class="btn btn-danger"
                                                v-on:click="removeItemFormCart(item.id)">Remove</button>
                                        </div>
                                        <div class="pl-0 flex-sm-col col-auto my-auto">
                                            <p><b>{{ item.priceAfterDiscount }}VND</b></p>
                                        </div>
                                    </div>
                                    <hr class="my-2">
                                    <div class="row ">
                                        <div class="col">
                                            <div class="row justify-content-between">
                                                <div class="col-4">
                                                    <p class="mb-1"><b>Subtotal</b></p>
                                                </div>
                                                <div class="flex-sm-col col-auto">
                                                    <p class="mb-1"><b>{{ totalPrice }} VND</b></p>
                                                </div>
                                            </div>
                                            <div class="row justify-content-between">
                                                <div class="col">
                                                    <p class="mb-1"><b>Shipping</b></p>
                                                </div>
                                                <div class="flex-sm-col col-auto">
                                                    <p class="mb-1"><b>0 VND</b></p>
                                                </div>
                                            </div>
                                            <div class="row justify-content-between">
                                                <div class="col-4">
                                                    <p><b>Total</b></p>
                                                </div>
                                                <div class="flex-sm-col col-auto">
                                                    <p class="mb-1"><b>{{ totalPrice }} VND</b></p>
                                                </div>
                                            </div>
                                            <hr class="my-0">
                                        </div>
                                    </div>
                                    <div class="row mb-5 mt-4 ">
                                        <div class="col-md-7 col-lg-6 mx-auto"><button type="button"
                                                class="btn btn-block btn-outline-primary btn-lg">ADD GIFT CODE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {

    name: 'ShopCart',
    computed: {
        userlogined() {
            return this.$store.state.userLogined;
        },
        provinces() {
            return this.$store.state.province;
        },
        district() {
            return this.$store.state.district;
        },
        communes() {
            return this.$store.state.commune;
        }
    },
    data() {
        return {
            listItemInCart: JSON.parse(localStorage.getItem('cart')),
            totalPrice: JSON.parse(localStorage.getItem('cart')).reduce((accumulator, object) => {
                return accumulator + object.priceAfterDiscount;
            }, 0),
            province: [],
            address: '',

        }
    },
    methods: {
        removeItemFormCart(itemID) {
            let i = this.listItemInCart.map(item => item.id).indexOf(itemID)
            this.listItemInCart.splice(i, 1)

            let products = [];
            if (localStorage.getItem('cart')) {
                products = JSON.parse(localStorage.getItem('cart'));
            }
            let rmPD = products.map(item => item.id).indexOf(itemID)
            products.splice(rmPD, 1)
            localStorage.setItem('cart', JSON.stringify(products));
            this.totalPrice = JSON.parse(localStorage.getItem('cart')).reduce((accumulator, object) => {
                return accumulator + object.priceAfterDiscount;
            }, 0)
        },
        getDistricts(code) {
            this.$store.dispatch('fetchDistrict', code);
        },
        getCommunes(code) {
            this.$store.dispatch('fetchCommune', code);
            this.txtDistrict = name;
        },
        getFullAddress(province, district, commune) {
            this.address = province + ' - ' + district + ' - ' + commune;
            console.log(this.address);
        },
        onChange(event) {
            console.log(event.target.value);
        },
        async fetchPlaceOrder(phone, userName, owner_id, total_price, address, products) {
            const response = await axios.post('api/v1/order/add',

                { phone, userName, owner_id, total_price, address, products });

            if (response.data.body.id) {
                this.$swal.fire({
                    icon: 'success',
                    title: 'Yes',
                    text: 'Order success!',
                    footer: '<a href="">Go to main </a>'
                });

                localStorage.setItem('cart','')
                this.address = ''
                this.totalPrice = ''

            }else{
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oh no!!',
                    text: 'Order fail!',
                    footer: '<a href="">Try again? </a>'
                });
            }



        },

    },
    created() {
        this.$store.dispatch('fetchProvinces');
    }
}



</script>
<style>
.scrollable-menu {
    height: auto;
    max-height: 200px;
    overflow-x: hidden;
}

.shop {
    font-size: 10px;
}

.space {
    letter-spacing: 0.8px !important;
}

.second a:hover {
    color: rgb(92, 92, 92);
}

.active-2 {
    color: rgb(92, 92, 92)
}


.breadcrumb>li+li:before {
    content: "" !important
}

.breadcrumb {
    padding: 0px;
    font-size: 10px;
    color: #aaa !important;
}

.first {
    background-color: white;
}

a {
    text-decoration: none !important;
    color: #aaa;
}

.btn-lg,
.form-control-sm:focus,
.form-control-sm:active,
a:focus,
a:active {
    outline: none !important;
    box-shadow: none !important
}

.form-control-sm:focus {
    border: 1.5px solid #4bb8a9;
}

.btn-group-lg>.btn,
.btn-lg {
    padding: .5rem 0.1rem;
    font-size: 1rem;
    border-radius: 0;
    color: white !important;
    background-color: #4bb8a9;
    height: 2.8rem !important;
    border-radius: 0.2rem !important;
}

.btn-group-lg>.btn:hover,
.btn-lg:hover {
    background-color: #26A69A;
}

.btn-outline-primary {
    background-color: #fff !important;
    color: #4bb8a9 !important;
    border-radius: 0.2rem !important;
    border: 1px solid #4bb8a9;
}

.btn-outline-primary:hover {
    background-color: #4bb8a9 !important;
    color: #fff !important;
    border: 1px solid #4bb8a9;
}

.card-2 {
    margin-top: 40px !important;
}

.card-header {
    background-color: #fff;
    border-bottom: 0px solid #aaaa !important;
}

p {
    font-size: 13px;
}

.small {
    font-size: 9px !important;
}

.form-control-sm {
    height: calc(2.2em + .5rem + 2px);
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0;
}

.cursor-pointer {
    cursor: pointer;
}

.boxed {
    padding: 0px 8px 0 8px;
    background-color: #4bb8a9;
    color: white;
}

.boxed-1 {
    padding: 0px 8px 0 8px;
    color: black !important;
    border: 1px solid #aaaa;
}

.bell {
    opacity: 0.5;
    cursor: pointer;
}
</style>