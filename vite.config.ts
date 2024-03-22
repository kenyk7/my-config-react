/* eslint-disable import/no-extraneous-dependencies */
// import eslintPlugin from 'vite-plugin-eslint';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      eslintOptions: {
        cache: false,
      },
    }),
    tsconfigPaths(),
  ],
});
