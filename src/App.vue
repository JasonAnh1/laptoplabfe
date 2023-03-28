<template>
  <div id="app">

    <AdminSite v-if="this.roles =='ROLE_ADMIN'"/>
    <UserSite v-else/> 
  </div>


</template>

<script>
import AdminSite from './components/AdminSite.vue';
import UserSite from './components/UserSite.vue';
export default {
  computed:{
    user(){
      return this.$store.state.userLogined.roles[0].name;
    }
  },
  data() {
    return {
      current: localStorage.getItem('accessToken'),
      roles: localStorage.getItem('role'),
    }
  },
  created(){
    alert(this.roles)
  },
  name: 'App',

  components: {
    AdminSite,
    UserSite
},


};
</script>
