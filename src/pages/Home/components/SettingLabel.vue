<template>
  <div
    class="flex gap-2 pb-3 pl-2"
    :class="[flexCol ? 'items-center' : 'flex-col',clazz]"
  >
    <div class="flex items-center gap-1">
      <div class="w-0.5 h-3 rounded bg-green-500 mr-1"></div>
      {{ label }}
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  flexCol: {
    type: Boolean,
    default: false,
  },
  clazz:{
    type: String,
    default: "",
  }
});
</script>
