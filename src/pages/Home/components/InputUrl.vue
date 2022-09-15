<template>
  <n-input
    autofocus
    v-model:value="store.url"
    placeholder="请输入链接"
    size="small"
    type="textarea"
    :autosize="{
      maxRows: 3,
    }"
    maxlength="500"
    :status="inputStatus"
  />
</template>

<script setup>
import store from "@/store/index";

const inputStatus = computed(() => {
  return !store.url ? "error" : "";
});

// 初始化当前路径
const initUrl = async () => {
  const tab = await getCurrentTab();
  const _url = tab ? tab.url : location?.href;
  store.url = _url;

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = (await chrome?.tabs?.query(queryOptions)) || [];
    return tab;
  }
};

onMounted(initUrl);
</script>
