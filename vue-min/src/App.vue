<template>
  <MyComponent />
</template>

<script>
import Component from '@/components/Component';
import '../../sandbox/SnapshotSandBox'

export default {
  name: 'App',
  components: {
    MyComponent: Component
  },
  data() {
    return {
      message: 'test',
      color: 'green',
      dataList: []
    }
  },
  created() {
    this.getEqList(19)
  },
  methods: {
    getEqItem() {
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      const r = a + b;
      return {
        a,
        b,
        r,
        id: Date.now()
      }
    },

    getEqList(n) {
      for (let i = 0; i <= n; i++) {
        this.dataList.push(this.getEqItem());
      }
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
