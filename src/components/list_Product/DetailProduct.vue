<template>
    <div style="display: inline-block;">
        <button class="btn btn-success" role="button" v-on:click="restAll()">Detail</button>
        <div v-if="toggle" class="popup">
            <div class="popup-inner">
                <form id="result-form" class="form-vertical">
                    <div style="text-align: center; float: left; width: 50%;">
                        <img :src=imageFile width="250px" height="200px" style="border: 2px solid #CED4DA; padding: 5px; border-radius: 2%;">
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <input v-on:change="changePic()" style="display: block; margin-top: 5px; width: 90px;" v-show="editable==false" type="file" accept="image/*" ref="file"/>
                        </div>
                    </div>
                    <div class="form-group" style="float: right; width: 45%; margin-left: 5%; margin-bottom: 0; height: 200px;">
                        <!-- <label for="description" class="label">Description</label>
                        <div class="controls">
                            <textarea ref="prodDescription" :disabled="editable==true" v-model=productInfo.description id="description" name="description" aria-label="Description" style="height: 165px; width: 100%;"></textarea>
                        </div> -->
                        <VueEditor ref="prodDescription" :disabled="editable==true" v-model=productInfo.description :editorToolbar="customToolbar" style="color: black;"></VueEditor>
                    </div>
                    <div class="form-group textbox boxright" style="margin-top: 5px;">
                        <label for="name" class="label">Name</label>
                        <div class="controls">
                            <input ref="prodName" :disabled="editable==true" v-model=productInfo.title type="text" class="form-control" name="name" id="name" aria-label="Name">
                        </div>
                    </div>
                    <div class="form-group textbox" style="margin-top: 5px;">
                        <label for="id" class="label">ID</label>
                        <div class="controls">
                            <input ref="prodId" disabled="false" v-model=productInfo.id type="text" class="form-control" name="id" id="id" aria-label="ID">
                        </div>
                    </div>
                    <div class="form-group textbox boxright">
                        <label for="price" class="label">Price</label>
                        <div class="controls">
                            <input ref="prodPrice" :disabled="editable==true" v-model=productInfo.price type="number" class="form-control" name="price" id="price" aria-label="Price">
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="remain" class="label">Remain</label>
                        <div class="controls">
                            <input ref="prodRemain" :disabled="editable==true" v-model=productInfo.remain type="number" class="form-control" name="remain" id="remain" aria-label="Remain">
                        </div>
                    </div>
                    <div class="form-group textbox boxright">
                        <label for="sold" class="label">Sold</label>
                        <div class="controls">
                            <input ref="prodSold" :disabled="editable==true" v-model=productInfo.sold type="number" class="form-control" name="sold" id="sold" aria-label="Sold">
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="pricediscount" class="label">Price Discount</label>
                        <div class="controls">
                            <input ref="prodPriceDiscount" :disabled="editable==true" v-model=productInfo.priceAfterDiscount type="number" class="form-control" name="pricediscount" id="pricediscount" aria-label="Price Discount">
                        </div>
                    </div>
                    <div class="form-group textbox boxright">
                        <label for="location" class="label">Location</label>
                        <div class="controls">
                            <select ref="prodLocation" :disabled="editable==true" name="location" id="location" class="form-control"> 
                                <option v-for="location in listLocation" v-bind:key="location.id" :value=location.id :selected="location.id==item.location_id">{{ location.address }}</option> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="supplier" class="label">Supplier</label>
                        <div class="controls">
                            <select ref="prodSupplier" :disabled="editable==true" name="supplier" id="supplier" class="form-control" > 
                                <option v-for="supplier in listSupplier" v-bind:key="supplier.id" :value=supplier.id :selected="supplier.id==item.supplier_id">{{ supplier.title }}</option> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group textbox boxright">
                        <label for="category" class="label">Category</label>
                        <div class="controls">
                            <select ref="prodCategory" :disabled="editable==true" name="category" id="category" class="form-control"> 
                                <option v-for="category in listCategory" v-bind:key="category.id" :value=category.id :selected="category.id==item.categoryId">{{ category.title }}</option> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="rating" class="label">Rating</label>
                        <div class="controls">
                            <select ref="prodRating" :disabled="editable==true" name="rating" id="rating" class="form-control"> 
                                <option :selected="item.rating=='1'" value="1">⭐</option> 
                                <option :selected="item.rating=='2'" value="2">⭐⭐</option> 
                                <option :selected="item.rating=='3'" value="3">⭐⭐⭐</option>
                                <option :selected="item.rating=='4'" value="4">⭐⭐⭐⭐</option>  
                                <option :selected="item.rating=='5'" value="5">⭐⭐⭐⭐⭐</option>  
                            </select>
                        </div>
                    </div>
                    <div>
                        <button v-on:click="()=>{editable = false}" v-show="editable==true" type="button" id="btnedit" class="btn btn-warning" style="color: white; float: left;">Edit</button>
                        <button type="button" class="btn btn-danger" style="color: white; float: right;" v-on:click="closeDetail()">Close</button>
                        <button v-on:click="addProduct()" v-show="editable==false" type="button" id="btnsubmit" class="btn btn-primary "  style="margin-right: 15px; float: right;">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
    components: {
        VueEditor
    },
    data() {
        return {
            toggle: false,
            editable: true,
            imageFile: this.item.imageUrl,
            productInfo: null,
            product: new Object(),
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"],
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ color: [] }, { background: [] }],
                ["link", "video"],
                ["clean"] 
            ]
        }
    },
    mounted() {
        this.$store.dispatch('fetchListSupplier');
        this.$store.dispatch('fetchListLocation');
        this.$store.dispatch('fetchListCategory');
    },
    computed:{
        listLocation() {
        return this.$store.state.listLocation
        },
        listCategory() {
        return this.$store.state.listCategory
        },
        listSupplier() {
        return this.$store.state.listSupplier
        },
    },
    props: {
        item: Object,
    },
    methods: {
        restAll: function() {
            this.toggle = true; 
            this.editable = true; 
            this.imageFile = this.item.imageUrl;
            this.productInfo = structuredClone(this.item)
        },
        addProduct: function(){
            var formData = new FormData();
            formData.append('file', this.$refs.file.files[0]);
            this.product = new Object({
                    id: this.$refs.prodId.value,
                    title: this.$refs.prodName.value,
                    description: this.$refs.prodDescription.value,
                    price: parseFloat(this.$refs.prodPrice.value),
                    priceAfterDiscount: parseFloat(this.$refs.prodPriceDiscount.value),
                    categoryId: parseInt(this.$refs.prodCategory.value),
                    remain: parseInt(this.$refs.prodRemain.value),
                    rating: parseInt(this.$refs.prodRating.value),
                    supplier_id: parseInt(this.$refs.prodSupplier.value),
                    location_id: parseInt(this.$refs.prodLocation.value),
                    sold: parseInt(this.$refs.prodSold.value)
                })
            if (this.product.title.length>0&&this.product.description.length>0&&this.product.price>=0&&this.product.priceAfterDiscount>=0&&this.product.categoryId>=0&&this.product.remain>=0&&
                    this.product.rating>=0&&this.product.supplier_id>=0&&this.product.location_id>=0&&this.product.sold>=0) {
                        if(this.$refs.file.files[0]==null) {
                            this.product.mediaId=this.item.mediaId
                            this.$store.dispatch('fetchUpdateProductNoImg',this.product);
                        } else {
                            this.$store.dispatch('fetchUpdateProductWithImg',{'img': formData,  'product': this.product});
                        }
                        this.toggle = false; 
                    } else {
                window.alert("Vui lòng nhập các trường bắt buộc")
            }
        },
        closeDetail: function(){
            this.toggle = false; 
            this.$store.dispatch('fetchListProduct',0);
        },
        changePic: function(){
            this.imageFile = URL.createObjectURL(this.$refs.file.files[0])
        }
    },
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
    border-radius: 1%;
}
.label {
    color: black;
    font-weight: bold;
    text-align: left;
}
.textbox {
    display: inline-block;
    width: 45%;
}
.boxright {
    margin-right: 10%;
}
</style>