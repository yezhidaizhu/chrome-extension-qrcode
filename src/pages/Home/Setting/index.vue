<template>
  <div class="flex justify-end gap-2 pb-2">
    <div class="w-24">
      <n-space vertical>
        <n-select
          v-model:value="store.locale"
          size="tiny"
          :options="langOptions"
        />
      </n-space>
    </div>

    <IconBtn :tip="$t('iconTip.refreshSetting')" @iclick="_initQrCodeSetting">
      <Refresh />
    </IconBtn>

    <IconBtn
      :tip="$t('iconTip.closeSetting')"
      @iclick="toggleShowSetting(false)"
    >
      <CloseCircle color="#ff6f6f" />
    </IconBtn>
  </div>

  <n-collapse>
    <!-- 点选项 -->
    <n-collapse-item
      :title="$t('qrcodeSetting.dotsOptions.label')"
      name="dotsOptions"
    >
      <SettingLabel :label="$t('qrcodeSetting.dotsOptions.type')">
        <n-select
          v-model:value="store.qrcodeSetting.dotsOptions.type"
          placeholder="Select"
          :options="dotsOptionsType"
          size="small"
        />
      </SettingLabel>

      <SettingLabel :label="$t('qrcodeSetting.dotsOptions.color')">
        <n-color-picker
          :show-alpha="false"
          v-model:value="store.qrcodeSetting.dotsOptions.color"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 角方形选项 -->
    <n-collapse-item
      :title="$t('qrcodeSetting.cornersSquareOptions.label')"
      name="cornersSquareOptions"
    >
      <SettingLabel :label="$t('qrcodeSetting.cornersSquareOptions.type')">
        <n-select
          v-model:value="store.qrcodeSetting.cornersSquareOptions.type"
          placeholder="Select"
          :options="cornersSquareOptionsType"
          size="small"
        />
      </SettingLabel>

      <SettingLabel :label="$t('qrcodeSetting.cornersSquareOptions.color')">
        <n-color-picker
          :show-alpha="false"
          v-model:value="store.qrcodeSetting.cornersSquareOptions.color"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 角放心内点选项 -->
    <n-collapse-item
      :title="$t('qrcodeSetting.cornersDotOptions.label')"
      name="cornersDotOptions"
    >
      <SettingLabel :label="$t('qrcodeSetting.cornersDotOptions.type')">
        <n-select
          v-model:value="store.qrcodeSetting.cornersDotOptions.type"
          placeholder="Select"
          :options="cornersDotOptionsType"
          size="small"
        />
      </SettingLabel>

      <SettingLabel :label="$t('qrcodeSetting.cornersDotOptions.color')">
        <n-color-picker
          :show-alpha="false"
          v-model:value="store.qrcodeSetting.cornersDotOptions.color"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 背景 -->
    <n-collapse-item
      :title="$t('qrcodeSetting.backgroundOptions.label')"
      name="backgroundOptions"
    >
      <SettingLabel :label="$t('qrcodeSetting.backgroundOptions.color')">
        <n-color-picker
          :show-alpha="false"
          v-model:value="store.qrcodeSetting.backgroundOptions.color"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 图像 -->
    <n-collapse-item
      :title="$t('qrcodeSetting.imageOptions.label')"
      name="imageOptions"
    >
      <UploadImg />
      <div class="h-2"></div>
      <SettingLabel :label="$t('qrcodeSetting.imageOptions.imageSize')">
        <n-input-number
          v-model:value="store.qrcodeSetting.imageOptions.imageSize"
          :max="1"
          :min="0"
          :step="0.1"
          size="small"
        />
      </SettingLabel>
      <SettingLabel :label="$t('qrcodeSetting.imageOptions.margin')">
        <n-input-number
          v-model:value="store.qrcodeSetting.imageOptions.margin"
          :min="0"
          :step="1"
          size="small"
        />
      </SettingLabel>
      <SettingLabel
        :label="$t('qrcodeSetting.imageOptions.hideBackgroundDots')"
        flexCol
      >
        <n-switch
          v-model:value="store.qrcodeSetting.imageOptions.hideBackgroundDots"
          size="small"
        />
      </SettingLabel>
    </n-collapse-item>

    <!-- 二维码 -->
    <n-collapse-item
      :title="$t('qrcodeSetting.qrOptions.label')"
      name="qrOptions"
    >
      <SettingLabel :label="$t('qrcodeSetting.qrOptions.errorCorrectionLevel')">
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
import useTypeOpts from "./useTypeOpts";
import SettingLabel from "../components/SettingLabel.vue";
import IconBtn from "../components/IconBtn.vue";
import useShowSetting from "../hooks/useShowSetting";
import UploadImg from "../components/UploadImg.vue";
import useLocale from "../hooks/useLocale";
import { useMessage } from "naive-ui";

const {
  cornersSquareOptionsType,
  dotsOptionsType,
  cornersDotOptionsType,
  qrOptionsLevel,
} = useTypeOpts();

const { toggleShowSetting } = useShowSetting();

const { t, langOptions } = useLocale();

const message = useMessage();

const _initQrCodeSetting = () => {
  initQrCodeSetting();
  message.success(t("message.resetSuccess"));
};
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
