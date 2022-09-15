<template>
  <n-upload
    directory-dnd
    list-type="image"
    v-model:file-list="store.uploadfileList"
    :max="2"
    accept=".jpg,.png,.jpeg,.webp"
    @before-upload="onBeforeUpload"
    @remove="onRemove"
  >
    <n-upload-dragger>
      <n-text> 点击或者拖动图片到该区域 </n-text>
    </n-upload-dragger>
  </n-upload>
</template>

<script setup>
import store from "@/store/index";

const onBeforeUpload = (files) => {
  console.log(files);
  if (files.fileList?.length) {
    store.uploadfileList = [];
  }

  const imgFile = files.file;

  // 转 base64
  let reader = new FileReader();
  reader.readAsDataURL(imgFile.file);
  reader.onload = function (e) {
    store.centerImageBase64 = e.target.result || "";
  };
};

const onRemove = () => {
  store.centerImageBase64 = "";
};
</script>
