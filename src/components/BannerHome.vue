<template>
  <div class="container-fluid">
    <div id="demo" class="carousel slide" data-ride="carousel">

      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" :data-slide-to="index" v-for='(baner, index) in banners' v-bind:key="index"></li>

      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item" :class="{ 'active': index === 0 }" v-for='(item, index) in banners' v-bind:key="index">
          <img :src="item.media.originUrl" :alt="item.media.originUrl" width=100% height="500">
          <div class="carousel-caption">
            <h3><a v-on:click="getDetailProductById(item.objectId)" role="button">Go to product</a></h3>
          </div>
        </div>

      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BannerHome',
  computed: {
    banners() {
      return this.$store.state.banner;
    },
  },

  data() {
    return {
      image: "'https://i.ytimg.com/vi/vqdpoKaym-k/maxresdefault.jpg'"
    }
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
<style></style>