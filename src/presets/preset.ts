export default {
  safelist: ['dark'],

  darkMode: ['class'],

  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          '50': 'hsl(var(--primary-50))',
          '100': 'hsl(var(--primary-100))',
          '200': 'hsl(var(--primary-200))',
          '300': 'hsl(var(--primary-300))',
          '400': 'hsl(var(--primary-400))',
          '500': 'hsl(var(--primary-500))',
          '600': 'hsl(var(--primary-600))',
          '700': 'hsl(var(--primary-700))',
          '800': 'hsl(var(--primary-800))',
          '900': 'hsl(var(--primary-900))',
          '950': 'hsl(var(--primary-950))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          '50': 'hsl(var(--secondary-50))',
          '100': 'hsl(var(--secondary-100))',
          '200': 'hsl(var(--secondary-200))',
          '300': 'hsl(var(--secondary-300))',
          '400': 'hsl(var(--secondary-400))',
          '500': 'hsl(var(--secondary-500))',
          '600': 'hsl(var(--secondary-600))',
          '700': 'hsl(var(--secondary-700))',
          '800': 'hsl(var(--secondary-800))',
          '900': 'hsl(var(--secondary-900))',
          '950': 'hsl(var(--secondary-950))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          '50': 'hsl(var(--destructive-50))',
          '100': 'hsl(var(--destructive-100))',
          '200': 'hsl(var(--destructive-200))',
          '300': 'hsl(var(--destructive-300))',
          '400': 'hsl(var(--destructive-400))',
          '500': 'hsl(var(--destructive-500))',
          '600': 'hsl(var(--destructive-600))',
          '700': 'hsl(var(--destructive-700))',
          '800': 'hsl(var(--destructive-800))',
          '900': 'hsl(var(--destructive-900))',
          '950': 'hsl(var(--destructive-950))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
}
