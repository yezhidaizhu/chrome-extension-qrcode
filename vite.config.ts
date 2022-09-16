import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers:[ NaiveUiResolver() ]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      dts: './src/auto-import.d.ts',
      imports: ['vue'],
    }),
    VueI18nPlugin({
      include: path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    }),
  ],
  base:'./',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build:{
    // 打包路劲
    outDir: "extension/dist"
  }
})


// function NaiveUiResolver():any {
//   return {
//     type: 'component',
//     resolve: (name: string) => {
//       if (name.match(/^(N[A-Z]|n-[a-z])/))
//         return { name, from: 'naive-ui' }
//     },
//   }
// }