<template>
  <div class="flex gap-2 pb-3" :class="flexCol ? 'items-center' : 'flex-col'">
    <div class="flex items-center gap-1 pl-2">
      <div class="w-1 h-3 rounded-md bg-green-600"></div>
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
});
</script>
