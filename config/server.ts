export const serverConfig = () => {
  return {
    hmr: true, // 开启热热更新
    open: true, // 项目启动自动打开页面
    host: 'localhost', // 指定服务器应该监听哪个 IP 地址
    port: 3000, // 指定开发服务器端口
    https: false, // 启用 TLS + HTTP/2
    strictPort: true, // 若端口已被占用则会直接退出
    cors: true, // 配置 CORS
    force: true, // 强制使依赖预构建
    middlewareMode: '', // 以中间件模式创建 Vite 服务器 fs: {
    strict: true, // 限制为工作区 root 路径以外的文件的访问
    allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
    deny: ['.env', '.env.*', '*.{pem,crt}'], // 用于限制 Vite 开发服务器提供敏感文件的黑名单
    origin: '', // 用于定义开发调试阶段生成资产的 origin
    proxy: {
      // 配置自定义代理规则
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  };
};
