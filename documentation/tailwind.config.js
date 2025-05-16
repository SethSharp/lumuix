import defaultTheme from 'tailwindcss/defaultTheme'
import preset from './src/presets/preset.js'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  css: {
    postcss: './postcss.config.cjs',
  },

  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@sethsharp/lumuix/dist/*.js',
  ],

  safelist: ['max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
