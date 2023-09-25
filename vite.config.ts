import { defineConfig } from 'vite';
import { createPlugins } from './config/plugin';
import { resolveBaseConfig } from './config/resolve';
import { serverConfig } from './config/server';
import { cssBaseConfig } from './config/css';
import { previewBaseConfig } from './config/preview';
import { optimizeDepsBaseConfig } from './config/optimizeDeps';
import { ssrBaseConfig } from './config/ssr';
// https://vitejs.dev/config/
export default ({ mode }) => {
  const isBuild = mode == 'production' ? true : false;
  console.log(isBuild, 'isBuild');
  return defineConfig({
    root: process.cwd(), // 项目根目录（index.html 文件所在的位置）,
    publicDir: 'public', // 静态资源服务的文件夹
    cacheDir: 'node_modules/.vite', // 存储缓存文件的目录
    postcss: '', // 内联的 PostCSS 配置 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源
    preprocessorOptions: {
      // css的预处理器选项
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    },
    esbuild: {
      // 最常见的用例是自定义 JSX
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      drop: ['console', 'debugger'], // 删除 所有的console 和 debugger
    },
    logLevel: 'info', // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
    clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    envDir: '/', // 用于加载 .env 文件的目录
    envPrefix: [], // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中

    plugins: createPlugins(isBuild),
    resolve: resolveBaseConfig(),
    server: serverConfig(),
    ssr: ssrBaseConfig(),
    css: cssBaseConfig(),
    preview: previewBaseConfig(),
    optimizeDeps: optimizeDepsBaseConfig(),
  });
};
