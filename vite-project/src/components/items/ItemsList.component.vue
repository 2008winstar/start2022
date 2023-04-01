<script setup lang="ts">
  import type { ItemInterface } from '../../models';
  import ItemComponent from './children/Item.component.vue';
  defineProps<{ items: ItemInterface[] }>();
  const emit = defineEmits<{ (e: 'selectItem', id: number): any }>()

  const handleClick = (item: ItemInterface) => {
    item.selected = !item.selected;
    console.log('handleItemClick', item.id, item.selected);
    // emit('selectItem',  item.id);
  }
</script>

<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <ItemComponent v-for="(item, index) in items" :key="item.id" :model="item" @selectItem="handleClick(item)" />
    </ul>
  </div>
</template>

<style scoped>

</style>