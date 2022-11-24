import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 开发配置
  server: {
    //开启热更新
    hmr: true,
    // 自动打开浏览器
    open: true,
    // 服务器 IP 地址
    // 此处添加以下设置host: 0.0.0.0 或true
    // 将监听所有地址，包括局域网和公网地址
    host: true,
    // 服务器端口号
    port: 2017,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    strictPort: false,
    // 代理
    proxy: {
      // 选项写法
      // [env.VITE_BASE_API]: {
      //   target: env.VITE_BASE_URL,
      //   changeOrigin: true
      //   // rewrite: (path) => path.replace(/^\/api/, '')
      // }
    },
  },
  // 打包配置
  build: {
    // 浏览器兼容性  "esnext"|"modules"
    target: "modules",
    // 启用/禁用 CSS 代码拆分, 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    cssCodeSplit: true,
    // 构建目录自动清除
    emptyOutDir: true,
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // boolean | 'terser' | 'esbuild'
    // 混淆器, terser 构建后文件体积更小
    // vite3.x后需要自行安将插件terser, yarn add -D terser
    minify: "terser",
    // 传递给 Terser 的更多 minify 选项。
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        // 去掉注释内容
        comments: true,
      },
    },
    rollupOptions: {
      output: {
        // 最小化拆分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: "static/js/[name].[hash].js",
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: "static/js/[name].[hash].js",
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        // 此处会导致背景图片路径有问题
        assetFileNames: "static/[ext]/[name].[hash].[ext]",
      },
    },
  },
});
