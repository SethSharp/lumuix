import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'bg-slate-800 text-slate-50 hover:bg-slate-700/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90',
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-[hsl(var(--primary) / 0.8)] dark:text-slate-100 dark:hover:bg-[hsl(var(--primary) / 0.7)]',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 dark:bg-[hsl(var(--secondary) / 0.8)] dark:text-slate-100 dark:hover:bg-[hsl(var(--secondary) / 0.7)]',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-[hsl(var(--destructive) / 0.9)] dark:bg-[hsl(var(--destructive) / 0.8)] dark:text-slate-100 dark:hover:bg-[hsl(var(--destructive) / 0.7)]',
        outline:
          'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        ghost:
          'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        link: 'text-slate-500 underline-offset-4 hover:underline dark:text-slate-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 rounded px-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
