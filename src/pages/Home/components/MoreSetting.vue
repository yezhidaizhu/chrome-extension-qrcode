<template>
  <div class="flex justify-end gap-3 w-full px-2 -m-1">
    <IconBtn :tip="$t('iconTip.moreSetting')" @iclick="toggleShowSetting"
      ><SettingsOutline
    /></IconBtn>
  </div>
</template>

<script setup>
import { SettingsOutline } from "@vicons/ionicons5";
import IconBtn from "./iconBtn.vue";
import useShowSetting from "../hooks/useShowSetting";

const { toggleShowSetting } = useShowSetting();
</script>
