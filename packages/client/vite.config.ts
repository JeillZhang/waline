import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  // config options
  root: resolve(__dirname, 'template'),
  define: {
    VERSION: JSON.stringify(pkg.version),
  },
  plugins: [vue()],
  envDir: resolve(__dirname),
  envPrefix: ['VITE_', 'SERVERURL'],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        changeOrigin: true,
      },
    },
  },
});
