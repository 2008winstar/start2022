<template>
  <div style="margin-bottom: 15px; font-size: 22px">
    {{ item.a }} + {{ item.b }} = <input v-model="value">
    <span v-if="value == item.r" style="color: green; margin-left: 10px">√</span>
    <span v-else-if="value != ''" style="color: red; margin-left: 10px">×</span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "PlusItem",
  props: {
    item: {
      type: Object,
      default() {
        return {
          a: '',
          b: ''
        }
      }
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>