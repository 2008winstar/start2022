<template>
  <span>
    <slot v-bind:user="user">{{ user.lastName }}</slot>
  </span>
</template>

<script>
export default {
  name: 'CurrentUser',
  data() {
    return {
      user: {
        firstName: 'win',
        lastName: 'start'
      }
    }
  }
}
</script>

<style scoped>

</style>