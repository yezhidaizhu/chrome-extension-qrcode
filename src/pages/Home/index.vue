<script setup>
import QRCode from 'qrcode';
import QRCodeVue3 from "qrcode-vue3";

const qrcodeRef = ref();
// const url = ref('https://www.npmjs.com/package/qrcode');
const url = ref('');

const inputStatus = computed(()=>{
  return !url.value ? "error" : "";
});

onMounted(async ()=>{
  const tab =await getCurrentTab();
  const _url = tab ? tab.url : "";

  url.value = _url;

  // watchEffect(()=>{
  //   creatQrcode()
  // })
});

// function creatQrcode(){
//   const value = url.value || "请输入链接好吧";
//   QRCode.toCanvas(qrcodeRef.value,value,{
//     margin:1.5,
//     width: 220,
//   }, function (error) {
//     if (error) console.error(error)
//     console.log('success!');
//   })
// }

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome?.tabs?.query(queryOptions) || [];
  
  console.log(tab);
  
  return tab;
}

</script>

<template>
  <div id="qrcodebox" class=" w-60 p-2 flex flex-col gap-2 items-center ">
    <!-- <canvas ref="qrcodeRef" id="qrcode" class="shadow border"></canvas> -->
    <div :style="{width:'200px',height:'200px'}" class="shadow border">
      <QRCodeVue3 :width="200"
          :height="200"
          :value="url"
           />
    </div>

    <n-input
      autofocus
      v-model:value="url"
      placeholder="请输入链接"
      size="small"
      type="textarea"
      :autosize="{
        minRows: 1,
        maxRows: 3
      }"
      :status="inputStatus"
    />
  </div>
</template>

<style>
#qrcodebox .n-input__textarea-el{
  word-break: break-all !important;
}
</style>