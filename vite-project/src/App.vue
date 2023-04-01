<script setup lang="ts">
import { reactive } from 'vue';
import type { ItemInterface } from './models';
import ItemsListComponent from './components/items/ItemsList.component.vue';
import ItemsView from './views/Items.view.vue';

const items: ItemInterface[] = reactive([
  {
    id: 1,
    name: 'Item 1',
    selected: false
  },
  {
    id: 2,
    name: 'Item 2',
    selected: false
  },
  {
    id: 3,
    name: 'Item 3',
    selected: false
  }
]);

const onSelectItem = (id: number) => {
  console.log('onSelectItem');
  const item = items.find((o) => o.id === id);
  if (!item) {
    console.log(`onSelectItem: could not find item with id: ${id}`);
    return;
  }

  item.selected = !item.selected;
}
</script>

<template>
  <div class="home">
<!--    <ItemsListComponent :items="items" @selectItem="onSelectItem" />-->
    <ItemsView />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
