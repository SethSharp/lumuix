import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/presets/slate.css',
          dest: 'presets',
        },
      ],
    })
  ],
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        'accordion': './src/components/accordion/index.ts',
        'badge': './src/components/badge/index.ts',
        'breadcrumb': './src/components/breadcrumb/index.ts',
        'button': './src/components/button/index.ts',
        'calendar': './src/components/calendar/index.ts',
        'card': './src/components/card/index.ts',
        'combobox': './src/components/combobox/index.ts',
        'command': './src/components/command/index.ts',
        'dialog': './src/components/dialog/index.ts',
        'dropdown-menu': './src/components/dropdown-menu/index.ts',
        'form': './src/components/form/index.ts',
        'inputs': './src/components/inputs/index.ts',
        'lumuix': './src/components/lumuix/index.ts',
        'pagination': './src/components/pagination/index.ts',
        'popover': './src/components/popover/index.ts',
        'range-calendar': './src/components/range-calendar/index.ts',
        'select': './src/components/select/index.ts',
        'separator': './src/components/separator/index.ts',
        'sheet': './src/components/sheet/index.ts',
        'sidebar': './src/components/sidebar/index.ts',
        'skeleton': './src/components/skeleton/index.ts',
        'slider': './src/components/slider/index.ts',
        'table': './src/components/table/index.ts',
        'tabs': './src/components/tabs/index.ts',
        'toast': './src/components/toast/index.ts',
        'tooltip': './src/components/tooltip/index.ts',
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': resolve(__dirname, 'src/components'),
    },
  },
})