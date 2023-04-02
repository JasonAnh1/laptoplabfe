<template>
    <div>
        <!-- <h2>Product List</h2>
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
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>