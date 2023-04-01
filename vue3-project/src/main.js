import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.directive('change-color', function (el, binding, vnode) {
  el.style['color'] = binding.value;
  console.log(vnode);
})
app.mount('#app')
