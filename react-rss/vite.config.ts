/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import istanbul from 'vite-plugin-istanbul'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      hooks: path.resolve(__dirname, './src/hooks'),
      store: path.resolve(__dirname, './src/store'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
})
