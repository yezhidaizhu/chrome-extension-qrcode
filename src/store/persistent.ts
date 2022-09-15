import Store from "store"; // 本地存储

export const store_key = "qrcode_extension";

/**
 * 注意：重新写回的时候，只写回设置部分
 */
export function persistent(store: any) {
  loadLocationStore();  

  // 持久化
  watch(store, (n) => {
    try {
      const storeData = {
        ...n,
        UploadfileList:[],
        centerImageBase64:"",
      };
      
      Store.set(store_key, storeData);
    } catch (error) {
      console.error("persistent: 存储到本地失败");
      console.error(error);
    }
  });

  // 第一次加载写入
  function loadLocationStore() {
    const locaStore = Store.get(store_key);
    try {
      // 只写入设置部分
      const qrcodeSetting = locaStore?.qrcodeSetting;

      if (qrcodeSetting) {
        store.qrcodeSetting = qrcodeSetting;
      }
    } catch (error) {
      console.error("persistent: 本地存储历史写入失败");
      console.error(error);
    }
  }
}
