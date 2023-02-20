import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// icon
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver(),
        IconsResolver({//自动导入图标
          prefix: 'Icon',
        })],
    }),
    Components({
      resolvers: [ElementPlusResolver(),
        IconsResolver({//自动注册图标组件
          enabledCollections: ['ep'],
        })],
    }),
    Icons({
      autoInstall: true,
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   // css预处理器
  //   preprocessorOptions: {
  //     scss: {
  //       // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
  //       additionalData: '@import "./src/assets/base.css";'
  //     }
  //   }
  // },

  server: {
    // host: '0.0.0.0', // ip
    port: 8080,
    // hmr: true,  // 热启动
    // open: true // 自动打开浏览器
  },
})
