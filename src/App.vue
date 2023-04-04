<template>
  <div id="app">

    <AdminSite v-if="this.roles == 'ROLE_ADMIN'" />
    <UserSite v-else />
    <UnderFooter />
  </div>
</template>

<script>
import UnderFooter from './components/UnderFooter.vue';
import AdminSite from './components/AdminSite.vue';
import UserSite from './components/UserSite.vue';
export default {
  computed: {
    user() {
      return this.$store.state.userLogined.roles[0].name;
    }
  },
  data() {
    return {
      current: localStorage.getItem('accessToken'),
      roles: localStorage.getItem('role'),
    }
  },
  created() {

  },
  name: 'App',

  components: {
    AdminSite,
    UserSite,
    UnderFooter
  },


};
</script>
<style>
</style>