export const ssrBaseConfig = () => {
  return {
    external: [], // 列出的是要为 SSR 强制外部化的依赖,
    noExternal: '', // 列出的是防止被 SSR 外部化依赖项
    target: 'node', // SSR 服务器的构建目标
  };
};
