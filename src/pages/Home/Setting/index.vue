<template>
  <div class="flex justify-end gap-2">
    <IconBtn tip="重新设置" @iclick="initQrCodeSetting">
      <Refresh />
    </IconBtn>
    <IconBtn tip="关闭" @iclick="toggleShowSetting(false)">
      <CloseCircle />
    </IconBtn>
  </div>
  <n-collapse>
    <!-- 点选项 -->
    <n-collapse-item title="点选项" name="dotsOptions">
      <SettingLabel label="样式">
        <n-select
          v-model:value="store.qrcodeSetting.dotsOptions.type"
          placeholder="Select"
          :options="dotsOptionsType"
          size="small"
        />
      </SettingLabel>

      <SettingLabel label="颜色">
        <n-color-picker
          :show-alpha="false"
          v-model:value="store.qrcodeSetting.dotsOptions.color"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 角方形选项 -->
    <n-collapse-item title="角方形选项" name="cornersSquareOptions">
      <SettingLabel label="样式">
        <n-select
          v-model:value="store.qrcodeSetting.cornersSquareOptions.type"
          placeholder="Select"
          :options="cornersSquareOptionsType"
          size="small"
        />
      </SettingLabel>

      <SettingLabel label="颜色">
        <n-color-picker
          :show-alpha="false"
          v-model:value="store.qrcodeSetting.cornersSquareOptions.color"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 角放心内点选项 -->
    <n-collapse-item title="角方形内点选项" name="cornersDotOptions">
      <SettingLabel label="样式">
        <n-select
          v-model:value="store.qrcodeSetting.cornersDotOptions.type"
          placeholder="Select"
          :options="cornersDotOptionsType"
          size="small"
        />
      </SettingLabel>

      <SettingLabel label="颜色">
        <n-color-picker
          :show-alpha="false"
          v-model:value="store.qrcodeSetting.cornersDotOptions.color"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 背景 -->
    <n-collapse-item title="背景" name="backgroundOptions">
      <SettingLabel label="颜色">
        <n-color-picker
          :show-alpha="false"
          v-model:value="store.qrcodeSetting.backgroundOptions.color"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 图像 -->
    <n-collapse-item title="中心图像" name="imageOptions">
      <UploadImg />
      <div class="h-2"></div>
      <SettingLabel label="尺寸比例">
        <n-input-number
          v-model:value="store.qrcodeSetting.imageOptions.imageSize"
          :max="1"
          :min="0"
          :step="0.1"
          size="small"
        />
      </SettingLabel>
      <SettingLabel label="边距">
        <n-input-number
          v-model:value="store.qrcodeSetting.imageOptions.margin"
          :min="0"
          :step="1"
          size="small"
        />
      </SettingLabel>
      <SettingLabel label="背后的点">
        <n-switch
          v-model:value="store.qrcodeSetting.imageOptions.hideBackgroundDots"
          size="small"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 二维码 -->
    <n-collapse-item title="二维码" name="qrOptions">
      <SettingLabel label="纠错级别">
        <n-select
          v-model:value="store.qrcodeSetting.qrOptions.errorCorrectionLevel"
          placeholder="Select"
          :options="qrOptionsLevel"
          size="small"
        />
      </SettingLabel>
    </n-collapse-item>
  </n-collapse>

  <div class="h-16"></div>
</template>

<script setup>
import { Refresh, CloseCircle } from "@vicons/ionicons5";
import store, { initQrCodeSetting } from "@/store/index";
import {
  dotsOptionsType,
  cornersSquareOptionsType,
  cornersDotOptionsType,
  qrOptionsLevel,
} from "./typeOpts";
import SettingLabel from "../components/SettingLabel.vue";
import IconBtn from "../components/IconBtn.vue";
import useShowSetting from "../hooks/useShowSetting";
import UploadImg from "../components/UploadImg.vue";

const { toggleShowSetting } = useShowSetting();
</script>

<style>
.n-color-picker-panel {
  width: 200px;
}
.n-color-picker-pallete {
  height: 100px;
}
.n-collapse .n-collapse-item .n-collapse-item__header {
  padding-top: 8px;
}
.n-collapse .n-collapse-item {
  margin-top: 8px;
}
</style>
