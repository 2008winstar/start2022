<template>
  <div>
    <a :href="url" class="nav-link"></a>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    url: String
  }
}
</script>
