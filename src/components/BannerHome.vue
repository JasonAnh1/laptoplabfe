<template>

<div class="jumbotron jumbotron-fluid" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
</template>

<script>

export default {
        name:'BannerHome',
        data(){
            return {
                image:"'https://i.ytimg.com/vi/vqdpoKaym-k/maxresdefault.jpg'"
            }
        }
    }
</script>
<style>
.jumbotron {
  color: white;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
}
</style>