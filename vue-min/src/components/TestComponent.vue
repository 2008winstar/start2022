<template>
  <div>{{ content }}</div>
  <div v-if="patternVisible">{{ patternVisible }}</div>
  <div>{{ debugVisible }}</div>
  <div>{{ aboutExeVisible }}</div>
  <button @click="onClickHelp">Help</button>
  <br />
  <button @click="toggle">Toggle</button>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';

const data = reactive({
  patternVisible: false,
  debugVisible: false,
  aboutExeVisible: true
});

const content = ref('content');
const { patternVisible, debugVisible, aboutExeVisible } = toRefs(data);
const onClickHelp = () => {
  console.log('help');
};
const toggle = () => {
  data.patternVisible = !data.patternVisible;
  aboutExeVisible.value = false;
}
</script>

<style scoped>

</style>