<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <MyComponent />
  <DefineTest />
  <Item />
  <Test />
<!--  <PlusItem v-for="item in dataList" :item="item" :key="item.id" />-->
  <br />
  <FancyButton>Click me</FancyButton>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Item from './components/Item.vue'
import DefineTest from '@/components/DefineTest';
import Component from '@/components/Component';
import Item from '@/components/Item.vue';
import Test from './components/TestComponent.vue';
// import PlusItem from './components/PlusItem.vue';
import '../../sandbox/SnapshotSandBox'
import FancyButton from '@/slots/FancyButton';

export default {
  name: 'App',
  components: {
    // HelloWorld
    MyComponent: Component,
    DefineTest,
    Item,
    // PlusItem,
    Test,
    FancyButton
  },
  data() {
    return {
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
