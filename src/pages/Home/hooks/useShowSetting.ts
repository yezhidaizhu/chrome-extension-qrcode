import store, { toggleShowSetting } from "@/store/index";

export default function useShowSetting(){
  const showSetting = computed(() => store.showSetting);

  return {
    showSetting,
    toggleShowSetting
  }
}