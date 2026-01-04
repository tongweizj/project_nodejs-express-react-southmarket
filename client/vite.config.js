// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig(({ mode }) => {
  // 从 .env 文件加载变量（例如，VITE_BACKEND_PORT）
  const env = loadEnv(mode, process.cwd(), '');
  const BACKEND_PORT = env.VITE_BACKEND_PORT || '3001';

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // porta do Vite (dev server)
      port: 5174,
      historyApiFallback: true,

      // 这个代理配置只在开发环境下有效
      // 所有对 /api 和 /auth 的调用都将被重定向到您的后端。
      proxy: {
        '/api': {
          target: `http://localhost:${BACKEND_PORT}`,
          changeOrigin: true,
          secure: false,
          // opcional: mantém o caminho /api no destino
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
        '/auth': {
          target: `http://localhost:${BACKEND_PORT}`,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/auth/, '/auth'),
        },
      },
    },

    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  };
});
