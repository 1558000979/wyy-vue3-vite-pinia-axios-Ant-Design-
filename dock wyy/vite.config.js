import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  Pages({
    dirs: 'src/views',  // 需要生成路由的文件的目录
    exclude: ['**/components/*.vue']  // 排除在外的目录，将所有 components 目录下的 .vue 文件排除
  })],
})
