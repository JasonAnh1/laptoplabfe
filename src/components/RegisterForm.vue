<template>
  <div class="LoginForm mb-5">
    <div class="container border border-dark rounded mt-5 w-25">
      <h2>Login form</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="text" class="form-control" v-model="phone" id="phone" placeholder="Enter phone" name="phone">
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" v-model="password" id="pwd" placeholder="Enter password"
            name="pswd">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" v-model="email" id="email" placeholder="Enter email" name="email">
        </div>
        <div class="form-group">
          <label for="name ">Name:</label>
          <input type="text" class="form-control" v-model="name" id="name" placeholder="Enter name" name="name">
        </div>
        <button type="submit" class="btn btn-primary mb-4">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  components: {

  },
  computed: {

  },
  name: 'RegisterForm',
  data() {
    return {
      phone: '',
      password: '',
      email: '',
      name: '',
    }
  },
  methods: {

    handleSubmit() {
      this.$store.dispatch('fetchRegister', {
        phone: this.phone,
        password: this.password,
        email: this.email,
        name: this.name
      });
      //  window.location.reload()
      //  window.onload(this.$router.push({ path: '/ListProduct' }))

    }
  }
}


</script>