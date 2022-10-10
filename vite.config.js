import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const config = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      dirs: './src/pages',
    }),
    Layouts({
      layoutsDir: './src/layouts'
    }),
    Components({
      dirs: ['./src/components'],
      extensions: ['vue'],
      deep: true,
      directives: true,
      importPathTransform: v => v,
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
    AutoImport({
      dts: true,
      imports: ['vue'],
      dirs: [
        './src/composables'
      ],
    }),
  ],
})

export default config