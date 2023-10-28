import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer'; //打包分析插件
import ViteRestart from 'vite-plugin-restart'; //通过监听文件修改，自动重启 vite 服务
import { compression } from 'vite-plugin-compression2'; //使用 gzip 或者 brotli 来压缩资源
// vite.config.ts
import ViteImages from 'vite-plugin-vue-images'; //自动导入图像，同级目录的文件名不能重复！
import Icons from 'unplugin-icons/vite';
import { PluginOption } from 'vite';
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export const createPlugins = (isBuild: boolean): (false | Plugin | PluginOption[] | Plugin<any>)[] => {
  const plugin = [
    react(),
    Icons({
      /* options */
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ViteImages({
      dirs: ['../../src/assets'], // 图像目录的相对路径
      extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // 有效的图像扩展
      customResolvers: [], // 覆盖名称->图像路径解析的默认行为
      customSearchRegex: '([a-zA-Z0-9]+)', // 重写搜索要替换的变量的Regex。
    }),

    !isBuild &&
      ViteRestart({
        restart: ['my.config.[jt]s'],
      }),
    isBuild && visualizer(),

    isBuild &&
      compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/], deleteOriginalAssets: true }),
  ];
  return plugin;
};
