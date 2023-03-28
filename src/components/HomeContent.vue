<template>
    <div>
        <BannerHome />
        <div class="container"><h1>News Product arrivals <span class="badge badge-info">New</span></h1></div>
        <HomeProduct />
    </div>
    </template>
    <script>
    import BannerHome from './BannerHome.vue'
    import HomeProduct from './HomeProduct.vue';
    export default {
        name:'HomeContent',
        components:{
            HomeProduct,
            BannerHome
        }
      
    }
    </script>
    
    <style>
  
    </style>