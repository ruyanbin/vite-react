//使用 gzip 或者 brotli 来压缩资源
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
//自动导入图像，同级目录的文件名不能重复！
import Icons from 'unplugin-icons/vite';
import { PluginOption } from 'vite';
//通过监听文件修改，自动重启 vite 服务
import { compression } from 'vite-plugin-compression2';

export const createPlugins = (isBuild: boolean): PluginOption[] => {
  const plugin: PluginOption[] = [
    react(),
    tailwindcss() as PluginOption,
    Icons({
      /* options */
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
