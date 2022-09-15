import store from "@/store/index";
import { useI18n } from "vue-i18n";

export default function useLocale(){
  const {t, locale} = useI18n();
  watch(()=>store.locale,()=>{
    locale.value = store.locale;
  },{
    immediate:true
  });
  
  const langOptions = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "zh",
      label: "中文",
    },
  ];

  return {
    t,
    langOptions,
  }
}