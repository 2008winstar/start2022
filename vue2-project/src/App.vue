<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Navigation url="/profile">
<!--      Logged in as {{ user.name }}-->
    </Navigation>
    <CurrentUser>
      <template v-slot:default="slotProps">
        {{ slotProps.user.lastName }}
      </template>
    </CurrentUser>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import CurrentUser from '@/components/CurrentUser';

export default {
  name: 'App',
  components: {
    CurrentUser,
    Navigation
  },
  data() {
    return {
      // user: {
      //   name: 'test'
      // }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
