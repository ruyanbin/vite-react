import { resolve } from 'path';
export const resolveBaseConfig = () => {
  return {
    alias: {
      '#': resolve(__dirname, '../src'),
      '#a': resolve(__dirname, '../src/assets'),
      '#c': resolve(__dirname, '../src/components'),
      '#config': resolve(__dirname, '../src/config'),
      '#h': resolve(__dirname, '../src/hooks'),
      '#v': resolve(__dirname, '../src/views'),
      '#p': resolve(__dirname, '../src/router'),
      '#s': resolve(__dirname, '../src/redux'),
    },
    dedupe: [], // 强制 Vite 始终将列出的依赖项解析为同一副本
    conditions: [], // 解决程序包中 情景导出 时的其他允许条件
    mainFields: [], // 解析包入口点尝试的字段列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 导入时想要忽略的扩展名列表
    preserveSymlinks: false, // 启用此选项会使 Vite 通过原始文件路径确定文件身份
  };
};
