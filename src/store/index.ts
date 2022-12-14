import { reactive } from 'vue'
import { persistent } from './persistent';

const store = reactive({
  url:"",
  showSetting: false,
  // 中心图片上传
  uploadfileList: [],
  centerImageBase64: undefined,
  // 二维码设置
  qrcodeSetting: qrCodeSettingOpts(),
  // 语言
  locale: 'en',
  // 二维码实例对象
  downloadQrCode:function(){},
  VQRCodeStyling:undefined,
});

// 持久化
persistent(store,["qrcodeSetting","locale"]);

// 初始化设置
export function initQrCodeSetting(){
  store.qrcodeSetting = qrCodeSettingOpts();
  store.uploadfileList = [];
  store.centerImageBase64 = undefined;
}

// 打开设置
export function toggleShowSetting(status:boolean){
  let _status = !store.showSetting;

  if(status!==undefined){
    _status = status
  }

  store.showSetting = _status;
};

// 设置选项
function qrCodeSettingOpts(){
  return {
      dotsOptions: {
        type: "extra-rounded",
        color:"#000000",
      },
      cornersSquareOptions:{
        type: "",
        color:"#000000",
      },
      cornersDotOptions:{
        type: "",
        color:"#000000",
      },
      backgroundOptions:{
        color: "#FFFFFF"
      },
      imageOptions:{
        imageSize: 0.4,
        margin: 0,
        hideBackgroundDots: true,
      },
      qrOptions:{
        errorCorrectionLevel: 'Q'
      }
    
  }
};

export default store;
