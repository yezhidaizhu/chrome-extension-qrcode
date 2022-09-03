import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
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
  ],
  base:'./',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
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