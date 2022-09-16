<template>
  <div
    :style="{ width: '220px', height: '220px' }"
    class="shadow border flex justify-center items-center overflow-hidden"
  >
    <QRCodeVue3
      ref="qrcodeRef"
      :key="key"
      :width="220"
      :height="220"
      :value="url"
      v-bind="qRCodeProps"
    />
  </div>
</template>

<script setup>
import QRCodeVue3 from "qrcode-vue3";
import store from "@/store/index";

const url = computed(() => store.url);
const qrcodeSetting = computed(() => store.qrcodeSetting);

const qRCodeProps = computed(() => {
  const _qrcodeSetting = qrcodeSetting.value || {};
  const image = store.centerImageBase64;
  return { ..._qrcodeSetting, image };
});

const qrcodeRef = ref();

watch(
  () => qrcodeRef.value?.qrCode,
  () => {
    store.VQRCodeStyling = qrcodeRef.value?.qrCode;
  }
);

const key = ref(1); // 用于更新用

watch(
  [qRCodeProps],
  () => {
    key.value++;
  },
  { deep: true }
);
</script>

<style scoped>
:deep(img) {
  -webkit-user-drag: none;
}
</style>
