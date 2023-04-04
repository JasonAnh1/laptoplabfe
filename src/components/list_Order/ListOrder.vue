<template>
    <div>
        <div class="form-group has-search" style="width: 250px; position: absolute; top: 50px; right: 240px;">
            <span class="fa fa-search form-control-feedback"></span>
            <input v-model="search" type="text" class="form-control" placeholder="Search" style="border: 2px solid #808080;">
        </div>
        <h2 style="display: inline-block;">List Order</h2>
        <div style="display: inline-block; float: right; position: absolute; top: 20px; right: 60px;">
            <div style="font-size: 18px; font-weight: bold;">Filter by</div>

            <input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio" checked v-on:change="waitingOder()" ref="wait">
            <label for="toggle-on" class="btn1">Waiting</label>
            <input id="toggle-off" class="toggle toggle-right" name="toggle" value="true" type="radio" v-on:change="completedOder()" ref="comp">
            <label for="toggle-off" class="btn1">Completed</label>

        </div>

        <hr>
        <div class="table-responsive">
            <table class="table table-striped table-dark text-white table-hover">
                <thead>
                    <tr>
                        <th colspan="2">Customer</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Employee</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in listOrder" v-bind:key="item.id">
                        <td colspan="2">
                            <h6>{{item.username}}</h6>
                        </td>
                        <td>{{item.phone}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.owner.name}}</td>
                        <td>{{item.status}}</td>
                        <td style="width: 200px; padding: auto;">
                            <DetailOrder v-bind:orderInfo=item></DetailOrder>
                            <button v-if="item.status=='WAITING'" v-on:click="confirmOrder(item.id)" class="btn btn-primary" role="button" style="color: white; margin-left: 15px;">Confirm</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
import DetailOrder from './DetailOrder.vue';
    export default {
        data() {
            return {
                toggle: true,
                search: ""
            }
        },
        computed:{
            listOrder() {
                if(this.toggle==true) {
                    return this.$store.state.listOrder.filter(item => item.status === 'WAITING'&&item.username.toLowerCase().match(this.search))
                } else {
                    return this.$store.state.listOrder.filter(item => item.status === 'COMPLETED'&&item.username.toLowerCase().match(this.search))
                }
                
            }
        },
        created(){
            this.$store.dispatch('fetchListOrder');
        },
        components: {
            DetailOrder,
        },
        methods: {
            confirmOrder(id) {
                this.$store.dispatch('fetchUpdateOrder',{"id": id, "status": "COMPLETED"});
            },
            waitingOder(){
                this.$store.dispatch('fetchListOrder');
                this.toggle = true
            },
            completedOder(){
                this.$store.dispatch('fetchListOrder');
                this.toggle = false
            }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Assistant');
body {
    background: #eee;
    font-family: Assistant, sans-serif
}


.btn1{
    border: 3px solid #43494E;
    display: inline-block;
    padding: 5px;
    position: relative;
    text-align: center;
    transition: background 600ms ease, color 600ms ease;
}

input[type="radio"].toggle {
    display: none;
    & + label{
        cursor: pointer;
        width: 85px;
        height: 40px;
        &:hover{
            background: none;
            color: #43494E;
        }
        &:after{
            background: #43494E;
            content: "";
            height: 100%;
            position: absolute;
            top: 0;
            transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
            width: 100%;
            z-index: -1;
        }
    }
    &.toggle-left + label {
        border-right: 0;
        &:after{
            left: 100%
        }
    }
    &.toggle-right + label{
        margin-left: -3px;
        &:after{
            left: -100%;
        }
    }
    &:checked + label {
        cursor: default;
        color: #fff;
        transition: color 200ms;
        &:after{
            left: 0;
        }
    }
}

</style>