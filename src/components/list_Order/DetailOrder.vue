<template>
    <div style="display: inline-block;">
        <button class="btn btn-success" role="button" v-on:click="restAll()">Detail</button>

        <div v-if="toggle" class="popup">
            <div class="container clearfix popup-inner">
                <div style="padding-left: 18px; padding-right: 25px; position: relative;">
                    <h2 style="color: black; display: inline-block;">Order Detail</h2>
                    <div style="color: black; float: right; margin-top: 10px; font-size: 18px; font-weight: 500;">Customer: {{ orderInfo.username }}</div>
                </div>
            <div class="card-body">
                <div style="height: 430px;">
                    <div class="table-responsive" style="max-height: 430px; border: 0.1px solid black;">
                        <table class="table table-bordered m-0">
                            <thead>
                            <tr>
                                <th class="text-center py-2 px-4" style="width: 300px; color: black;">Product Name &amp; Details</th>
                                <th class="text-center py-2 px-4" style="width: 50px; color: black;">Price</th>
                                <th class="text-center py-2 px-4" style="width: 50px; color: black;">Quantity</th>
                                <th class="text-center py-2 px-4" style="width: 50px; color: black;">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                    
                            <tr v-for="item in orderInfo.orderCarts" :key="item.id">
                                <td class="p-4">
                                <div class="media align-items-center">
                                    <img :src=item.product.imageUrl class="d-block ui-w-40 ui-bordered mr-4" alt=""> 
                                    <div class="media-body">
                                        <span href="#" class="d-block text-dark" style="font-size: 15px; font-weight: 500;">{{ item.product.title }}</span>
                                        <small>
                                            <span class="text-muted" style="width: 110px; display: inline-block;">Supplier: {{ item.product.supplier.title }}</span>
                                            <span class="text-muted">Category: {{ item.product.category.title }}</span>
                                        </small>
                                    </div>
                                </div>
                                </td>
                                <td class="text-center font-weight-semibold align-middle p-4 text-muted">{{item.product.price}} <br>VND</td>
                                <td class="text-center font-weight-semibold align-middle p-4 text-muted">{{item.amount}}</td>
                                <td class="text-center font-weight-semibold align-middle p-4 text-muted">{{item.price}} <br>VND</td>
                            </tr>        
                    
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- / Shopping cart table -->
            
                <div class="d-flex flex-wrap justify-content-between align-items-center" style="margin-bottom: 10px;">

                    <div class="d-flex" style="width: 100%;">
                        <div class="text-right mt-4 mr-5" style="width: 50%;">
                            <label class="text-muted font-weight-normal m-0" style="font-size: 18px; text-align: left; width: 100%;">Payment method</label>
                            <div class="text-large text-muted" style="text-align: left;"><strong style="color: black; font-size: 18px;">{{orderInfo.paymentMethod}}</strong></div>
                        </div>
                        <div class="text-right mt-4" style="width: 50%;">
                            <label class="text-muted font-weight-normal m-0" style="font-size: 18px;">Total Price</label>
                            <div class="text-large text-muted" style="text-align: right;"><strong style="color: black; font-size: 18px;">{{orderInfo.totalPrice}} VND</strong></div>
                        </div>
                    </div>
                </div>
            
                <div class="float-right">
                <button type="button" class="btn btn-danger mt-2" style="color: white;" v-on:click="closeDetail()">Close</button>   
                </div>
            
            </div>

            </div>
        
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toggle: false,
            }
        },
        props: {
            orderInfo: Object,
        },
        methods: {
            restAll: function() {
            this.toggle = true; 
        },
        closeDetail: function(){
            this.toggle = false; 
            this.$store.dispatch('fetchListOrder');
        },
        }
    }
</script>

<style lang="scss" scoped>
 select {
 font-family: 'FontAwesome', 'Second Font name'
 }
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;
}
.popup-inner {
	background: #FFF;
	padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 15px;
    width: 900px;
    height: 670px;
    border-radius: 1%;
}


.text-muted{
    font-size: 14px;
}
.ui-w-40 {
    width: 80px !important;
    height: auto;
}

.card{
    box-shadow: 0 1px 15px 1px rgba(52,40,104,.08);
    width: 100%;    
}

// .ui-product-color {
//     display: inline-block;
//     overflow: hidden;
//     margin: .144em;
//     width: .875rem;
//     height: .875rem;
//     border-radius: 10rem;
//     -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
//     box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
//     vertical-align: middle;
// }


</style>