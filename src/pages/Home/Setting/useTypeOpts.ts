import { useI18n } from "vue-i18n";

export default function useTypeOpts(){
  const {t} = useI18n();

  const dotsOptionsType = computed(()=>{
    return [
      {
        value: `square`,
        label: t("qrcodeTypeOpts.dotsOptionsType.square"),
      },
      {
        value: `dots`,
        label: t("qrcodeTypeOpts.dotsOptionsType.dots"),
      },
      {
        value: `rounded`,
        label:t("qrcodeTypeOpts.dotsOptionsType.rounded"),
      },
      {
        value: `extra-rounded`,
        label: t("qrcodeTypeOpts.dotsOptionsType.extraRounded"),
      },
      {
        value: `classy`,
        label: t("qrcodeTypeOpts.dotsOptionsType.classy"),
      },
      {
        value: `classy-rounded`,
        label: t("qrcodeTypeOpts.dotsOptionsType.classyRounded"),
      },
    ]
  });

  const cornersSquareOptionsType = computed(()=>[
    {
      value: ``,
      label: t("qrcodeTypeOpts.cornersSquareOptionsType.none"),
    },
    {
      value: `square`,
      label: t("qrcodeTypeOpts.cornersSquareOptionsType.square"),
    },
    {
      value: `dot`,
      label: t("qrcodeTypeOpts.cornersSquareOptionsType.dot"),
    },
    {
      value: `extra-rounded`,
      label: t("qrcodeTypeOpts.cornersSquareOptionsType.extraRounded"),
    },
  ]);

   const cornersDotOptionsType = computed(()=>[
    {
      value: ``,
      label:  t("qrcodeTypeOpts.cornersSquareOptionsType.none"),
    },
    {
      value: `square`,
      label: t("qrcodeTypeOpts.cornersSquareOptionsType.square"),
    },
    {
      value: `dot`,
      label: t("qrcodeTypeOpts.cornersSquareOptionsType.dot"),
    },
  ]);

  const qrOptionsLevel = [
    {
      value: `L`,
      label: `L`,
    },
    {
      value: `M`,
      label: `M`,
    },
    {
      value: `Q`,
      label: `Q`,
    },
    {
      value: `H`,
      label: `H`,
    },
  ];

  return {
    cornersSquareOptionsType,
    dotsOptionsType,
    cornersDotOptionsType,
    qrOptionsLevel,
  }
}





