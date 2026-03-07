import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
//自动导入图像，同级目录的文件名不能重复！
import Icons from 'unplugin-icons/vite';
import { PluginOption } from 'vite';
//通过监听文件修改，自动重启 vite 服务
import { compression } from 'vite-plugin-compression2';
//打包分析插件
import ViteRestart from 'vite-plugin-restart';
//使用 gzip 或者 brotli 来压缩资源
// vite.config.ts
import ViteImages from 'vite-plugin-vue-images';

export const createPlugins = (isBuild: boolean): PluginOption[] => {
  const plugin: PluginOption[] = [
    react(),
    Icons({
      /* options */
    }),
    ViteImages({
      dirs: ['../../src/assets'], // 图像目录的相对路径
      extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // 有效的图像扩展
      customResolvers: [], // 覆盖名称->图像路径解析的默认行为
      customSearchRegex: '([a-zA-Z0-9]+)', // 重写搜索要替换的变量的Regex。
    }),
    ViteRestart({
      restart: ['../../src/views/**/*.tsx', '../../src/views/**/*.scss'],
    }),
  ];
  if (isBuild) {
    plugin.push(
      compression({
        algorithms: ['gzip'], // 压缩算法
        exclude: [/\.(br)$/, /\.(gz)$/], // 排除已压缩的文件
        threshold: 1024, // 只有大小大于该值的资源会被处理
        deleteOriginalAssets: false, // 是否删除原文件
      }) as PluginOption
    );
    plugin.push(
      visualizer({
        open: true, // 注意这里要设置为true，否则无效
        gzipSize: true,
        brotliSize: true,
      }) as PluginOption
    );
  }
  return plugin;
};
