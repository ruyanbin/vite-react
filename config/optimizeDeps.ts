export const optimizeDepsBaseConfig = () => {
  return {
    entries: [], // 指定自定义条目——该值需要遵循 fast-glob 模式
    exclude: [], // 在预构建中强制排除的依赖项
    include: [], // 可强制预构建链接的包
    keepNames: false, // true 可以在函数和类上保留 name 属性
  };
};
