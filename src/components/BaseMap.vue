<template>
    <div id="map1" class="basemap"></div>
</template>
  
<script>
const mapboxgl = require('mapbox-gl');

export default {

    name: "BaseMap",
    data() {
        return {
            accessToken: 'pk.eyJ1IjoicXVvb2NraGFuaGgiLCJhIjoiY2xmcDZxOGR1MTJyZTQycXpzMzZlaTM1NyJ9.px7Lz7IgXHW0Q2jQp2cMew',
        };
    },

    mounted() {
        mapboxgl.accessToken =
            'pk.eyJ1IjoicXVvb2NraGFuaGgiLCJhIjoiY2xmcDZxOGR1MTJyZTQycXpzMzZlaTM1NyJ9.px7Lz7IgXHW0Q2jQp2cMew';
        new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/quoockhanhh/clfwsnr7d001a01o88qeqetuz',
            center: [105.823820, 21.030940],
            zoom: 16

        });
    },
};
</script>

<style  >
.basemap {
    width: 40%;
    height: 200px;
    position: absolute;
    top: 50;
    bottom: 0;
    right: 0;

}
</style>