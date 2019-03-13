<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signup">Create Profile</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/animals">Adoptables</router-link> |
      <router-link to="/animals/new">New</router-link> |
      <router-link to="/logout">Logout</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
