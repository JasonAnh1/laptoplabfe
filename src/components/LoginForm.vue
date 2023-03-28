<template>
  <div class="LoginForm">
    <div class="container border border-dark rounded mt-5 w-25"  @submit.prevent="handleSubmit">
        <h2>Login form</h2>
        <form >
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="text" class="form-control" v-model="phone" id="phone" placeholder="Enter phone" name="phone">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control"  v-model="password"  id="pwd" placeholder="Enter password" name="pswd">
            </div>
            <!-- <div class="form-group form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"> Remember me
                </label>
            </div> -->
            <button type="submit" class="btn btn-primary mb-4">Submit</button>
        </form>
    </div>
  </div>
    
</template>
<script>

export default {
  components:{
  
  },
  computed:{
    user(){
      return this.$store.state.userLogined;
    }
  },
  name: 'LoginForm',
  data() {
    return {
      phone: '',
      password:''
    }
  },
  methods:{

    handleSubmit(){
        this.$store.dispatch('fetchLogin',{
          phone:this.phone,
          password:this.password
        });
         window.location.reload()
        //  window.onload(this.$router.push({ path: '/ListProduct' }))
       
    } 
  }
}


</script>