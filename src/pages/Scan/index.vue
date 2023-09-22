<template>
  <div class="flex transition transition-all duration-200">
    <div id="qrcodebox" class="w-60 p-3 z-10">
      <div class="sticky top-3 flex flex-col gap-3 items-center">
        <!-- 二维码 -->
        <FileBox />

        <!-- 输入 -->
        <!-- <InputUrl /> -->

        <!-- 前往设置 -->
        <MoreSetting />
      </div>
    </div>
  </div>
</template>

<script setup>
import FileBox from "./components/FileBox.vue";
import MoreSetting from "./components/MoreSetting.vue";

</script>

<style scoped>
#qrcodebox :deep(.n-input__textarea-el) {
  word-break: break-all !important;
}
#qrcodeSetting {
  animation-duration: 0.3s;
}
</style>
