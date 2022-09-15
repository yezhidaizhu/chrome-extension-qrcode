<template>
  <div class="flex transition transition-all duration-200">
    <div id="qrcodebox" class="w-60 p-3 z-10">
      <div class="sticky top-3 flex flex-col gap-3 items-center">
        <!-- 二维码 -->
        <QrCode />

        <!-- 输入 -->
        <InputUrl />

        <!-- 前往设置 -->
        <div class="flex justify-end w-full px-2 -m-1">
          <IconBtn tip="更多设置" @iclick="toggleShowSetting"
            ><SettingsOutline
          /></IconBtn>
        </div>
      </div>
    </div>

    <!-- 设置 -->
    <div
      id="qrcodeSetting"
      class="animate__animated w-72 overflow-hidden transition transition-all duration-100"
      :class="
        showSetting
          ? 'animate__fadeInLeft w-60 h-auto '
          : 'w-0 animate__fadeOutLeft h-0'
      "
    >
      <div class="w-72 p-3">
        <Setting />
      </div>
    </div>
  </div>
</template>

<script setup>
import Setting from "./Setting/index.vue";
import QrCode from "./components/QrCode.vue";
import InputUrl from "./components/InputUrl.vue";
import { SettingsOutline } from "@vicons/ionicons5";
import useShowSetting from "./hooks/useShowSetting";
import IconBtn from "./components/iconBtn.vue";

const { showSetting, toggleShowSetting } = useShowSetting();
</script>

<style scoped>
#qrcodebox :deep(.n-input__textarea-el) {
  word-break: break-all !important;
}
#qrcodeSetting {
  animation-duration: 0.3s;
}
</style>
