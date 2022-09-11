import { defineComponent, h } from 'vue';

export default defineComponent({
  render() {
    const props = { style: { color: 'red' } };
    return h('h2', props, 'abc');
  }
})