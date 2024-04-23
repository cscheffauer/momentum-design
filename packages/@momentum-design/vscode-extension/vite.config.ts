import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'public'),
  build: {
    manifest: true,
    outDir: path.resolve(__dirname, 'dist'),
  },
  plugins: [react()],
});
