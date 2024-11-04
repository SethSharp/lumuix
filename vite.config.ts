import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/presets/styles.css',
          dest: 'types/presets',
        },
      ],
    }),
  ],
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        'dropdown-menu': './src/components/dropdown-menu/index.ts',
        badge: './src/components/badge/index.ts',
        presets: './src/presets/preset.ts',
      },
      formats: ["es", "cjs"],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/app': resolve(__dirname, 'app'),
    },
  },
})