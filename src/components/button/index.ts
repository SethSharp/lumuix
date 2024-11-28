import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const spinnerSize = cva('animate-spin', {
  variants: {
    size: {
      // requires ! due to parent sizing from the Button
      default: '!size-4',
      xs: '!size-3',
      sm: '!size-3',
      lg: '!size-4',
      xl: '!size-5',
      xxl: '!size-6',
      icon: '!size-5',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-slate-800 text-slate-50 hover:bg-slate-800/80',
        primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/70',
        outline:
          'border border-input text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-transparent',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/50',
        ghost: 'text-black hover:bg-accent hover:text-accent-foreground dark:text-slate-50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 p-5 text-base',
        xs: 'h-6 rounded-md text-xs',
        sm: 'h-8 rounded-md p-4 text-sm',
        lg: 'h-10 rounded-lg px-8 text-lg',
        xl: 'h-12 rounded-lg px-14 text-xl',
        xxl: 'h-14 rounded-lg px-16 text-2xl',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
