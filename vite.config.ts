/// <reference types="vitest" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],
    base: '/',
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    // CHANGED: added Vitest config directly into Vite config
    test: {
      environment: 'node',
      globals: true,
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
      exclude: ['node_modules', 'dist', 'coverage'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        reportsDirectory: './coverage',
        thresholds: {
          lines: 60,
          functions: 60,
          branches: 50,
          statements: 60
        }
      }
    }
  };
});