<template>
    <div>
        <div class="form-group has-search" style="width: 250px; position: absolute; top: 50px; right: 60px;">
            <span class="fa fa-search form-control-feedback"></span>
            <input v-model="search" type="text" class="form-control" placeholder="Search" style="border: 2px solid #808080;">
        </div>
        <h2 style="display: inline-block;">List Banner</h2>

        <hr>
        <div class="table-responsive">
            <div class="tableFixHead" style="height: 800px; overflow: scroll; position: relative;">
                <table class="table table-striped table-dark text-white table-hover" style="margin-bottom: 0;">
                    <thead>
                        <tr>
                            <th class="headerLstOrder">Customer</th>
                            <th class="headerLstOrder">Phone</th>
                            <th class="headerLstOrder">Address</th>
                            <th class="headerLstOrder">Email</th>
                            <th class="headerLstOrder">Employee</th>
                            <th class="headerLstOrder">Status</th>
                            <th class="headerLstOrder"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in listOrder" v-bind:key="item.id">
                            <td>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
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
.headerLstOrder {
    position: sticky;
    top: 0;
    background-color: #343A40;
    border: none;
}
</style>