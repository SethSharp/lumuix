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
    lib: {
      entry: {
        lumuix: resolve(__dirname, 'src/index.ts'),
        'dropdown-menu': resolve(__dirname, 'src/components/dropdown-menu/index.ts'),
      },
      name: 'lumuix',
      fileName: (entry) => entry.name,
    },
    rollupOptions: {
      external: ['vue'],
      // Add this to ensure separate chunks for each entry point
      output: {
        entryFileNames: '[name].js',
      },
    },
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/app': resolve(__dirname, 'app'),
      '@sethsharp/lumuix': '/src',
      '@sethsharp/lumuix/dropdown-menu': '/src/components/dropdown-menu',
    },
  },
})
