export const previewBaseConfig = () => {
  return {
    port: 5000, // 指定开发服务器端口
    strictPort: true, // 若端口已被占用则会直接退出
    https: false, // 启用 TLS + HTTP/2
    open: true, // 启动时自动在浏览器中打开应用程序
    proxy: {
      // 配置自定义代理规则
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
    cors: true, // 配置 CORS
  };
};
