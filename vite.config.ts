import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {
        'dropdown-menu': resolve(__dirname, 'src/components/dropdown-menu/index.ts'),
      },
      name: 'lumuix',
      formats: ['es', 'umd'],
      fileName: (format) => `lumuix.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Create separate directories for each component
        assetFileNames: (assetInfo) => {
          const componentName = assetInfo.name?.split('/').slice(-2, -1)[0]; // Get the component name
          return `${componentName}/[name].[ext]`;
        },
        entryFileNames: (chunkInfo) => {
          const componentName = chunkInfo.facadeModuleId?.split('/').slice(-2, -1)[0]; // Get the component name
          return `${componentName}/index.[format].js`;
        },
        chunkFileNames: (chunkInfo) => {
          const componentName = chunkInfo.facadeModuleId?.split('/').slice(-2, -1)[0]; // Get the component name
          return `${componentName}/[name].[format].js`;
        }
      }
    },
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
