<template>
  <div>
    <div :style="{ width: '220px', minHeight: '220px' }">
      <n-upload
        accept=".jpg,.png,.jpeg,.webp"
        v-model:file-list="uploadfileList"
        :max="2"
        list-type="image"
        @before-upload="onBeforeUpload"
      >
        <n-upload-dragger>
          <n-icon size="40" :depth="3">
            <archive-icon />
          </n-icon>
          <div>
            <n-text class="text-gray-500">
              {{ $t("scan.uploadImg") }}
            </n-text>
          </div>
        </n-upload-dragger>
      </n-upload>

      <SettingLabel :label="$t('scan.resultLabel')" clazz="!p-0 !mt-2">
        <n-input
          v-model:value="result"
          type="textarea"
          placeholder=""
          readonly
          :autosize="{
            minRows: 2,
          }"
        />
      </SettingLabel>
    </div>
  </div>
</template>

<script setup>
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import SettingLabel from "../../Home/components/SettingLabel.vue";
import qrcodeParser from "qrcode-parser";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const message = useMessage();
const result = ref();
const uploadfileList = ref([]);

watch(uploadfileList, () => {
  const imgFile = uploadfileList.value?.[0];
  if (imgFile) {
    qrcodeParser(imgFile?.file)
      .then((res) => {
        result.value = res;
      })
      .catch(() => {
        message.error(t("message.qrcodeParserFail"));
      });
  } else {
    result.value = "";
  }
});
const onBeforeUpload = ({ file }) => {
  uploadfileList.value = [];
};
</script>
