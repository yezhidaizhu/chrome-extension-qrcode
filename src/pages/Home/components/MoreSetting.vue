<template>
  <div class="flex justify-end gap-3 w-full px-2 -m-1">
    <IconBtn :tip="$t('iconTip.qrcodeParser')" @iclick="$router.push('/scan')">
      <ScanOutline />
    </IconBtn>

    <IconBtn :tip="$t('iconTip.downloadQrCode')" @iclick="downloadQrCodeImg">
      <DownloadOutline />
    </IconBtn>

    <IconBtn :tip="$t('iconTip.moreSetting')" @iclick="toggleShowSetting">
      <SettingsOutline />
    </IconBtn>
  </div>
</template>

<script setup>
import { SettingsOutline, DownloadOutline, ScanOutline } from "@vicons/ionicons5";
import IconBtn from "./IconBtn.vue";
import useShowSetting from "../hooks/useShowSetting";
import store from "@/store";

const { toggleShowSetting } = useShowSetting();

const downloadQrCodeImg = () => {
  store.VQRCodeStyling?.download({ extension: "png" });
};
</script>
