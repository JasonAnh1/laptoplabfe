<template>

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
      <a class="navbar-brand" href="#">Logo</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/ListAll" class="nav-link" >Home</router-link>
    
        </li>
        <li class="nav-item">
          <router-link to="/LoginForm" class="nav-link" >Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/AddProduct" class="nav-link" >Add product</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/Register" class="nav-link" >Update product</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Register" class="nav-link" >Delete product</router-link>
        </li> -->
      </ul>
    </nav>
    
    </template>
    <script>
    
    export default {
      name: 'MenuNav'

    }
    </script>