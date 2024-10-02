import { type VariantProps, cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-slate-800 text-slate-50 hover:bg-slate-800/80',
        primary:
          'border-transparent bg-primary-600 text-primary-50 hover:bg-primary-600/80',
        secondary:
          'border-transparent bg-secondary-600 text-secondary-50 hover:bg-secondary-600/80',
        destructive:
          'border-transparent bg-destructive-600 text-destructive-50 hover:bg-destructive-600/80',
        outline: 'text-foreground hover:bg-gray-100 hover:border-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
