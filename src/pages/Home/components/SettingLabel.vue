<template>
  <div class="flex items-center gap-3 pb-3">
    <div class="w-20 text-right">{{ label }}</div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>
