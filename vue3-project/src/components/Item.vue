<template>
  <div>Item</div>
</template>

<script>
export default {
  name: "Item",
  beforeCreate() {
    console.log('beforeCreate');
  },
  setup() {
    console.log('setup');
  },
  created() {
    console.log('created');
  }
}
</script>

<style scoped>

</style>