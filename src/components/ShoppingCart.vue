<template>

</template>


<script>

export default {

    name: 'ShoppingCart',
    computed: {

    },
    data() {
        return {
            productId: 0
        }
    },
    created() {

    },
    methods: {
        getDetailProductById(productId) {
            this.$store.dispatch('fetchGetDetailProduct', productId
            );

            this.$router.push({ path: '/DetailProduct' })
        }

    }
}

</script>

