<template>
  <div class="flex justify-end gap-3 w-full px-2 -m-1">
    <IconBtn :tip="$t('iconTip.back')" @iclick="$router.back()">
      <ExitOutline />
    </IconBtn>
  </div>
</template>

<script setup>
import { ExitOutline } from "@vicons/ionicons5";
import IconBtn from "../../Home/components/IconBtn.vue";

</script>
