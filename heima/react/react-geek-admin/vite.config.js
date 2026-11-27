import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';
import { msw } from 'msw/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), msw()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
});
