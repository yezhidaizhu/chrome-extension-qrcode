<template>
  <n-popover trigger="hover" :delay="1500">
    <template #trigger>
      <n-button secondary circle size="tiny" @click="$emit('iclick')">
        <template #icon>
          <n-icon><slot></slot></n-icon>
        </template>
      </n-button>
    </template>
    <span> {{ tip }} </span>
  </n-popover>
</template>

<script setup>
defineProps({
  tip: {
    type: String,
    default: "",
  },
});

defineEmits(["iclick"]);
</script>
